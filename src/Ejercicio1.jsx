// 1- Realizar un contador del 0 al 20, inicializando la cuenta en 5. Agregar un boton para incrementar de 1 en 1 y otro boton para decrementar de 2 en 2, deshabilitar los botones cuando el incremento o decremento haga que la cuenta quede fuera del rango establecido.

// 2- Realize un programa que realice la conversión de grado celcius a grado fahrenheit y viceversa. Realizar esto unicamente con 2 entradas numericas uno para los grados celcius y otra para los grados fahrenheit, cuando se ingresa un numero en la entrada de celcius actualizar la entrada en fahrenheit y viceversa. Inicializar la entrada de celcius en 0 y fahrenheit en 32.

// 3- Realize un programa que muestre un listado de nombre de animales, una entrada de texto y un boton deben permitir agregar un nuevo animal a la lista. No permitir el ingrese de un animal ya cargado alertando al usuario que ya esta cargado. Tampoco permitir el ingreso de mas de 10 animales deshabilitando el boton de agregar. Por ultimo agregar un boton que indique con un mensaje cual es el animal con más letras, y otro que indique que animal tiene menos letras. 

import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(5)

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button
        disabled={contador === 20}
        onClick={()=> {
          setContador(contador + 1)
        }}
      >
        Incrementar
      </button>
      <button
        disabled={contador === 0 || contador === 1}
        onClick={()=>{
          setContador(contador - 2)
        }}
      >
        Decrementar
      </button>
    </>
  )
}

export default App
