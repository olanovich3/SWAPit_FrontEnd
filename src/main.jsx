import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { PageContextProvider } from './context/PageContext';
import { ProductContextProvider } from './context/ProductContext';
import { UserContextProvider } from './context/UserContext';
import About from './pages/About';
import Categories from './pages/Categories';
import Chat from './pages/Chat';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Register from './pages/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <PageContextProvider>
          <ProductContextProvider>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/categories/:category" element={<Categories />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/createproduct" element={<CreateProduct />} />
                <Route path="/editproduct" element={<EditProduct />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ProductContextProvider>
        </PageContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
