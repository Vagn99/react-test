import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/signup" element={<Signup/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/police" element={<Police/>} />
          <Route path="/customize" element={<Customize/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
