import { Route, Routes } from 'react-router-dom';
import Registration from './registration';
import Login from './login';
import Products from './products';

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
