import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
debugger;
// let posts = [
//     { id: 0, message: 'hi', like: 34 },
//     { id: 1, message: 'how are you?', like: 97},
//     {id: 2, message: 'h?', like: 9 },
//     {id: 3, message: 'ou?', like: 15  }

//   ]

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>

    </div >
  )
}

export default Profile;