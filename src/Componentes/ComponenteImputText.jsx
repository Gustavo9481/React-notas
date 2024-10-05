import React from 'react';

/**
 * ComponenteInputText: renderiza un input tipo text en el cual el usuario 
 * ingresa su nombre, dato que se almacena en la variable valorInput
 *
 * @param {Object} - props del componente
 * @param {string} valorInput - variable para almacenar el valor del input
 * @param {function} setValorInput - función para manipular estado de la 
 *     variable valorInput
 * @returns {JSX.Element} - renderizado de input text y sus estilos
 */

const ComponenteInputText = ({ valorInput, setValorInput }) => {

    const styleComponenteImputText = {
        width: "100%",
        borderRadius: "0.3rem"
    }; 

    return (
        <div className="imput-text-div_1">
            <input 
                type="text"
                value={valorInput}
                onChange={(event) => setValorInput(event.target.value)}
                style={styleComponenteImputText}
                className="styleComponenteInputText"
                placeholder="ingrese su nombre"
            />
        </div>
    )
}

export default ComponenteInputText;

/** Comentarios por línea
 * 16: Definición de un objeto que almacena los estilos CSS del componente 
 * 25: La propiedad value toma el valor de valorInput, inicialmente ""
 * 26: Establece en onChance una función que actualiza el valor de valorInput
 */
