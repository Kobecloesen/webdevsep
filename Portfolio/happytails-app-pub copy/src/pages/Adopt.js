import React from 'react'
//import photo from '/Portfolio/happytails-app-pub/public/images/logo_happytails.png'
import { Dogs, HomePageHeader } from "../dogs"


function Adopt() {
    return (
        
        <div className="wrapper">
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', color: 'grey' }}>
                Adopt page</h1>
            <Dogs />
           
            </div>
    )
}
export default Adopt;
