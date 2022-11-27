
import axios from 'axios';
import React from 'react';
//import { useState } from 'react';
import {Component} from 'react';
import {BlogCard} from './components/BlogCard';

import {AddPostForm} from './components/AddPostForm'

export class Blog extends Component {
    state = {
        showBlog: true,
        showAddForm: false,
        blogArr: []
    }; 
    componentDidMount(){
        axios.get('https://63708e840399d1995d7f6782.mockapi.io/Arr')
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
            <BlogCard
            description = {item.description}
            key = {item.id}
            title = {item.title}

            liked = {item.liked}
            likePost = {() => this.likePost(pos)}
            deletePost = {() => this.deletePost(pos)}
            />
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