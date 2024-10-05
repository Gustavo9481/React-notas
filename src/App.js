import React, { Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ComponenteTitulo from './Componentes/ComponenteTitulo';
import ComponenteBoton from './Componentes/ComponenteBoton.jsx';


function App() {

    return (
        <>
            <section id="titulo">
                < ComponenteTitulo 
                    mensaje="Hello World - GUScode - Notas React" 
                />
            </section>
        </>
    )
}




export default App;
