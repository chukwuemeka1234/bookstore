import BookInput from './BookInput';
import BookList from './BookList';

const Books = () => (
  <div className="booksContainer">
    <BookList />
    <h2>ADD NEW BOOK</h2>
    <BookInput />
  </div>
);

export default Books;
