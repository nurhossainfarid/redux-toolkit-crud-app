import {configureStore} from '@reduxjs/toolkit'
import { booksSlice as booksReducer } from '../component/pages/feature/BookSlice'

const store = configureStore({
    reducer: booksReducer
});

export default store;