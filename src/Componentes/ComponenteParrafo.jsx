import React, { useContext } from 'react';

/**
 * ComponenteParrafo: muestra un parrafo sencillo con una condición en sus estilos
 * si el checkbox (ComponenteCheckBox) = true; tomará los estilos del objeto
 * styleComponenteParrafo.
 *
 * @param {object} - props del componente 
 * @param {boolean} props.check - estado de la propiedad checked de ComponenteCheckBox
 * @param {string} props.texto_parrafo - texto que se desea mostrar 
 */
const ComponenteParrafo = ({ texto_parrafo, check }) => {
    
    const styleComponenteParrafo = check
        ? { textDecoration: "line-through" }
        : {};

    return (
        
        <>
            <p style={ styleComponenteParrafo } >
                { texto_parrafo }
            </p>    
        </>

    );
};

export default ComponenteParrafo;

/** Comentarios por línea
 * 14: Condicional a travéz de terciario para dar valor al objeto de estilos CSS 
 *     Este depende de check, ? si es true : entonces quedará en blanco
 */
