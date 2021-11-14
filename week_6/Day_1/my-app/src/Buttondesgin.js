import React from 'react'
//buttonoverwriteBackgroundColor,buttonText

const Buttondesgin = (props) => {

    console.log(props)
    const {buttonoverwriteBackgroundColor
    ,buttonText}=props
    const array=[6,9,1,2,3,4,5,6]
    console.log(array)
    console.log(...array)
    const [value1,value2,value3,...value4]=array
    console.log(value1)
    console.log(value2)
    console.log(value3)
    console.log(value4)


    return (
        <div>
        <button className="buttonDesign" style={{backgroundColor:buttonoverwriteBackgroundColor
    }}>{buttonText}</button>
        
        </div>
    )
}

export default Buttondesgin
