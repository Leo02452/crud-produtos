import { Route, Routes } from 'react-router-dom';
import Registration from './registration';

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}
