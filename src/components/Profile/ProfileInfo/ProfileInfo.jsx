import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://mobimg.b-cdn.net/pic/v2/gallery/preview/gomer_simpson_homer_simpson-multfilmy-simpsony_the_simpsons-24399.jpg' height='200' align='bottom' />


        <div className={s.userinfo}>
          <p align='center'> <br />Ирина Зайцева
        <br />9.12.1985
        <br />Минск
        </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;