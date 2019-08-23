import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

 
  let postsElem=props.posts.map(p => <Post message={p.message} like={p.like}/>);
  
  let newPostElement = React.createRef();



  let addPost = () =>{
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.allposts}>
      <p align='center'>My posts</p>
      <div className={s.addpost}>
        <p align='center'>
          <textarea ref={newPostElement} cols='40' rows='5'></textarea>
          <p>
            <button onClick={addPost}>Add post</button>
          </p>
        </p>
      </div>
      <div className={s.posts}>
        {postsElem}

      </div>
    </div>
  )

}

export default MyPosts;