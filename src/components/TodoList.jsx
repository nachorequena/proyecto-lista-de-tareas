import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { ListGroup } from "react-bootstrap";

/**
 * Componente que renderiza la lista de tareas.
 * @param {Object[]} todos - La lista de tareas.
 * @param {Function} toggleTodo - Función para alternar el estado de una tarea.
 * @param {Function} removeTodo - Función para eliminar una tarea.
 * @param {Function} setEditIndex - Función para establecer el índice de la tarea a editar.
 */
const TodoList = ({ todos, toggleTodo, removeTodo, setEditIndex }) => {
  return (
    <ListGroup>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          setEditIndex={setEditIndex}
        />
      ))}
    </ListGroup>
  );
};

// Agregar validación de tipos de propiedades con prop-types
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  setEditIndex: PropTypes.func.isRequired,
};

export default TodoList;
