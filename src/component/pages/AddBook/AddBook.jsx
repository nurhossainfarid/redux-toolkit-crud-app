import React from 'react';
import { useForm } from 'react-hook-form';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addBook } from '../feature/BookSlice';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const book = {
            id: uuidv4(),
            title: data.title,
            author: data.author
        };
        console.log(book);
        dispatch(addBook(book));
        navigate('/showBook')
        reset();
    };
    return (
        <div className='flex flex-col my-5 items-center'>
            <h1 className='text-black text-2xl font-semibold mb-6'>Add Book</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-1/4 gap-5'>
                {/* <div className='flex flex-col w-full'>
                    <label htmlFor="id" className='text-black text-xl font-semibold'>ID</label>
                    <input className='border-2 border-gray-500 py-1 rounded' type="number" {...register("id")} />
                </div> */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="title" className='text-black text-xl font-semibold'>Title</label>
                    <input className='border-2 border-gray-500 py-1 rounded' {...register("title")} />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="author" className='text-black text-xl font-semibold'>Author</label>
                    <input className='border-2 border-gray-500 py-1 rounded' {...register("author")} />
                </div>
                <button type='submit' className='btn btn-primary'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;