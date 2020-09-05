import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button
            className = "button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}
            //en vez de a onclick la funcion asi nomas, debo pasarla como arrow function para que espere a que eso ocurra
            >Eliminar &times;</button>
        </div>
     );
}

Cita.propTypes= {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;