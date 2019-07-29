import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'



const DialogItems = (props) =>{

let path='/dialogs/'+props.id;

return  <div className={`${s.dialog} ${s.active}`}>
<NavLink to={path}>
{props.name}
</NavLink>
</div>
}

const Message = (props) =>{
    return  <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) =>{
return (
<div className={s.dialogs}>
    <div className={s.dialogsItems}>
        <DialogItems name='Dima' id='1'/>
        <DialogItems name='Ira' id='2'/>
        <DialogItems name='Olya' id='3'/>
        <DialogItems name='Kolya' id='4'/>
      </div>
    <div className={s.messages}>
         <Message message='Hi'/>
         <Message message='How are you?'/>
         <Message message='Ok?'/>
        
    </div>
</div>



);
}
export default Dialogs;