import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from './Home';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './Update';
import Read from './Read';
import Signup from './Signup';
import Signin from './Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
