import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import CartListPage from './pages/CartlistPage';
import Nav from './components/Nav';

const Layout = () => {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />}></Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="cartlist" element={<CartListPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
