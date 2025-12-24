import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Content from './pages/Content.jsx'
import Exams from './pages/Exams.jsx'
import Lessons from'./pages/Lessons.jsx' 
import Aboutus from'./pages/About.jsx'
import { AuthProvider } from "./Authentication/AuthContext.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/Lessons" element={<Lessons />} />
                <Route path="/Exams" element={<Exams />} />
                <Route path="/Content" element={<Content />} />
                <Route path="/Aboutus" element={<Aboutus/>}/>
                <Route path="/Profile" element={<Profile/>}/>
              </Route>
            </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
 