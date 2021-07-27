import React, { useState } from 'react';
import "./styles.css";

function InputApp() {
  const [text, setText] = useState('')
  const [boton, setBoton] = useState(false)
  const [hola,setHola] = useState('')

  const handleChange = event => {
    let texto = event.target.value;
    setText(
      texto.replace(/[0-9]/g, '')
    );
 
  }

  const handleBoton = (e) => {
    setBoton(true)
    setHola(text)
    setText('')
  }


  return (
    <>
      <h1 className="hello">Hello World! My name is John</h1>
      <input type="text" value={text} onChange={handleChange} /> <br/><br/>
      <button  className="button" onClick={handleBoton} >Imprimir</button> <br/>

       {boton && hola}
     
    </>

  );
}



export default InputApp;
