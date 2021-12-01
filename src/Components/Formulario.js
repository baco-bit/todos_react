import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../Hooks/useFormulario";

const Formulario = ({agregarTodo}) => {

    const initialState = {

        nombre: '',
        descripcion: '',
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState)

    const {nombre, descripcion, prioridad} = inputs

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

                <button type="submit" className="btn btn-primary mt-2">Agregar</button>
            </form>
        </>
    );
};

export default Formulario;