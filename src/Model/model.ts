import Path from 'path';
import {Sequelize, STRING, DATE, NUMBER, BOOLEAN, NOW} from 'sequelize';

const sequelize = new Sequelize('', '', '', {
    dialect: 'sqlite',
    storage: Path.join('tmp', 'db.sqlite')
})

const Books = sequelize.define('books', {
    id: {
        type: STRING,
        primaryKey: true,
    },
    name: STRING,
    year: NUMBER,
    author: STRING,
    summary: STRING,
    publisher: STRING,
    pageCount: NUMBER,
    readPage: NUMBER,
    finished: {
        type: BOOLEAN,
        defaultValue: false,
    },
    reading: {
        type: BOOLEAN,
        defaultValue: false,
    },
    insertedAt: {
        field: 'createdAt',
        type: DATE,
        defaultValue: NOW
    },
    updatedAt: DATE
})

Books.sync()

export default Books;