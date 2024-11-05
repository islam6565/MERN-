import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './compoinenet/Navbarr';
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import About from './compoinenet/About';
import Contact from './compoinenet/Contact';
import UserList from './compoinenet/UserList';
import { getuser } from './redux/userslice';

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false)
  
 useEffect(() => {
 dispatch(getuser())
  }, [ping])
  return (
    <div className="App">
      <Navbarr/>
      <Routes>
        <Route path="/" element={ <UserList ping={ping} setping={setping}/>}/>
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
