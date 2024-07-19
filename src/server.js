const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));
app.use('/style.css', express.static(path.join(__dirname, 'style.css')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/upload', upload.single('luaFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const name = req.file.name;
    const oriName = req.file.oriName;
    const option = req.body.option;

    let command = '';
    if (option === 'normal') {
        command = `java -jar ../unluac.jar ${name} -o ${oriName}.dec`;
    } else {
        command = `java -jar ../unluac.jar --${option} ${name} -o ${oriName}.dec`;
    }

    exec(command, { cwd: 'uploads' }, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send('Error processing file');
        }

        const filePath = path.join(__dirname, '../uploads', `${oriName}.dec`);
        res.download(filePath, `${oriName}.dec`, (err) => {
            if (err) {
                console.error('Error downloading file:', err);
                return res.status(500).send('Error downloading file');
            }
            // menghapus file setelah selesai di proses
            fs.unlink(filePath, (err) => {
                if (err) console.error('Error deleting processed file:', err);
            });
            fs.unlink(path.join(__dirname, '../uploads', name), (err) => {
                if (err) console.error('Error deleting uploaded file:', err);
            });
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} || https://localhost:3000`));