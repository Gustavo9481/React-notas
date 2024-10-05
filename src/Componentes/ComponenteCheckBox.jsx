import React, { Fragment } from 'react';

/**
 * ComponenteCheckBox: muestra una casilla de verificación para dar condición
 * a los estilos de ComponenteParrafo
 *
 * @param {object} - props del componentes
 * @param {boolean} props.check - estado de la propiedad checked
 * @param {function} props.setCheck - fuención para modificar vaor de check
 * @returns {JSX.Element} - renderizado del checkbox
 */
const ComponenteCheckBox = ({check, setCheck}) => {

    const actualizarCheck = (event) => {
        setCheck(event.target.checked); 
    };
    
    return (
        <>
            <input type="checkbox"
                checked={check}
                onChange={actualizarCheck}
            />
        </>
    );
};

export default ComponenteCheckBox;

/** Comentarios por línea
 * 14: Función que permite la actualización de la props check
 *     checked es un atributo nativo del input HTML tipo checkbox
 * 21: Asignación del valor check al atributo checked
 * 22: Definición del aqtributo onChange con el valos de la función
 */
