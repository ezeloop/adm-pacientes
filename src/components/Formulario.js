import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const { v4: uuidv4 } = require('uuid');

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [ error, actualizarError] = useState(false)

    //funcion que  se ejecuta cada vez que el usuario escribe en un input
    const handleChange = e => {
        actualizarCita({
            ...cita, //copio lo q habia, asi no se borra el campo anterior y agrego 
            [e.target.name] : e.target.value
        })
    }

    //extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;


    //cuando el usuario presiona agregar cita
    const submitCita = e => {
        //para evitar que haga la accion de posteo
        e.preventDefault();

        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha === '' || hora === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        actualizarError(false);

        //asignar id
        cita.id = uuidv4();

        
        //crear la cita

        crearCita(cita);

        //reiniciar el form
        actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
        })
        //se reinicia porq le pase al componente value lo que tiene, y al estar vacio, el value es ese
    }

    return ( 
     <Fragment>
         <h2>Crear Cita</h2>

         {error ? <p className="alerta-error">Todos los campos son obligatorios</p>    : null}
         <form
         onSubmit={submitCita}
         >
             <label> Nombre Mascota</label>
             <input
                 type="text"
                 name="mascota"
                 className="u-full-width"
                 placeholder="Nombre Mascota"
                 onChange={handleChange}
                 value={mascota}
             /> 

            <label> Nombre Dueño</label>
             <input
                 type="text"
                 name="propietario"
                 className="u-full-width"
                 placeholder="Nombre Dueño de la mascota"
                 onChange={handleChange}
                 value={propietario}
             /> 

            <label> Fecha</label>
             <input
                 type="date"
                 name="fecha"
                 className="u-full-width"
                 onChange={handleChange}
                 value={fecha}
                 
             /> 

            <label> Hora</label>
             <input
                 type="time"
                 name="hora"
                 className="u-full-width"
                 onChange={handleChange}
                 value={hora}
                 
             /> 

            <label> Síntomas</label>
             <textarea
             className="u-full-width"
             name="sintomas"
             onChange={handleChange}
             value={sintomas}
             >
             </textarea> 

             <button
                type="submit"
                className="u-full-width button-primary"
             >Agregar Cita</button>
             
         </form>
     </Fragment>
        );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;