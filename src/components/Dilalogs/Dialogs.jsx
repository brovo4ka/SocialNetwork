import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'



const DialogItems = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsId = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'szrga' },
        { id: 3, name: 'guka' },
        { id: 4, name: 'uia' },
    ]
    let dialogselem = [
            <DialogItems name={dialogsId[0].name} id={dialogsId[0].id} />,
            <DialogItems name={dialogsId[1].name} id={dialogsId[1].id} />

    ]
        let messagesId = [
            { id: 1, message: 'hi' },
            { id: 2, message: 'how are you?' },
           
        ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogselem}
                </div>
            <div className={s.messages}>
              {/*  <Message message={messagesId[0].message}/>*/}
          

            </div>
        </div>



    );
}
export default Dialogs;