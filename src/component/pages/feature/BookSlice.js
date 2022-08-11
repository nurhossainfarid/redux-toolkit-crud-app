import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
    books:
    [
        {
           id: uuidv4(), title: 'Love Bangladesh', author: 'Nur Hossain' 
        },
        {
           id: uuidv4(), title: 'Why you need relationship', author: 'Farid' 
        },
    ]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBook: state => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            console.log(id, title, author);
            const isBookExist = state.books.filter((book) => book.id === id);
            if (isBookExist) {
              isBookExist[0].title = title;
              isBookExist[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        }
    }
});

export const { showBook, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;