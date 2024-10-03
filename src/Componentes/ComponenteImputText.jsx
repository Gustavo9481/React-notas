import React from 'react';

// componente de imput text 


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
            />
        </div>
    )
}


export default ComponenteInputText;
