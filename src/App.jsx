import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './pages/home';
import CategoryPage from './pages/category';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/about' element={<>About Page</>} />
      </Routes>
    </>
  );
}

export default App;
