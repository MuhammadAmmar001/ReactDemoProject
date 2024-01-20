import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Features from './Components/Pages/Features';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Login from './Components/Pages/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
