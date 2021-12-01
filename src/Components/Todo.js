const Todo = ({todo, eliminarTodo, editarTodo}) => {

    const {id, nombre, descripcion, estado, prioridad} = todo

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{nombre} ({estado ? 'Finalizado' : 'Pendiente'})</div>
                <p>{descripcion}</p>
                <button 
                className="btn btn-danger me-2" 
                onClick={() => eliminarTodo(id)}
                >
                    Eliminar
                </button>

                <button 
                className="btn btn-info"
                onClick={() => editarTodo(id)}
                >
                    Editar
                </button>
            </div>
            <span className="badge bg-danger rounded-pill">
                {prioridad && 'Dar Prioridad'}
            </span>
        </li>
    );
};

export default Todo;