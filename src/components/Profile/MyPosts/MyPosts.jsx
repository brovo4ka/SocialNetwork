import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsId = [
    { id: 0, message: 'hi', like: 34 },
    { id: 1, message: 'how are you?', like: 97 },

  ]

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
        <Post message={postsId[0].message} like={postsId[0].like}/>
        <Post like={postsId[1].like} message={postsId[1].message} />

      </div>
    </div>
  )

}

export default MyPosts;