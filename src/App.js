import './App.css';
import {Main} from '../../index/src/components/Main/Main'
import {BrowserRouter, BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './App.css';
import {Blog} from '../../index/src/components/Blog/Blog'
import{Modal} from '../../index/src/components/Modal/Modal'
import{Review} from '../../index/src/components/Review/Review';
import {Quiz} from '../../index/src/components/Quiz/Quiz'
import Rusia from '../../index/src/components/Rusia.gif'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 

      <header>
      <img src={Rusia} class = "sdsb"/>
      <text>
      <a class = "menu" href='/'>Main</a>
      <a class = "menu" href='/login'>Регистрация</a>
      <a class = "menu" href='/review'>Отзывы</a>
      <a class = "menu" href='/quiz'>Квиз</a>
      <a class = "menu" href='/blog'>Блог</a>
      </text>
      </header>
      <main>
      
       
      <Routes>
      <Route path='/' element = {<Main/>}/>
      <Route path='/login' element = {<Modal/>}/>
      <Route path='/review' element = {<Review/>}/>
      <Route path='/quiz' element = {<Quiz/>}/>
      <Route path='/blog' element = {<Blog/>}/>
      </Routes>
     
      </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
