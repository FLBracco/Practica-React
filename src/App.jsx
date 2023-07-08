// 3- Realize un programa que muestre un listado de nombre de animales, una entrada de texto y un boton deben permitir agregar un nuevo animal a la lista. No permitir el ingrese de un animal ya cargado alertando al usuario que ya esta cargado. Tampoco permitir el ingreso de mas de 10 animales deshabilitando el boton de agregar. Por ultimo agregar un boton que indique con un mensaje cual es el animal con más letras, y otro que indique que animal tiene menos letras. 

import { useState } from 'react'

function App() {
    const [animales, setAnimales] = useState(['Vaca','Cocodrilo','Jirafa','Elefante'])
    const [texto, setTexto] = useState('')
    return (
        <>
            <h1>Listado de Animales</h1>
            <ol>
                {animales.map((animal, index)=>(<li key={index}>{animal}</li>))}
            </ol>
            <label htmlFor="animal">Nuevo Animal: </label>
            <input
                name='animal'
                placeholder='Ingrese nombre de animal...'
                value={texto}
                onChange={(e)=>{
                    setTexto(e.target.value)
                }}
            />
            <h2>{texto.toLowerCase()}</h2>
            <button
                disabled={animales.length === 10}
                onClick={()=>{
                    const animalEnMinuscula = texto.toLowerCase()
                    if(animales.map(animal => animal.toLowerCase()).includes(animalEnMinuscula)){
                        alert('El animal que quiere ingresar ya esta en la lista.\nIngrese uno nuevamente!!')
                    }else{
                        setAnimales([...animales, texto])
                    }
                    setTexto('')
                }}
            >Agregar</button>
            <button
                onClick={()=>{
                    let animalLargo = ''
                    animales.reduce((_, actual)=>{
                        if(actual.length >= animalLargo.length){
                            animalLargo = actual
                        }
                    }, '')
                    return alert(`El animal con mas letras es: ${animalLargo}`)
                }}
            >Largo</button>
            <button
                onClick={()=>{
                    let animalCorto = 'estoSeSuponeQueEsUnAnimalCorto'
                    animales.reduce((_, actual)=>{
                        if(actual.length <= animalCorto.length){
                            animalCorto = actual
                        }
                    }, '')
                    return alert(`El animal con menos letras es: ${animalCorto}`)
                }}
            >Corto</button>
        </>
    )
}

export default App