import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {


    let dialogsElem = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>
    );

   let messagesElem = props.state.messages.map( m => <Message message={m.message}/>);
        
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElem}
                </div>
            <div className={s.messages}>
              {messagesElem}
          

            </div>
        </div>



    );
}
export default Dialogs;