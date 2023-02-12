import React from 'react'
import Admin from "./components/Admin"
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './components/main';
import Login from './components/login';
import PageNotFound from './components/PageNotFound';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route element={<Login/>}>
        <Route path='/chitcola' element={<Admin/>}/>
        </Route>
        <Route path='/' element={<Main/>}/>
        <Route path='/chotu' element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App