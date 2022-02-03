import { useSelector } from 'react-redux';
import BookInfo from './BookInfo';

const BookList = (() => {
  const state = useSelector((state) => state.booksReducer);

  return (
    <ul>
      {state.map((data) => (
        <BookInfo
          key={data.id}
          title={data.title}
          idx={data.id}
        />
      ))}
    </ul>
  );
});

export default BookList;
