
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './components/Main';
import MyPasswords from "./components/MyPasswords";
import Navbar from './components/Navbar';




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />

      <Route path="/my-passwords" element={<MyPasswords/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
