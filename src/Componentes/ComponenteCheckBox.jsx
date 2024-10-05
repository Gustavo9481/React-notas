import React, { Fragment } from 'react';
//import { CheckProvider, CheckContext } from './CheckContext';


/**
 * ComponenteCheckBox: muestra una casilla de verificación para dar condición
 * a la muestra de un valor
 *
 * @param {object} - props del componentes
 * @returns {JSX.Element} - renderizado del checkbox
 */

const ComponenteCheckBox = ({check, setCheck}) => {

    const actualizarCheck = (event) => {
        setCheck(event.target.checked);  // checked propio del html checkbox
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
