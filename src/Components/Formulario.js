import { useState } from "react";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../Hooks/useFormulario";

const Formulario = ({agregarTodo}) => {

    const initialState = {

        nombre: '',
        descripcion: '',
        estado: '',
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState)

    const {nombre, descripcion, estado, prioridad} = inputs

    const handleSubmit = (e) => {
         e.preventDefault()
        if(!nombre.trim()){
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No dejar nombre en blanco',
                icon: 'error',
            });
            return;
        };
        if(!descripcion.trim()){
            e.target[1].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No dejar descripcion en blanco',
                icon: 'error',
            });
            return;
        };
        Swal.fire({
            title: 'Éxito',
            text: 'Tarea Agregada',
            icon: 'success',
        });
        agregarTodo({
            nombre,
            descripcion,
            estado: estado === 'Pendiente' ? false : true,
            prioridad,
            id: uuidv4(),
        });
        reset();
    };

    

    return (
        <>
            <h3>Agregar TODO</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese TODO nombre"
                    value={nombre}
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-2"
                    name="descripcion"
                    placeholder="Ingrese Descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />

                <select 
                name="estado" 
                className="form-control mb-2"
                value={estado}
                onChange={handleChange}
                >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Finalizado">Finalizado</option>
                </select>

                <div className="form-check">
                    <input
                        id="flexCheckDefault"
                        className="form-check-input"
                        type="checkbox"
                        name="prioridad"
                        checked={prioridad}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Dar Prioridad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Agregar</button>
            </form>
        </>
    );
};

export default Formulario;