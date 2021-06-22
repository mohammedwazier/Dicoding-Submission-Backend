import {Request, ResponseToolkit, ResponseEventHandler} from '@hapi/hapi'
import Books from '../Model/model';
import { nanoid } from 'nanoid'
import { Op } from 'sequelize';

let dataBuku = {
    "id": "Qbax5Oy7L8WKf74l",
    "name": "Buku A",
    "year": 2010,
    "author": "John Doe",
    "summary": "Lorem ipsum dolor sit amet",
    "publisher": "Dicoding Indonesia",
    "pageCount": 100,
    "readPage": 25,
    "finished": false,
    "reading": false,
    "insertedAt": "2021-03-04T09:11:44.598Z",
    "updatedAt": "2021-03-04T09:11:44.598Z"
}

export const SimpanBuku = async (req: Request, h: ResponseToolkit) => {
    const payload: any = req.payload;
    let headKeys = Object.keys(payload);
    let field = ['name', 'year', 'author', 'summary', 'publisher', 'pageCount', 'readPage', 'reading'];
    let Diff = field.filter((x) => headKeys.indexOf(x) === -1);
    if(Diff.length > 0){
        if(headKeys.indexOf('name') === -1){
            return h.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. Mohon isi nama buku'
            }).code(400)
        } else{
            return h.response({
                status: 'error',
                message: 'Buku gagal ditambahkan'
            }).code(500)
        }
    }
    if (payload.readPage > payload.pageCount){
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        }).code(400)
    }
    try {
        payload.finished = payload.pageCount === payload.readPage;
        payload.id = nanoid()
        await Books.create(payload);
        return h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: payload.id
            }
        }).code(201)
    } catch (error) {
        return h.response({
            status: 'error',
            message: 'Buku gagal ditambahkan'
        }).code(500)
    }
}

export const GetAllBuku = async (req: Request, h: ResponseToolkit) => {
    let whereQuery = req.query ?? {};
    if(req.query.name){
        whereQuery = {
            name: {
                [Op.like]: `%${req.query.name}%`
            }
        }
    }
    try {
        let books = await Books.findAll({
            attributes: ['id', 'name', 'publisher'],
            where: whereQuery
        });
        return h.response({
            status: 'success',
            data: {
                books: books
            }
        }).code(200)
    } catch (error) {
        return h.response({
            status: 'error',
            message: 'Buku gagal ditemukan',
            err: error
        }).code(500)
    }
}

export const GetSingleBuku = async ( req: Request, h: ResponseToolkit) => {
    const { bookId } = req.params;
    let book = await Books.findOne({ where: {id: bookId}});
    let Data = book?.toJSON()
    if(!Data){
        return h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan'
        }).code(404)
    }

    return h.response({
        status: 'success',
        data: {
            book
        }
    }).code(200)
}

export const UpdateBuku = async (req: Request, h: ResponseToolkit) => {
    const { bookId } = req.params;
    const payload: any = req.payload;

    if(!payload.name){
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku'
        }).code(400)
    }
    if (payload.readPage > payload.pageCount){
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
        }).code(400)
    }

    let book: any = await Books.findOne({ where: {id: bookId}});
    let Data = book?.toJSON()
    if(!Data){
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan'
        }).code(404)
    }
    try {
        Object.keys(payload).map(d => {
            book[d] = payload[d]
        })
        await book.save();

        return h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
        }).code(200)
    } catch (error) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku.'
        }).code(500)
    }


}

export const DeleteBuku = async (req: Request, h: ResponseToolkit) => {
    const { bookId } = req.params;
    let book: any = await Books.findOne({ where: {id: bookId}});
    let Data = book?.toJSON()
    if(!Data){
        return h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan'
        }).code(404)
    }
    try{
        await book.destroy();
        return h.response({
            status: 'success',
            message: 'Buku berhasil dihapus'
        }).code(200);
    }catch(error){
        return h.response({
            status: 'fail',
            message: 'Gagal menghapus buku.'
        }).code(500)
    }
}