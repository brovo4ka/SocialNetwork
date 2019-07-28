import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.allposts}>
      <p align='center'>My posts</p>
      <div className={s.addpost}>
        <p align='center'>
        <textarea cols='40' rows='5'></textarea>
        <p>
        <button>Add post</button>
        </p>
        </p>
      </div>
      <div className={s.posts}>
        <Post like='15' message='hi! how are you?'/>
        <Post like='20' message='ok'/>
       
      </div>
    </div>
  )

}

export default MyPosts;