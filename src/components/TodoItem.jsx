import PropTypes from "prop-types";
import { ListGroup, Button, ButtonGroup } from "react-bootstrap";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

/**
 * Componente que renderiza un elemento de tarea individual.
 * @param {Object} todo - La tarea a renderizar.
 * @param {number} index - El índice de la tarea.
 * @param {Function} toggleTodo - Función para alternar el estado de la tarea.
 * @param {Function} removeTodo - Función para eliminar la tarea.
 * @param {Function} setEditIndex - Función para establecer el índice de la tarea a editar.
 */
const TodoItem = ({ todo, index, toggleTodo, removeTodo, setEditIndex }) => {
  return (
    <ListGroup.Item className="d-flex my-2 justify-content-between align-items-center">
      <div
        style={{
          textDecoration: todo.completed ? "line-through" : "",
          textTransform: "uppercase",
          fontWeight: "bolder",
        }}
      >
        {todo.text}
      </div>
      <ButtonGroup aria-label="Basic example" className="mx-2">
        <Button variant="success" onClick={() => toggleTodo(index)}>
          <MdDone />
        </Button>
        <Button variant="light" onClick={() => setEditIndex(index)}>
          <MdModeEditOutline />
        </Button>
        <Button variant="light" onClick={() => removeTodo(index)}>
          <FaTrash />
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
};

// Agregar validación de tipos de propiedades con prop-types
TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  setEditIndex: PropTypes.func.isRequired,
};

export default TodoItem;
