import React, { Fragment, useContext } from 'react';
import {CheckProvider, CheckContext} from './CheckContext'


const ComponenteParrafo = ({ check, texto_parrafo }) => {
    
    const styleComponenteParrafo = check
        ? { textDecoration: "line-through" }
        : {};

    return (
        
        <>
            <p style={styleComponenteParrafo}>{ texto_parrafo }</p>    
        </>

    );
};

export default ComponenteParrafo;
