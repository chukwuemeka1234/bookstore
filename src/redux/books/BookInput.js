import Buttons from '../../components/Buttons';

const BookInput = () => (
  <form style={{ marginLeft: '2.5rem' }}>
    <input type="text" placeholder="Enter book name" />
    <Buttons label="Add" />
  </form>
);

export default BookInput;
