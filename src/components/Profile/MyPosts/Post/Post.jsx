import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <div><img src='https://i.pinimg.com/736x/85/fc/f6/85fcf6f5412e31889cf5496862375722.jpg' />
        {props.message}
      </div>

      <div className={`${s.item} ${s.like}`}><img src='https://avatanplus.com/files/resources/mid/58c19acfcce7715ab444bbdf.png' align="left" />
        {props.like}
      </div>

    </div>
  )

}

export default Post;