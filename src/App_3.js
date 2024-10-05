import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
//import { CheckProvider } from './Componentes/CheckContext';
import ComponenteCheckBox from './Componentes/ComponenteCheckBox';
import ComponenteParrafo from './Componentes/ComponenteParrafo';


function App_3() {

    const [ check, setCheck ] = useState(false);
 
    
    return (
        <>
            <section id="chequeo">
                <ComponenteCheckBox check={check} setCheck={setCheck} />
                <ComponenteParrafo check={check} texto_parrafo="Este texto será tachado" />
            </section>
        </>
    );

};

export default App_3;

