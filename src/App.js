import './App.css';
import {Gallery} from '../../index/src/components/Gallery/Gallery'
import {Main} from '../../index/src/components/Main/Main'
import {BrowserRouter, BrowserRouter as Router,Route, Routes} from "react-router-dom";
import {Blog} from '../../index/src/components/Blog/Blog'
import{Modal} from '../../index/src/components/Modal/Modal'
import{Review} from '../../index/src/components/Review/Review';
import {Quiz} from '../../index/src/components/Quiz/Quiz';
import {Header} from '../../index/src/components/Header/Header';
import Rusia from '../../index/src/components/Rusia.gif'
import { useState } from 'react';
import {  Navigate} from 'react-router-dom';
function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem('IsLoggedIn') === 'true') return true
    return false
  });
    const [isAdmin, setIsAdmin] = useState(() => {
      if (localStorage.getItem('isAdmin') === 'true') return true
      return false
  });
  const [userName, setUserName] = useState((localStorage.getItem('userName') != '') )
  return (
    <div className="App">
      <BrowserRouter> 
      <Header
      props
      isAdmin = {isAdmin}
      useState = {userName}
      setIsLoggedIn = {setIsLoggedIn}
      IsLoggedIn = {IsLoggedIn}/>
      <main>
      
       
      <Routes>
      <Route path='/' element = {<Main/>}/>
      <Route path='/login' element = {!IsLoggedIn?<Modal 
        props
        setIsAdmin = {setIsAdmin}
        setUserName = {setUserName}
        setIsLoggedIn = {setIsLoggedIn}
         />
       :<Navigate to = '/main'/>}/>
      <Route path='/review' element = {<Review/>}/>
      <Route path='/quiz' element = {<Quiz/>}/>
      <Route path='/blog' element = {<Blog/>}/>
      <Route path='/gallery' element = {<Gallery/>}/>

      </Routes>
     
      </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
