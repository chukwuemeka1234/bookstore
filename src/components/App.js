import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Navbar from './Navbar';
import Books from './BooksUI/Books';
import Categories from './CategoriesUI/Categories';

function App() {
  const fonty = {
    fontSize: '2rem',
  };

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <div className="navbar-books" style={fonty}>
                <Books />
              </div>
            )}
          />
          <Route
            path="/Categories"
            element={
              <Categories />
            }
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
