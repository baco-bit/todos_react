const Todo = ({todo, eliminarTodo}) => {

    const {id, nombre, descripcion} = todo

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{nombre}</div>
                <p>{descripcion}</p>
                <button 
                className="btn btn-danger me-2" 
                onClick={() => eliminarTodo(id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Todo;