import Joi from 'joi';
import { GetAllBuku, SimpanBuku, GetSingleBuku, UpdateBuku, DeleteBuku } from '../Controller/BukuController';

export default [
    {
        // Saving the Books / Adding new Books
        method: 'POST',
        path: '/books',
        options: {
            handler: SimpanBuku
        }
    },
    {
        // Get All Books
        method: 'GET',
        path: '/books',
        options: {
            handler: GetAllBuku
        }
    },
    {
        // Get Detail Buku
        method: 'GET',
        path: '/books/{bookId}',
        options: {
            handler: GetSingleBuku
        }
    },
    {
        // Update Buku
        method: 'PUT',
        path: '/books/{bookId}',
        options: {
            handler: UpdateBuku
        }
    },
    {
        // Delete
        method: 'DELETE',
        path: '/books/{bookId}',
        options: {
            handler: DeleteBuku
        }
    },
]