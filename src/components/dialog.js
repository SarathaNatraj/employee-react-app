import React, { useState } from 'react';

function Dialog ({isOpen, onClose, children}) {
    
    if(!isOpen) return null;

    return(
        <div className='dialog-overlay'>
            <div className='dialog-content'>
                <button className='dialog-close-button' onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    )

}

export default Dialog;