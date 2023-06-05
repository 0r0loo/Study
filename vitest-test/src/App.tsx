import './App.css'
import {useState} from "react";

function App() {

    const [buttonColor, setButtonColor] = useState('red')
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    const handleClick = () => {
        setButtonColor(newButtonColor)
    }

  return (
    <>
      <button style={{
        background: buttonColor
      }} onClick={handleClick}>Change to {newButtonColor}</button>
    </>
  )
}

export default App
