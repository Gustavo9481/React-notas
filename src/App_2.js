import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ComponenteInputText from './Componentes/ComponenteImputText';
import ComponenteBoton from './Componentes/ComponenteBoton';
import ComponenteTituloSaludo from './Componentes/ComponenteTituloSaludo';



function App_2() {
    // almacen del valor de input y función para actualizarlo (modificarlo)
    const [valorInput, setValorInput] = useState("")
    const [valorInput_2, setValorInput_2] = useState("")
    // controlar la muestra del saludo
    const [saludo, setSaludo] = useState(false)  

    return (
        <div>
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
        </div>
    )
}




export default App_2;
