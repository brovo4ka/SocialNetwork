import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div className={s.profile}>
        <img src='https://mobimg.b-cdn.net/pic/v2/gallery/preview/gomer_simpson_homer_simpson-multfilmy-simpsony_the_simpsons-24399.jpg' align='bottom' />
        
      
      <div className={s.userinfo}>
       <p align='center'> <br/>Ирина Зайцева
        <br/>9.12.1985
        <br/>Минск
        </p> 
      </div>
      </div>
      <div>
     
      <MyPosts />
    </div>
    </div>
  )
}

export default Profile;