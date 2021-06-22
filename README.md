# Buku Submission Dicoding


### Initiate Server
```
    1. cp .env-example .env
    2. Fill the Variable on .env
    3. yarn install
    4. yarn build
    5. yarn start
```

## Objective Submission

1. [POST] /books => 'Simpan Buku'
2. [GET] /books => 'Melihat Semua Buku'
3. [GET] /books/{bookId} => 'Melihat satu Buku'
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

