import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allCharacters } from "./redux/slices/charactersSlice"
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/characters")
    .then((res) => {
      dispatch(allCharacters(res.data.slice(0, 25)))
    })
  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
