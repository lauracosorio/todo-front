import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { saveToLocal } from "../functions/localStorage";

function FormSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const urlBack = 'http://localhost:5000'

  const Login = (e) => {
    e.preventDefault();

    axios
      .post(
        `http://localhost/login`,
        {
          email,
          password,
        },
        { "Content-Type": "application/json" }
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Bievenido!",
          icon: "success",
          confirmButtonText: "Ok",
        });

        // setCredentials({ email, password });
        saveToLocal("email",email);
        saveToLocal("pass", password)
        saveToLocal("token", res.data);
        history.push("/dashboard"); //organizar ruta para que lleve al inicio
      })
      .catch((error) => {
        console.log(error);
        const Swal = require("sweetalert2");
        Swal.fire({
          title: "Error!",
          text: "El correo y/o la contraseña no son validos",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const history = useHistory();

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "25rem" }} className=" mt-5">
        <Form
          className=" mb-5"
          onSubmit={(e) => {
            Login(e);
          }}
        >
          <h3 className="mt-5 mb-5 text-center">Iniciar Sesión</h3>
          <Form.Group className="ml-5 mr-5" controlId="email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@email.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="ml-5 mr-5 mb-5" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="ml-5 mr-5 ">
            <Button variant="primary" type="submit" block>
              Iniciar Sesión
            </Button>
            <Link to="/registrarse" className="mt-4 text-right link">
              <p className="mt-3">Registrarse</p>
            </Link>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}

export default FormSignIn;
