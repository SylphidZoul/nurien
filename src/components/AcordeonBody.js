import React from 'react'
import Styled from 'styled-components'
import blanca from '../assets/img/blanca.png'
import hd from '../assets/img/hd.png'
import identity from '../assets/img/identity.png'
import marcos from '../assets/img/marcos.png'
import meta from '../assets/img/meta.png'
import negativo from '../assets/img/negativo.png'

const AcordeonNegro = Styled.div`
    margin:10vh 0;
    width: 100vw;
   
    height: auto;
    text-align:center;
    color:white;
    @media screen and (min-width: 1000px) {
        width:98vw;
        left:10px;
      
    }

`
const Botton = Styled.div`

    width: 100%;
    color: white;
    padding: 1em 0;
    height: ${(props) => props.abierto ? '40vh' : '10vh'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:${(props) => props.abierto ? 'space-between' : 'center'};
    font-size: 2em;
    user-select:none;
    font-family: 'Caviar Dreams';
    cursor: pointer;
    background: transparent;
    transition: all 0.5s ease-in-out; 
    animation: ${(props) => props.abierto ? 'fade' : ''} 2s;
    @keyframes fade{
        0% { opacity: 0};
        100% { opacity: 1};
    }
      :hover{
         background: rgba(35, 34, 36,0.6);
       }

    @media screen and (min-width: 1000px) {
        height: ${(props) => props.abierto ? '40vh' : '20vh'};
        display: grid;
        width: 100%;
    }
`


const Clientes = Styled.div`

    display: ${(props) => props.abierto ? 'block' : 'none'};
    width:100%;
    color: black;
    background: ${blanca};
    transition: all 5s ease;
    overflow: hidden;
    @media screen and (min-width: 1000px) {
        width:100%;
    }
    
`
const Contacto = Styled.div`
    
    margin-top: 10%;
    display: ${(props) => props.abierto ? '' : 'none'};
    width:90%;
    padding-left: 20px;

    font-size: 1rem;
    transition: 2s ease-in;
    animation: ${(props) => props.abierto ? 'fade' : ''} 2s;
    @media screen and (min-width: 1000px) {
        width:100%;
        padding-top:10vh;
        margin-top: 0px;
        padding-left:0px;
    }
    @keyframes fade{
        0% { opacity: 0};
        100% { opacity: 1};
    }
`

const DivContacto = Styled.div `
    
    padding: 10px 0;
    display:flex;
    flex-direction: column;
    padding:20px;
    align-items: center;
    border-bottom: 1px solid #FC1EDF;
    color: #ddd;
    font-size: 14px;
    align-items: space-between;
        p{
            margin:1em;
        }
    @media screen and (min-width: 1000px) {
        height: ${(props) => props.abierto ? '40vh' : '20vh'};
    }

`


const Acordeon = (props) => {

    const [abierto,setAbierto] = React.useState(false)
    const [abierto2,setAbierto2] = React.useState(false)

    const handleClick1 = (e) => {
        e.preventDefault()
        setAbierto(!abierto)
    }
    
    const handleClick2 = (e) => {
        e.preventDefault()
        setAbierto2(!abierto2)
    }
    
    return(
        <AcordeonNegro id='nosotros'>
            
            <Botton abierto={abierto}
                onClick={handleClick1}
            >
                {props.titulo}
                <Clientes abierto={abierto}>

                    <div src={blanca} alt="Marca" ></div>
                    <img src={hd} alt="hd" ></img>
                    <div src={identity} alt="identity" ></div>
                    <div src={marcos} alt="marcos" ></div>
                    <div src={meta} alt="meta" ></div>
                    <div src={negativo} alt="negativo" ></div>

                </Clientes >
            </Botton>
                
            <Botton abierto={abierto2}
                onClick={handleClick2}
            >
                {props.titulo2}
                
                <Contacto abierto={abierto2}>
                        
                        
                        <h4>-We make your proyect reality-</h4> 
                        <DivContacto>
                            
                            <p>Nurien Studio fue fundada en 2018 con el fin de impulsar de forma artistica tu negocio </p>
                            <p>Desde Mar del Plata prestamos nuestro equipo y conocimiento para generar contenido creativo y original</p>    
                        </DivContacto>


                </Contacto>
            </Botton>
               
        </AcordeonNegro>
    )
}

export default Acordeon