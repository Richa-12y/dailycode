import React from 'react';
import Button from './component/Button';

import './App.css';

function App ()
{
  return (
    <div>
    <Button text="welcome to react" changeButtonColor="red" />
    <Button text="Textme" changeButtonColor="blue" />
    <Button text="Textme2" changeButtonColor="red" />
    </div>
    
  );
}

export default App;
