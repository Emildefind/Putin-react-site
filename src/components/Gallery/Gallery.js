import {React, useState } from 'react';
import './Gallery.scss';
import { useEffect } from 'react';
import {Collection} from './Collection.jsx';

export const Gallery = () =>{
    const cats = [
        { "name": "Россия"},
        { "name": "Уфа"},
        { "name": "Москва"}

    ]


const [categoryId, setCategoryId] = useState(0)

const [searchValue, setSearchValue] = useState('')

const [collection, setCollections] = useState([]);
useEffect(()=>{
    fetch(`https://63d635a8e60d57436974bf8a.mockapi.io/Netrogat?${
        categoryId ? `category=${categoryId}` : '' }`,
        console.log(categoryId)
    
    )
    .then((res)=> res.json())
    .then((json)=> {
        setCollections(json);

    })
    .catch((err)=>{
        console.warn(err);
        alert('error')
    });
}, [categoryId]);
return (
    
    <div className='Gallery'>
        <ul className='tags'>
         {cats.map((obj, i)=>(
            <li
            onClick={()=> setCategoryId(i)}
            className={categoryId===i? 'active':''}
            key = {obj.name}>
                {obj.name}
            </li>
         ))}
        </ul>

         <input value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className='search-input'
            placeholder='Поиск по стране'
            />
        <h1>Наша галерея</h1>
        <div className='top'>
            
        
            {collection
            .filter((obj)=> obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj,index)=>(
                <Collection key ={index} name ={obj.name} images ={obj.photos}/>
            ))}
        </div>
    </div>
);
}