import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import StudentLogin from './components/StudentLoginSignup/StudentLogin'
import StudentSignup from './components/StudentLoginSignup/StudentSignup'
import Profile from './components/StudentProfile/Profile'
import Result from "./components/StudentProfile/Result";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
