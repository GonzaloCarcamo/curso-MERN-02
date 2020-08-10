import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = () => {

    // Crear state de Citas

    const [cita, actualizarCita] = useState({
        
        mascota: '',
        propietario: '',
        fecha: '',
        hora:'',
        sintomas:''
    });

    const [error, actualizarError] = useState(false);

    // Función que se ejecuta al escribir en el input

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    // Extraer los valores

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando cliente da clic en form

    const submitCita = e => {
        e.preventDefault();

        // Validar

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        // Eliminar mensaje previo

        actualizarError(false);

        // Asignar ID

        cita.id = uuid();

        // Crear Cita

        // Reiniciar form
    }

    return( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre mascota'
                    onChange={actualizarState}
                    value={mascota}
                />   

                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre dueño mascota'
                    onChange={actualizarState}
                    value={propietario}
                />   

                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                />  

                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea 
                    className='u-full-width' 
                    name='sintomas'
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>

        </Fragment>
    );
}

export default Formulario;