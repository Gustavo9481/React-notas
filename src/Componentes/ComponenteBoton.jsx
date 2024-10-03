import React from 'react';

/**
 * ComponenteBoton: muestra un botón simple con unos estilos generales
 * aplica una función que captura el valor del input y los actualiza
 * desencadenando la renderización de ComponenteTituloSaludo
 *
 * @param {Object} - props del componente
 * @param {string} props.valorInput - nombre capturado del input
 * @param {function} props.setValorInput - useState actualizadora de valorInput
 * @param {function} props.setSaludo - useState actualizadora de saludo 
 * @param {function} props.setValorInput_2 - useState actualizadora de valorInput_2 
 * @returns {JSX.Element} - renderizado de boton y sus estilos css
 */

const ComponenteBoton = ({ valorInput, setValorInput, setSaludo, setValorInput_2 }) => {
    
    const styleComponenteBoton = {
        backgroundColor: "#60D9FA",
        border: "solid 5px #60D9FA",
        borderRadius: "0.3rem"
    };

    const PruebaValorInput = () => {
        if (valorInput.trim() != ""){  
            setValorInput_2(valorInput);
            setSaludo(true);
            setValorInput("");
        }
        
    }

    return (
        <div>
            <button 
                style={styleComponenteBoton} 
                onClick={PruebaValorInput}
                className="styleComponenteBoton"
            >
                click-me
            </button>
        </div>
    )
}

export default ComponenteBoton;

/** Comentarios por línea
 * 18: Define un objeto que alberga los estilos CSS propios del componente.
 * 24: Define la función PruebaValorInput, que captura el valor ingresado a través del input.
 * 25: Verifica si el input está en blanco o no usando trim().
 * 26: Actualiza el valor de valorInput_2 con el valor capturado en valorInput.
 * 27: Activa el renderizado del saludo estableciendo setSaludo en true.
 * 28: Limpia el valor del input en la interfaz y actualiza valorInput a una cadena vacía.
 *     El valor capturado se mantiene en valorInput_2 para mostrarlo en el saludo.
 * 37: Asigna la función PruebaValorInput al evento onClick del botón.
 */
