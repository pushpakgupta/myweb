import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import Error from './Error';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Welcome Fname="Welcome"/>}/>    
    <Route exact path='/about-us' element={<About/>}/>    
    <Route exact path='/shop' element={<Shop/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/blog:1' element={<Blog/>}/>
    <Route exact path='/contact-us' element={<Contact/>}/>
    <Route path='*' element={<Error/>} />
    </Routes>
  </>
  );

}

export default App;