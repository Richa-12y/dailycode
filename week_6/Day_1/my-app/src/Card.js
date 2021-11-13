import React from 'react'
 //headingText,cardImage,text1,text2

const Card = ({ headingText,cardImage,text1,text2
}) => {
    return (
        <>
        <div className="container-card">
        <div className="inner-cotainer">
        <p>{headingText}</p>
        <img src={cardImage} alt="watch"/>
        </div>
        <div className="inner-footer">

        <p>{text1}</p>
        </div>
        <div className="bdegin">
        <p>{text2}</p>
        <button>Begin</button>
        </div>
      </div>

        </>
    )
}

export default Card
