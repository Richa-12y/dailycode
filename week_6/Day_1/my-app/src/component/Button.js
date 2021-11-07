import React from 'react';

function Button ({text,changeButtonColor})
{
  return (
    <button style={{backgroundColor:changeButtonColor,borderRadius:"2px",display:"flex",flexDirection:'column',margin:"auto",height:"100px",width:"150px",marginTop:"5px",alignItems:"center"}}>{text}</button>
    

  );
}

export default Button;
