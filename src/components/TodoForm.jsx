import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

/**
 * Componente que renderiza el formulario para agregar o editar una tarea.
 * @param {Function} addTodo - Función para agregar una nueva tarea.
 * @param {Function} updateTodo - Función para actualizar una tarea existente.
 * @param {number} editIndex - Índice de la tarea a editar.
 * @param {Object[]} todos - Lista de tareas.
 */
const TodoForm = ({ addTodo, updateTodo, editIndex, todos }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (editIndex !== null && todos[editIndex]) {
      setValue(todos[editIndex].text);
    } else {
      setValue("");
    }
  }, [editIndex, todos]);

  /**
   * Maneja el envío del formulario.
   * @param {Object} e - El evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (editIndex !== null) {
      updateTodo(value, editIndex);
    } else {
      addTodo(value);
    }
    setValue("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mb-3 d-flex align-items-center justify-content-center"
    >
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="escribe una tarea.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="btn mx-2">
        {editIndex !== null ? "Actualizar Tarea" : "+"}
      </Button>
    </Form>
  );
};

// Agregar validación de tipos de propiedades con prop-types
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  editIndex: PropTypes.number,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

TodoForm.defaultProps = {
  editIndex: null,
};

export default TodoForm;
