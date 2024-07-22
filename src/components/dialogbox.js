import React, { useState } from 'react';
import Dialog from './dialog';

function DialogBox ({onCloseMessage})  {
    const[isDialogOpen,setDialogOpen] = useState(false);
    const[message, setMessage]= useState('');

    const openDialog = () => {
        setDialogOpen(true);
        setMessage('');
    }
    const closeDialog = () => {
        setDialogOpen(false);
        onCloseMessage(message);
        setMessage('');
    }

    return(
        <div>
            <h1>Dialog Box</h1>
            <button onClick={openDialog}>Open Dialog</button>
            <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
                <h2> Dialog Content</h2>
                <p>{message}</p>
                <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='Enter new Message'/>
                <button onClick={closeDialog}>Close Dialog</button>
            </Dialog>

        </div>
    )

}

export default DialogBox;