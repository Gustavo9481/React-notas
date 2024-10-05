import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ComponenteInputText from './Componentes/ComponenteImputText';
import ComponenteBoton from './Componentes/ComponenteBoton';
import ComponenteTituloSaludo from './Componentes/ComponenteTituloSaludo';



/**
 * App_2: muestra los componentes ComponenteInputText, ComponenteBoton y
 *  el dato que se ingresa en input en ComponenteTituloSaludo
 *
 *  @return {JSX.Element} - renderizado del input y boton con sus respectivos 
 *    estilos CSS & el valor del input en mensaje de saludo
 */
function App_2() {
 
    const [valorInput, setValorInput] = useState("")
    const [valorInput_2, setValorInput_2] = useState("") 
    const [saludo, setSaludo] = useState(false)  

    return (
        <>
            <section id="input-text">
                
                <ComponenteInputText 
                    valorInput={valorInput} 
                    setValorInput={setValorInput} 
                />
                
                <ComponenteBoton 
                    valorInput={valorInput} 
                    setValorInput={setValorInput}
                    setSaludo={setSaludo}
                    setValorInput_2={setValorInput_2}
                />
            </section>

            <section id="saludo">
                {saludo && <ComponenteTituloSaludo valorInput_2={valorInput_2} />}  
            </section>
        </>
    )
}

export default App_2;

/** Comentarios por línea
 * 19: Almacen del valor de input y función para actualizarlo (modificarlo)
 * 20: Almacen del valor de input y función para actualizarlo (modificarlo)
 *     Se usaran dos variables para poder borrar el input y conservar el valor
 * 21: Booleano que condiciona la muestra del saludo
 * 41: Renderizado de componente ComponenteTituloSaludo de manera condicionada
 *     Si saludo=true se renderizará el componente con valorInput como parámetro
 */
