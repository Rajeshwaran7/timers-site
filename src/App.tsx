import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import { 
  HomePage, 
  ShopPage, 
  ProductDetailPage, 
  CartPage, 
  NotFoundPage,
  CategoryPage,
  AboutPage,
  ContactPage
} from './pages';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
