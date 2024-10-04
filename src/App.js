import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ComponenteTitulo from './Componentes/ComponenteTitulo';
import ComponenteBoton from './Componentes/ComponenteBoton.jsx';


function App() {

    return (
        <div>
            <section id="titulo">
                < ComponenteTitulo 
                    mensaje="Hello World - GUScode - Notas React" 
                />
            </section>
        </div>
    )
}




export default App;
