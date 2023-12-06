import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage title='Homepage' />} />
        <Route path="/signin" element={<LoginPage title='Sign in' />} />
        <Route path="/signup" element={<RegisterPage title='Sign up' />} />
      </Routes>
    </Router>
  );
}

export default App;
