import React, { useState, useRef } from 'react';
import styled from 'styled-components';

/** 
 * CompnenteVideo: muestra dos videos cargados de distinta forma
 * video desde url youtube y video desde local
 *
 * @param {object} - props del componente
 * @param {string} props.videoID - url de video youtube con su respectivo id
 * @param {string} props.videoPATH - ruta local al video local
 * @returns {JSX.Element} - renderizado de los videos y botones de control
 */
const ComponenteVideo = ({ videoID, videoPATH }) => {

    const videoRef = useRef(null);                                              // 01
    
    // Activar reproducción de video -> play
    const videoPlay = () => videoRef.current.play();                            // 02
    // Poner en pausa la reproducción -> pause
    const videoPause = () => videoRef.current.pause();

    const styleComponenteBoton = {
        width: "10rem",
        backgroundColor: "var(--turquesa)",                                     // 03
        border: "solid 5px var(--turquesa)",
        borderRadius: "0.3rem"
    };                                                                          
                                                                                // 04
    const StyledButton = styled.button`
        width: 10rem;
        background-color: var(--turquesa);                                     
        border: solid 5px var(--turquesa);
        border-radius: 0.3rem;
        
        &:hover {
            background-color: var(--hover);
            border: solid 5px var(--hover);
        }`;
        
    return (
        <>
            <p>video desde youtube</p>
            <iframe 
                width="560" 
                height="315"
                src={ videoID }
                frameborder="0" allowfullscreen
            >
            </iframe>

            <p>video desde local</p>
            <video ref={ videoRef } width="560">
                <source src={ videoPATH } type="video/mp4" />
            </video>

            <div className="app_4-botones">
                <button 
                    style={ styleComponenteBoton }
                    onClick={ videoPlay }                                       // 05
                >
                    play
                </button>
                <StyledButton                       
                    onClick={ videoPause }                                      // 06   
                >
                    pause
                </StyledButton>
            </div>
        </>
    );
}

export default ComponenteVideo;



/** Comentarios
 * 01: Uso de useRef para controlar las propiedades del video local
 *     useRef devuelve objeto con la propiedad current, acá se le da valor null
 *     para posteriomente darle el valor que sea necesario al momento de montar
 *     el componente
 * 02: Manipulación de la propiedad current con funciones play() y pause(), acá 
 *     se le asigna el valor a current según se necesite.
 *     Estas serán las funciones onClick de los botones
 * 03: Variable global CSS, archivo App.css
 * 04: Librería styled-components. Permite un mejor menjo de CSS
 *     Se define el componente estilado y este es el que usaremos como etiqueta
 *     html en el jsx.
 * 05: Asignación de función videoPlay para activar la reproducción de video
 * 06: Asignación de la función videoPause para poner en pausa la reproducción
 */
