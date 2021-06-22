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
4. [PUT] /books/{bookId} => 'Update 1 Buku'
5. [DELETE] /books/{bookId} => 'Menghapus 1 Buku'

StatusCode
```
400 => Gagal menambahkan Buku, Parameter kurang
500 => Buku Gagal Ditambahkan
201 => Sukses, Buku Berhasil ditabmahkan
200 => Sukses
404 => Tidak Ditemukan
```