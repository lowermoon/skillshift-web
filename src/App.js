import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Page/Login';
import Register from './Page/Register';
import DashboardPage from './Page/Dashboard/DashboardPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
