import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import ProtectedRoute from './utils/ProtectedRoute';
import NavBar from './components/NavBar';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='' element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/login' element={
          <Login />
        } />
        <Route path='/register' element={
          <Register />
        } />
      </Routes>
    </>
  );
}

export default App;
