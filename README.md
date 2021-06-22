# Buku Submission Dicoding


### Initiate Server Running
```
    1. cp .env-example .env
    2. Fill the Variable on .env
    3. yarn install
    4. yarn build
    5. yarn start
```

## Objective Submission

1. [POST] /books => 'Simpan Buku' [DONE]
2. [GET] /books => 'Melihat Semua Buku' [DONE]
3. [GET] /books/{bookId} => 'Melihat satu Buku' [DONE]
4. [PUT] /books/{bookId} => 'Update 1 Buku' [DONE]
5. [DELETE] /books/{bookId} => 'Menghapus 1 Buku' [DONE]

StatusCode
```
400 => Gagal menambahkan Buku, Parameter kurang
500 => Buku Gagal Ditambahkan
201 => Sukses, Buku Berhasil ditabmahkan
200 => Sukses
404 => Tidak Ditemukan
```

Backend Specification
```
Tech Stack:
    -----------
    nodejs
    typescript
    hapijs
    noneid
    mongoose
    nodemon
    pm2
    sqlite3
    -----------
```

<table border="1">
    <tr>
        <th>Nama Script</th>
        <th>Kegunaan</th>
    </tr>
    <tr>
        <td>yarn dev</td>
        <td>Menjalankan Server menggunakan Typescript, digunakan untuk proses pada saat Development</td>
    </tr>
    <tr>
        <td>yarn build</td>
        <td>Generate Aplikasi dari Typescript ke Javascript</td>
    </tr>
    <tr>
        <td>yarn start</td>
        <td>Menjalankan Server menggunakan file Javascript Production</td>
    </tr>
</table>