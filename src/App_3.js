import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ComponenteCheckBox from './Componentes/ComponenteCheckBox';
import ComponenteParrafo from './Componentes/ComponenteParrafo';

/**
 * App_3: renderiza los componentes de checkbox y párrafo, el cual se tacha 
 * cuando el checkbox está en check.
 *
 * @returns {JSX.Element} - renderizado de los componentes:
 *    ComponenteCheckBox & ComponenteParrafo
 */
function App_3() {

    const [ check, setCheck ] = useState(false);
    
    return (
        <>
            <section id="chequeo">
                <ComponenteCheckBox 
                    check={ check } 
                    setCheck={ setCheck } 
                />
                <ComponenteParrafo  
                    texto_parrafo="Este texto será tachado"
                    check={ check }
                />  
            </section>
        </>
    );

};

export default App_3;

/** Comentarios por línea
 * 15: useState para almacenar el valor booleano del checkbox, default = false
 * 22: Asignación se la función setCheck para permitir modificar el valor de check
 */
