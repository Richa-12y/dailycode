import React from 'react'
//buttonoverwriteBackgroundColor,buttonText

const Buttondesgin = ({buttonoverwriteBackgroundColor,buttonText}) => {
    return (
        <div>
        <button className="buttonDesign" style={{backgroundColor:buttonoverwriteBackgroundColor}}>{buttonText}</button>

        </div>
    )
}

export default Buttondesgin
