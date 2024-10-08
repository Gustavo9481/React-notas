import React, { useState, useEffect } from 'react';


// Lista de nombres


const ListaNombres = () => {
    
    // useState porque se necesitará el renderizado de estos valores    
    const [ nombres, setNombres ] = useState([]);   // lista de nombres, inicia vacía
    const [ nuevoNombre, setNuevoNombre ] = useState("");   // agregar nuevos nombres   
    
    // useEffect porque es un evento que no implica renderización
    // el evento es el almacenamiento en local storage
    useEffect(() => {
        const storedNombres = localStorage.getItem('ListaNombres');

        if(storedNombres) { setNombres(JSON.parse(storedNombres)); }
        
    }, []);
    // * useEffect indica que cuando se cargue el componente, ejecute el código contenido
    // * storedNombres guardará lo que encuentre en localstorage perteneciente a ListaNombres
    // pero es una etiqueta personalizable, buena practica usar el mismo nombre del componente
    // * if -> comprueba si contiene data toma el json y lo convierte en array js, usando esa
    // data en setNombres para actualizar el valor de la lista nombres
    // * [] -> indica a useEffect que haga esta función sólo una vez cuando aparezca el componente
    
    // función que envuelve setNuevoNombre para poder usarla
    const actualizarNombre = (event) => {
        setNuevoNombre(event.target.value);   // actualiza valor del atributo value del input   
    }
    // * event es un objeto que contiene información del evento ocurrido (cambios en el input)
    // * target es el elemento html que disparó o donde ocurrió el evento
    // * value es el atributo o valor actual de ese atributo que se toma como el cambio 
    // * setNuevoNombre} actualiza el valor de NuevoNombre a ese valor


    // función al presionar el boton
    const addName = () => {
        if (nuevoNombre.trim()) {
            const updatedNombres = [...nombres, nuevoNombre.trim()];
            setNombres(updatedNombres);
            // 4. Guardar en localStorage
            localStorage.setItem('ListaNombres', JSON.stringify(updatedNombres));
            setNuevoNombre('');
        }
    };
    // * if -> comprueba que no esté vacío nuevoNombre, trim elimina los espacios en blanco
    // esto se ejecuta sólo si no está vacío nuevoNombre
    // * updatedNombres almacena una actualización de nombres, agregando al final el valor 
    // de nuevoNombre, aplicando trim para eliminar espacios en blanco al inicio y final 
    // * setNombres actualiza nombres con el valor updatedNombres, actualizando la lista 
    // * LocalStorage actualiza la data en la etiqueta ListaNombres con updatedNombres
    // JSON.stringify convierte el array en texto posible de almacenar
    // * setNuevoNombre('') limpia el input

    // Nueva función para eliminar nombres, index es la posición que se eliminará
    const deleteName = (index) => {

        const updatedNombres = nombres.filter((_, i) => i !== index);

        setNombres(updatedNombres);

        localStorage.setItem('ListaNombres', JSON.stringify(updatedNombres));
    };    
    // * updatedNombres -> Crear una nueva lista sin el nombre en el índice especificado
    // filter(_, i) '_' está en lugar de un valor conciso, i es el indice
    // i !== index trae los elementos que tengan la posición diferente a index

    
    return (
        <>
            <h1>Lista de Nombres</h1>
            <ul>
            {nombres.map((nombre, index) => (
                <div className="lista-nombres">
                    <li key={index}>
                        {nombre}
                    </li>
                    
                    <button onClick={() => deleteName(index)}>
                        eliminar
                    </button>
                </div>
            ))}
            </ul>
            <div className="input-agregar">
                <input 
                    type="text"
                    value={nuevoNombre}
                    onChange={actualizarNombre}
                    placeholder="ingrese nombre"
                />
                <button
                    onClick={addName}
                >
                    agregar
                </button>
            </div>

        </>
    );
};


export default ListaNombres;
