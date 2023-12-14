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
        <Route path="/signup" element={<RegisterPage title='Sign up' />} />
        <Route path="/signin" element={<LoginPage title='Sign in' />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
