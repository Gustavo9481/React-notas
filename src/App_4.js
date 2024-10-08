import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteVideo from './Componentes/ComponenteVideo.jsx';
import video from './Login_Usuario.mp4';                                        // 01

/**
 * App_4: renderiza los videos cargados a través de youtube y desde local, el 
 * video local acompañado de botones play y pause - ComponenteVideo
 *
 * @returns { JSX.Element} - renderizado de ComponenteVideo
 */ 
function App_4() {

    return (
        <ComponenteVideo 
            videoID="https://www.youtube.com/embed/wVdeDXIvbCc?si=HgnmtXNd_CVbI1hl"
            videoPATH={ video }
        />
    );
};

export default App_4;



/** Comentarios por linea
 * 01: importación del video local
 */
