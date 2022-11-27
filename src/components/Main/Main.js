import './Main.css'
import React from 'react';
import smile from './sources/smile.jpg'
import Russionflag from './sources/Russionflag.mp4'
import putin from './sources/putin.gif'

export const Main = () =>{
    return(
        <div>
            
<div>
    
    </div>

  

    <div class="navbar-navbar-default">
        <div class="container-fluid">
            <div class="text">
            <div class="text1">
                Росси́я, или Росси́йская Федера́ция[e] (сокр. РФ[f]), — государство в Восточной Европе и Северной Азии.
                Россия — крупнейшее государство в мире, её территория в конституционных границах, с территорией большей части Крыма, присоединение которого не получило международного признания,
                составляет 17 125 191[6] км²Перейти к разделу «#Географическое положение».             
            </div>
            <div class="text2">               
                Государственный язык на всей территории страны — русскийПерейти к разделу «#Языки», в ряде регионов России также установлены свои государственные и официальные языки.
                Денежная единица — российский рубльПерейти к разделу «#Общее состояние, основные показатели».
                Россия — многонациональное государство с широким этнокультурным многообразием[19].
            </div>
            <div class="text3">               
                Согласно результатам переписей населения России 2010 года, а также Крыма и Севастополя 2014 года в стране живут представители свыше 190 национальностей,
                среди которых русские составляют свыше 80 %, а русским языком владеют свыше 99,4.
            </div>
        </div>
            <div class="text1">
                <video controls widht="500" height="300" >
                <source src = {Russionflag} type = "video/mp4"/>
               </video>   

            </div>
        </div>
        <img src={smile} class = "cube"/>
        </div>

        </div>
    )
}