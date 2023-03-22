import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { PageContexProvider } from './context/PageContext';
import { ProductContexProvider } from './context/ProductContext';
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
        <PageContexProvider>

        </PageContexProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
