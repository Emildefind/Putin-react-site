import './AddPostForm.css'
import { Component} from 'react';
export class AddPostForm extends Component {
    state = {
        postTitle: '',
        postDescription: '',
        showAddForm: ''
    }
    handlePostTitleChange = (e) =>{
        this.setState({
            postTitle: e.target.value
        })
    }
    handlePostDescriptionChange = (e) =>{
        this.setState({
            postDescription: e.target.value
    })
   
    }
    handleAddFormShow = (e) =>{
        this.setState({
        showAddForm: false
    })
    }
    createPost = () =>{
        const post = {
            id: this.props.blogArr.length +1,
            title: this.state.postTitle,
            description: this.state.postDescription,
            likes:false
        }
        this.props.addNewBlogPost(post)
    }
    render(){
        
        return(
            <>
            <div className='overlay'>
                <div className='addFormDiv'>
                    <div className='modalForm'>
                    <h1 class = 'headerModalForm'> Создание поста</h1>
                    <input
                    type="text"
                    placeholder="Заголовок текста"
                    name="email"
                    className="placeholderForm1"
                  
                    required
                    />
                    <input
                    type="text"
                    placeholder="текст поста"
                    name="parol"
                    className="placeholderForm2"
                    
                    required
                    />
                    <button className='submit' type='submit'  >Добавить</button>
                </div>
                </div>
            </div>
            </>
        )
    }
}