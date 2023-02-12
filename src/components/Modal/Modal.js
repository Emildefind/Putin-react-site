import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
 
 
  
export const Modal = ({
  setIsLoggedIn,
  setUserName,
  setIsAdmin
}) => {

  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    if (login === 'Putin') {
      if (password === '147'){  
        localStorage.setItem('isAdmin', true);
        setIsAdmin(true);
      }
      else {
        alert('Введите правильный логин или пароль!');

       
        return false
      }
    }
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userName', login);
    setUserName(login);
    setIsLoggedIn(true);
   
  }

  return (
    <h1> 
       
      
     
    
     <form className='regForm' onSubmit = {handleLogIn}>  
     <div className='probel1'>
        &nbsp; 
      </div>
     <h3 className='regElem1'>Вход/Регистрация</h3>
      <div className='regElem3' >
       <input type = "text" 
      value = {login}
      onChange={handleLoginChange}
        placeholder='Логин'
         name = "login"
          className='inputReg'
          required
          /> 
      </div>
       <div className='regElem'>
       <input type = "text"
       value = {password}
       onChange={handlePasswordChange}
        placeholder='Пароль'
          name = "parol"
          className='inputReg' 
          required/> 
      </div>
      <div className='regElem2'>
      <button className="btn" type="submit">
            Войти
          </button>
       </div>
       <div className='smallFormText'>  
       
       </div>
       
   </form> 


 
    </h1>
  );
};
