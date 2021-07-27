import React,{useState} from 'react';
import "./styles.css";

function Calcula() {
  const [texto, setTexto] = useState('')
  const [textt, setTextt] = useState('')
  const [result,setResult]= useState(0)
  const [boton,setBoton] = useState(false)
  
  const hanldeChangeo = (e)=>{
     setTexto(e.target.value)   
  }  

  const hanldeChanget = (e)=>{
    setTextt(e.target.value)
       
 }  
  const handleBoton = (e)=>{
    setBoton(true)
    setResult(Number(texto) + Number (textt)) 
    setTextt('') 
    setTexto('')
  }
  return (
    <>
    <h1 className="hello">Calcular: </h1>
     Variable 1:
     <input type="text" value={texto} onChange={hanldeChangeo}  /> <br/>
     Variable 2:
     <input type="text" value={textt} onChange={hanldeChanget}  /> <br/>

     <button className="button" onClick = {handleBoton} >Imprimir</button> <br/>

     {boton && result}
     {/* {boton && textt} */}
    </>
    
  );
}



export default Calcula;