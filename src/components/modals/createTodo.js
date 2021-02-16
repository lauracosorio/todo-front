import React, { useState } from "react";
import { Form, Col, Row, Modal, Button } from "react-bootstrap";
import axios from "axios";
import { getFromLocal } from "../../functions/localStorage";

function CreateTodo() {
  //Hooks modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [estado, setEstado] = useState("");
  const [vencimiento, setVencimiento] = useState("");

  const email = getFromLocal("email");
  const pass = getFromLocal("pass");
  const tokenKey = getFromLocal("token");

  const urlBack = 'http://localhost:5000'

  const addTodo = () => {
    axios
      .post(
        `${urlBack}/createTodo`,
        {
          imagen,
          nombre,
          prioridad,
          estado,
          vencimiento,
        },
        {
          headers: {
            user_token: `${tokenKey}`,
            autenticacion: `Basic ${email}:${pass}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
    window.location = "/dashboard";
  };


  const fileSend = async (file) => {

   
    let formData = new FormData();
    formData.append("file", file);
    let res = ''
    try {
      console.log(`${urlBack}/imageupload/`)
      res = await axios.post(`${urlBack}/imageupload/`, formData);

    } catch (error) {
      console.log('Error updating file.');
    }
    return res.data
  }

  return (
    <>
      <Button variant="info" className="p-1 mt-3" onClick={handleShow}>
        Añadir
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              controlId="imagen"
              className="d-flex justify-content-center"
            >
              <Form.File
                id="imagen"
                label="Inserte una imagen"
                onChange={(e) => {
                  setImagen(e.target.value);
                }}
                type="file"
                name="todoImage"
              />
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="name"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-1">
                Nombre de la tarea
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  placeholder="Sacar al perro"
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                  name="nombre"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="prioridad"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-1">
                Prioridad de la tarea
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  as="select"
                  defaultValue="Seleccionar..."
                  onChange={(e) => {
                    setPrioridad(e.target.value);
                  }}
                  name="prioridad"
                >
                  <option>Seleccionar...</option>
                  <option value="Importante">Importante</option>
                  <option value="Urgente">Urgente</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="prioridad"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-1">
                Estado de la tarea
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  as="select"
                  defaultValue="Seleccionar..."
                  onChange={(e) => {
                    setEstado(e.target.value);
                  }}
                  name="estado"
                >
                  <option>Seleccionar...</option>
                  <option value="Por_Realizar">Por realizar </option>
                  <option value="Realizando">Realizando </option>
                  <option value="Realizada">Realizada </option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="date"
              className="d-flex justify-content-center"
            >
              <Form.Label column sm="4" className="m-0 p-0">
                Fecha de vencimiento
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    setVencimiento(e.target.value);
                  }}
                  name="vencimiento"
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="info"
            onClick={() => {
              handleClose();
              addTodo();
            }}
          >
            Crear Tarea
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTodo;
