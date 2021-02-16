import React from "react";
import { Container } from "react-bootstrap";
import CreateTodo from "./modals/createTodo";
import TodoList from "./todoList";

function Todo() {
  return (
    <Container className="mt-3">
      <h1>✔ Lista de Tareas</h1>
      <p className="m-0 p-0">
        Haga click en el botón<strong> Añadir</strong> para crear tareas nuevas{" "}
      </p>
      <p className="m-0 p-0">
        Haga click en una tarea existente para modificarla{" "}
      </p>
      <CreateTodo />
      <TodoList />
    </Container>
  );
}

export default Todo;
