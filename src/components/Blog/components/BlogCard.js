import { useLinkClickHandler } from 'react-router-dom'
import './BlogCard.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export const BlogCard = ({
    title,
    description,
    liked,
    likePost,
    deletePost
}) =>{
    const heartFill = liked? 'purple' : 'black'
    likePost=(pos) => {
        const temp = [...this.state.blogArr];
        temp[pos].licked= !temp[pos].licked;
        this.setState( {
           blogArr:temp
        })
   
       };
       deletePost = (pos) =>{
       if (window.confirm(`Delete ${this.state.blogArr[pos].title}?`)){
           const temp=[...this.state.blogArr];
           temp.splice(pos,1);
           this.setState({
               blogArr: temp
           })
       }
    }
       return(
         <div className='post'>
            <div className='posthead'>
           <h2>{title}</h2>
           <span className = 'deleteForeverButton' onClick={deletePost}>
            
           </span>
           </div>
         <div className='desc'>  
           {description}
         </div>
         <div className='button'>
           <span className='favoriteButton' onClick={likePost}>
                 
           </span>
         </div>
         </div> )
        }
   
   
   