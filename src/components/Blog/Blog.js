
import axios from 'axios';
import React from 'react';
//import { useState } from 'react';
import {Component} from 'react';


import {AddPostForm} from './components/AddPostForm'

export class Blog extends Component {
    state = {
        showBlog: true,
        showAddForm: false,
        blogArr: []
    }; 
    componentDidMount(){
        axios.get('https://63708eae08218c267e016a33.mockapi.io/Emiltop')
        .then((response) => {
            this.setState({
                blogArr: response.data
            })
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
        return(
            <>
            </>
        )
    });


        return(
            <>
            <button className='openCloseBlogBtn' onClick = {this.handleAddFormShow}>
                Создать пост
            </button>
            <div className='posts'>{blogPosts}</div>
            <AddPostForm  /> 
            </>
        )        
    }

}