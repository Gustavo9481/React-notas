import React from 'react';

// componente de títulos

const ComponenteTitulo = () => {

    const styleComponenteTitulo = {
        width: "100%",
        textAlign: "center",
        color: "#60D9FA"
    }
    return (
        <div>
            <h1 style={styleComponenteTitulo} className="styleComponenteTitulo">
                Hello World - GUScode
            </h1>
        </div>
    )
}


export default ComponenteTitulo;
