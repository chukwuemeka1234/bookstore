import axios from 'axios';
import { booksFetched, bookAdded, bookRemoved } from './books';

export const getBooks = () => async (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XO4kkZPoS1vvPIQCMudM/books')
    .then((response) => {
      const newBooks = response.data;
      const mappedBooks = Object.entries(newBooks).map(([id, book]) => {
        const { category, title } = book[0];
        return { id, category, title };
      });
      dispatch(booksFetched(mappedBooks));
    });
};

export const sendBookToApi = (payload) => async (dispatch) => {
  const { id, category, title } = payload;

  const newBook = {
    item_id: id,
    category,
    title,
  };

  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XO4kkZPoS1vvPIQCMudM/books', newBook);

  dispatch(bookAdded(payload));
};

export const deleteBook = (payload) => async (dispatch) => {
  const newBook = payload;

  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XO4kkZPoS1vvPIQCMudM/books/${newBook}`);

  dispatch(bookRemoved(payload));
};
