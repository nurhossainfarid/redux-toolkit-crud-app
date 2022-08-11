import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBook } from '../feature/BookSlice';

const ShowBooks = () => {
  const books = useSelector(state => state.reducer.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
      dispatch(deleteBook(id));
  }
    return (
    <div className='flex flex-col justify-center my-20'>
            <h1>Show Books</h1>
    <table class="table w-full">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>      
      </tr>
      </thead>
      <tbody>
          {
            books && books.map((book) => {
              const { id, title, author } = book;
              return <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td className='flex gap-5'>
                  <Link to={'/editBooks'} className="btn btn-primary" state={{id, title, author}}>Edit</Link>
                  <button className="btn btn-primary" onClick={() => handleDeleteBook(id)}>Delete</button>
                </td>
            </tr>
            })
          }
    </tbody>
  </table>
        </div>
    );
};

export default ShowBooks;