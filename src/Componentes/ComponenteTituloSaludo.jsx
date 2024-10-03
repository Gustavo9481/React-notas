import React from 'react';

/**
 * ComponenteTituloSaludo: muestra un saludo basado en el nombre proporcionado,
 * se renderiza al hacer click en el boton a la derecha del input 
 *
 * @param {Object} props - propiedades del componente
 * @param {string} props.valorInput_2 - nombre ingresado por ususario a través del
 *   input.
 * @returns {JSX.Element} - saludo renderizado junto al valor del nombre
 */

const ComponenteTituloSaludo = ({valorInput_2}) => {                            

    const styleComponenteTituloSaludo = {
        fontSize: "2rem",
        color: "#60D9FA"
    };

    return (
        <div>
            <h1 style={styleComponenteTituloSaludo}>
                Saludos querido {valorInput_2}
            </h1>
        </div>
    );

}

export default ComponenteTituloSaludo;

/** Comentarios por línea
 * 13: Parámetro valorInput_2 declarado en App_2; almacena el valor captado del input.
 * 15: Objeto que alberga los estilos CSS aplicados en el componente.
 * 22: Aplicación de los estilos en el JSX.Element retornado.
 * 23: Inserción del valorInput_2 (nombre de usuario) en el mensaje de saludo.
 */

