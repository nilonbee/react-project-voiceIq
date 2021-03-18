import React from 'react'


export default function Submit({children,Submit}) {



    return (
        <header className={Submit}>
            {children}
            
        </header>
     
    )
}
Submit.defaultProps = {
    Submit:'roomsSubmit'
};