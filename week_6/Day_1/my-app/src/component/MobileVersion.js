import React from 'react'
//cardHeading,text1,text2,text3,text4,

const MobileVersion = ({cardHeading,text1,text2,text3,text4}) => {
    return (
        <>
        <div>
        <h1>{cardHeading}</h1>
        <ul>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
        </ul>
        </div>
  
        </>
    )
}

export default MobileVersion
