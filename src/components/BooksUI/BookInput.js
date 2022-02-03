import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookAdded } from '../../redux/books/books';

const BookInput = (() => {
  const [newBook, createNewBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    createNewBook({
      id: uuidv4(),
      title: e.target.value,
      author: '',
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(bookAdded(newBook));
    createNewBook({
      title: '',
    });
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" placeholder="Enter book name" value={newBook.title} onChange={onChange} />
      <button type="submit">Add Book</button>
    </form>
  );
});

export default BookInput;
