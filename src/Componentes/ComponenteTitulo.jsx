import React from 'react';

/**
 * ComponenteTitulo: muestra un título h1 simple con sus estilos CSS 
 * El contenido del texto se aplica al llamar el Componente 
 *
 * @param {Object} - props del componente
 * @param {string} mensaje - texto del Componente a mostrar en interfaz
 * @returns {JSX.Element} - renderizado del titulo h1 y su contenido texto
 */

const ComponenteTitulo = ({mensaje}) => {

    const styleComponenteTitulo = {
        width: "100%",
        textAlign: "center",
        fontSize: "3rem",
        color: "#60D9FA"
    }
    return (
        <div>
            <h1 style={styleComponenteTitulo} className="styleComponenteTitulo">
                {mensaje}
            </h1>
        </div>
    )
}

export default ComponenteTitulo;

/** Comentarios pr línea
 * 12: El valor del parámetro se pasa al llamar el componente, en este caso en App
 *     ejemplo: <Componente mensaje="texto que se quiere mostrar" />
 * 14: Objeto que contiene los estilos CSS del componente 
 * 22: aplicación de los estilos y una clase para agregar estilos extra
 */
