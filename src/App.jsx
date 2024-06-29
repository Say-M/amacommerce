import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './pages/home';
import CategoryPage from './pages/category';
import AboutPage from './pages/about/aboutUs';
import ContactPage from './pages/contact/contactUs';
import OurDetailsPage from './pages/ourDetails/ourDetails';
import ProductDetailsPage from './pages/Details/productdetails';
import Footer from './common/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/ourdetails' element={<OurDetailsPage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/product' element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
