export const Book = [
    {
        // Saving the Books / Adding new Books
        method: 'POST',
        path: 'books'
    },
    {
        // Get All Books
        method: 'GET',
        path: 'books'
    },
    {
        // Get Detail Buku
        method: 'GET',
        path: 'books/{bookId}'
    },
    {
        // Update Buku
        method: 'PUT',
        path: 'books/{bookId}'
    },
    {
        // Delete
        method: 'DELETE',
        path: 'books/{bookId}'
    },
]