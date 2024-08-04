import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
/**
 * Componente principal de la aplicación.
 * Maneja el estado de las tareas y la lógica de agregar, marcar, eliminar y editar tareas.
 */
const App = () => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Cargar las tareas desde Local Storage cuando la aplicación se monte.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Guardar las tareas en Local Storage cada vez que cambien.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /**
   * Agrega una nueva tarea a la lista.
   * @param {string} text - El texto de la nueva tarea.
   */
  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  /**
   * Actualiza una tarea existente.
   * @param {string} text - El texto actualizado de la tarea.
   * @param {number} index - El índice de la tarea a actualizar.
   */
  const updateTodo = (text, index) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
    setEditIndex(null);
  };

  /**
   * Alterna el estado de completado de una tarea.
   * @param {number} index - El índice de la tarea a alternar.
   */
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  /**
   * Elimina una tarea de la lista.
   * @param {number} index - El índice de la tarea a eliminar.
   */
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1
            className="my-4 "
            style={{
              color: "rgb(236, 190, 62)",
              textTransform: "uppercase",
              fonWeight: "bold",
              textAlign: "center",
            }}
          >
            Lista de Tareas
          </h1>
          <TodoForm
            addTodo={addTodo}
            updateTodo={updateTodo}
            editIndex={editIndex}
            todos={todos}
          />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            setEditIndex={setEditIndex}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
