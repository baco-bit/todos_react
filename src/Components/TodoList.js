import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
    
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if(localStorage.getItem('todos')){
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const agregarTodo = todo => {
        console.log(todo);
        setTodos((old) => [...old, todo])
    };

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }

    return(
        <>
            <Formulario agregarTodo={agregarTodo}/>
            <ul className="list-group list-group-numbered mt-2">
                {
                    todos.map((item) => (
                        <Todo 
                        key={item} 
                        todo={item} 
                        eliminarTodo={eliminarTodo} 
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default TodoList;