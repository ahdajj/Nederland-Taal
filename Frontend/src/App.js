import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './pages/Navigation.jsx'
import Home from './pages/Home.jsx'
import Content from './pages/Content.jsx'
import Exams from './pages/Exams.jsx'
import Lessons from'./pages/Lessons.jsx' 
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path="/Lessons" element={<Lessons />} />
                <Route path="/Exams" element={<Exams />} />
                <Route path="/Content" element={<Content />} />
              </Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
