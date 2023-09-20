import  PropTypes  from 'prop-types';
import React, {useState} from 'react'

export default function Formulary({nombre}) {
    // let nom = document.querySelector('#usuar')
    const [nom, setNombre] = useState(nombre)
    // setNombre(nom => nom = "Juan")
    
    const cambiar = ()=>{
        setNombre((nom)=>{
            nom="Hola"
            return nom
        })
    }
    /* const cambiar = async()=>{
        let res =await (await fetch("http://localhost:5010/get")).json();
        setNombre(JSON.stringify(res)); 
    } */
    return (
    <>
        <div>Formulary</div>
        <button onClick={cambiar}>Cambiame</button>
        <div>{nom}</div>
{{/* <center>
        <form  id="formulario" onsubmit="return false;" >
            Nombre Usuario: <br />
            <input id="usuario"  type="text"/>
            <br />
            Contraseña:
             <br /> 
             <input id="contra"  type="text"/>
             <br />
            
            <button id="btn_guardar"  onClick={cambiar} class="btn">Guardar</button>   
            
        </form>
        </center> */}}
    </>
  )
}

Formulary.propTypes = {
    nombre: PropTypes.string.isRequired
}

Formulary.defaultProps = {
    nombre: "asada"
}