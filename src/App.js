import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './pages/Navigation.jsx'
import Home from './pages/Home.jsx'
import Content from './pages/Content.jsx'
import Exams from './pages/Exams.jsx'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Content" element={<Content />} />
              <Route path="/Exams" element={<Exams />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
