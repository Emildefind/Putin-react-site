import Rusia from './src/Rusia.gif'
import './Header.css';
export const Header = ({
    IsLoggedIn,
    setIsLoggedIn,
    registerLinkVisibility,
    welcomeLinkVisibility,
    isAdminVisibility,
    setIsAdmin
}) => {
    
    const handleExit = (e) =>{
        e.preventDefault();
        localStorage.setItem('IsLoggedIn', false);
        setIsLoggedIn(false);
    
        localStorage.setItem('userName', '');
    }
    registerLinkVisibility = !IsLoggedIn? 'visible':'hidden';
    welcomeLinkVisibility = IsLoggedIn? 'visible':'hidden';
    isAdminVisibility = (localStorage.getItem('isAdmin') === 'true')?'visible':'hidden';

    return(
        <div className='Header'>
            <img src={Rusia} class = "sdsb"/>
      <text>
      <a class = "menu" href='/'>Главная</a>
      <a class = "menu" href='/login' style={{visibility:registerLinkVisibility}}>Регистрация</a>
      <a class = "menu" href='/review'>Отзывы</a>
      <a class = "menu" href='/quiz'>Квиз</a>
      <a class = "menu" href='/blog'>Блог</a>
      <a class = "menu" href='/gallery'>Галерея</a>

      <a className = 'welcome' style={{visibility:  welcomeLinkVisibility}}>
        Добро&nbsp;пожаловать&nbsp;{localStorage.getItem('userName')}!&nbsp;У вас 0 кандидатов&nbsp;
        <button className='btn' onClick = {handleExit}>Vыйти</button>
      </a>
      
      </text>
        </div>
    )
}
