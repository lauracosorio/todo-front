import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import EditarTodo from "./modals/editarTodo";
import { getFromLocal } from "../functions/localStorage";

function TodoList() {
  const [data, setData] = useState([]);

  const email = getFromLocal("email");
  const pass = getFromLocal("pass");
  const tokenKey = getFromLocal("token");

  const urlBack = 'http://localhost:5000'

  useEffect(() => {
    axios
      .get(`${urlBack}/todos/`, {
        headers: {
          user_token: `${tokenKey}`,
          autenticacion: `Basic ${email}:${pass}`,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res);
      });
  }, []);

  const deleteTodo = (_id) => {
    axios
      .delete(`${urlBack}/deleteTodo/${_id}`, {
        headers: {
          user_token: `${tokenKey}`,
        },
      })
      .then((res) => {
        res.json();
      });
    window.location = `/dashboard`;
  };

  return (
    <Container>
      <Container className="mt-5 ">
        <Container as={Row} className="m-auto text-center">
          <Col sm={12} md={4}>
            <p>
              {" "}
              <span className="alert alert-danger p-1">Por Realizar</span>
            </p>
            <Table>
              <tr>
                <th style={{ border: "none" }}>Importante</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Por_Realizar" &&
                    todo.prioridad === "Importante" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          {" "}
                          {todo.vencimiento === Date.now
                            ? alert("La tarea se vence hoy")
                            : null}
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                            title="Eliminar Tarea"
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
              <tr>
                <th style={{ border: "none" }}>Urgente</th>
              </tr>
              {data.map((todo) => {
               
                return (
                  <>
                    {todo.estado === "Por_Realizar" &&
                    todo.prioridad === "Urgente" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                            title="Eliminar Tarea"
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
            </Table>
          </Col>
          <Col sm={12} md={4}>
            {" "}
            <p>
              <span className="alert alert-warning p-1">Realizando</span>
            </p>
            <Table>
              <tr>
                <th style={{ border: "none" }}>Importante</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizando" &&
                    todo.prioridad === "Importante" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                            title="Eliminar Tarea"
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
              <tr>
                <th style={{ border: "none" }}>Urgente</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizando" &&
                    todo.prioridad === "Urgente" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                            title="Eliminar Tarea"
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
            </Table>
          </Col>
          <Col sm={12} md={4}>
            <p>
              <span className="alert alert-success p-1">Realizada</span>
            </p>
            <Table>
              <tr>
                <th style={{ border: "none" }}>Importante</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizada" &&
                    todo.prioridad === "Importante" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />{" "}
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",

                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                            title="Eliminar Tarea"
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
              <tr>
                <th style={{ border: "none" }}>Urgente</th>
              </tr>
              {data.map((todo) => {
                return (
                  <>
                    {todo.estado === "Realizada" &&
                    todo.prioridad === "Urgente" ? (
                      <tr key={todo._id}>
                        <td
                          style={{ color: "red", border: "none", padding: 3 }}
                        >
                          <EditarTodo data={todo} />
                          <button
                            style={{
                              backgroundColor: "white",
                              border: "none",

                              height: "40px",
                              margin: 0,
                            }}
                            onClick={() => {
                              deleteTodo(todo._id);
                            }}
                            title="Eliminar Tarea"
                          >
                            ⛔
                          </button>
                        </td>
                      </tr>
                    ) : null}
                  </>
                );
              })}
            </Table>
          </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default TodoList;
