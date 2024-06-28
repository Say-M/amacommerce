import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './pages/home';
import CategoryPage from './pages/category';
import Footer from './common/Footer';
import ProductDetailsPage from './pages/Details/productdetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/about' element={<>About Page</>} />
        <Route path='/product' element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
