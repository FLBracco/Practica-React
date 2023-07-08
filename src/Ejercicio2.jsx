// 2- Realize un programa que realice la conversión de grado celcius a grado fahrenheit y viceversa. Realizar esto unicamente con 2 entradas numericas uno para los grados celcius y otra para los grados fahrenheit, cuando se ingresa un numero en la entrada de celcius actualizar la entrada en fahrenheit y viceversa. Inicializar la entrada de celcius en 0 y fahrenheit en 32. Celcius = (F - 32) * 5/9; Fahrenheit = (C * 9/5) + 32 

import { useState } from 'react'

function App() {
    const [grados, setGrados] = useState({celcius: 0, fahrenheit: 32})
    return (
        <>
            <label htmlFor="celcius">Grado Celcius: </label>
            <input 
                type="number"
                name='celcius'
                value={grados.celcius}
                onChange={(e)=>{
                    setGrados({...grados, celcius: e.target.value , fahrenheit: ((e.target.value * (9/5)) + 32)})
                }}
            />
            <br/>
            <label htmlFor="fahrenheit">Grado Fahrenheit: </label>
            <input 
                type="number"
                name='fahrenheit'
                value={grados.fahrenheit}
                onChange={(e)=>{
                    setGrados({... grados, celcius: ((e.target.value - 32)* 5/9), fahrenheit: e.target.value})
                }}
            />
        </>
    )
}

export default App