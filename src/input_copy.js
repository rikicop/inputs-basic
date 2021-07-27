import React,{useState} from 'react';
import "./styles.css";

function InputApp() {
  const [text, setText] = useState('')
  const [boton,setBoton] = useState(false)
  
  const hanldeChange = (e)=>{
     setText(e.target.value)   
  }  
  const handleBoton = (e)=>{
    setBoton(true)  
  }
  return (
    <>
    <h1 className="hello">Hello World! My name is John</h1>
     <input type="text" value={text} onChange={hanldeChange}  /> <br />
     <button className="button" onClick = {handleBoton} >Imprimir</button> <br />

     {boton && text}
    </>
    
  );
}



export default InputApp;
