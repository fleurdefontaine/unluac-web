# Unluac Web Interface

Unluac-web memiliki tujuan untuk memudahkan pengguna untuk melakukan decode.

## Tentang Unluac

Unluac adalah decompiler untuk Lua versi 5.0 hingga 5.4. Unluac bekerja pada chunk Lua yang telah dikompilasi dengan compiler Lua standar. Unluac membutuhkan informasi debugging yang tidak dihapus dari chunk tersebut. (Secara default, compiler Lua menyertakan informasi debugging ini.) -- Translated

Unluac-web menyediakan tiga opsi utama:

1. **Normal**: decode bytecode Lua menjadi source code.
2. **Disassemble**: Menghasilkan output opcode untuk analisis lebih lanjut.
3. **Assemble**: Mengubah opcode kembali menjadi bytecode.

## Instalasi dan Penggunaan

Apk Termux: [Download here.](https://f-droid.org/repo/com.termux_1000.apk)

### Termux (Android)
```bash
pkg install curl && curl https://raw.githubusercontent.com/fleurdefontaine/unluac-web/main/setup.sh && chmod ./setup.sh && ./setup.sh
```

Jika sudah melakukan instalasi dependencies, hanya perlu "node ." di dalam directory "unluac-web".