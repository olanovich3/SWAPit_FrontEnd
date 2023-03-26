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
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Product from './pages/Product';
import Products from './pages/Products';
import Profile from './pages/Profile';
import TerminosYCondiciones from './pages/TerminosYCondiciones';
import UserCard from './pages/UserCard';
import ProtectedRoute from './ui-components/ProtectedRoute';
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
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                <Route path="/about" element={<About />} />
                <Route path="/usercard" element={<UserCard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route
                  path="/createproduct"
                  element={
                    <ProtectedRoute>
                      <CreateProduct />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/editproduct"
                  element={
                    <ProtectedRoute>
                      <EditProduct />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/:user"
                  element={
                    <ProtectedRoute>
                      <Favorites />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/chat"
                  element={
                    <ProtectedRoute>
                      <Chat />
                    </ProtectedRoute>
                  }
                />
                <Route path="/terms-and-conditions" element={<TerminosYCondiciones />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ProductContextProvider>
        </PageContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
