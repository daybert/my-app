import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Home = () => {
  //STATES
  const [selectedFlightOption, setSelectedFlightOption] = useState("");
  const [selectedPassagerOption, setSelectedPassagerOption] = useState("");
  const [selectedTravelClass, setSelectedTravelClass] = useState("");

  //STYLE OBJECTS
  const inputStyles = {
    background: "#F0F3F5",
    height: "60px",
  };

  //FUNCTIONS
  const handleFlightType = (option) => {
    setSelectedFlightOption(option);
  };

  const handlePassagerOption = (option) => {
    setSelectedPassagerOption(option);
  };

  const handleTravelCLass = (option) => {
    setSelectedTravelClass(option);
  };

  const titleStyle = {
    fontWeight: "bold",
  };

  const containerStyle = {
    border: "1px solid black",
  };

  const flightTypeOptions = [
    "Solo ida",
    "Ida y vuelta",
    "Multi-destino",
    "Generador de viajes",
  ];

  const passagerOptions = [
    "Adultos",
    "Estudiantes",
    "Jóvenes",
    "Niños",
    "Bebés en asiento",
    "Bebés en regazo",
  ];

  const travelClass = [
    "Económica",
    "Económica Premium",
    "Negocios",
    "Primera",
    "Mixta",
  ];

  useEffect(() => {
    setSelectedFlightOption(flightTypeOptions[0]);
    setSelectedTravelClass(travelClass[0]);
    setSelectedPassagerOption(passagerOptions[0]);
  }, []);

  return (
    <Container className="mt-5 shadow py-5 px-3" style={containerStyle}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={12} className="d-flex justify-content-start mb-3 px-4">
          <h1 className="px-2" style={titleStyle}>
            Search hundreds of travel sites at once
          </h1>
        </Col>
      </Row>
      <Row className="px-2 py-2">
        <Col lg={2} className="px-3">
          <Form.Group className="mb-3">
            <Form.Select
              id="disabledSelect"
              className="border-0"
              onChange={(e) => handleFlightType(e.target.value)}
            >
              {flightTypeOptions.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group className="mb-3">
            {/* <Form.Label htmlFor="disabledSelect">
              Disabled select menu
            </Form.Label> */}
            <Form.Select
              id="disabledSelect"
              className="border-0"
              onChange={(e) => handlePassagerOption(e.target.value)}
            >
              {passagerOptions.map((passager, index) => (
                <option key={index}>{passager}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group className="mb-3">
            <Form.Select
              id="disabledSelect"
              className="border-0"
              onChange={(e) => handleTravelCLass(e.target.value)}
            >
              {travelClass.map((classItem, index) => (
                <option key={index}>{classItem}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="px-4">
        <Col>
          <Form.Group className="mb-3">
            {/* <Form.Label>Disabled input</Form.Label> */}
            <Form.Control
              className="rounded-0"
              id="disabledTextInput"
              style={inputStyles}
              placeholder="Disabled input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            {/* <Form.Label>Disabled input</Form.Label> */}
            <Form.Control
              className="rounded-0"
              id="disabledTextInput"
              style={inputStyles}
              placeholder="Disabled input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            {/* <Form.Label>Disabled input</Form.Label> */}
            <Form.Control
              className="rounded-0"
              id="disabledTextInput"
              style={inputStyles}
              placeholder="Disabled input"
            />
          </Form.Group>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              style={inputStyles}
              className="rounded-0"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button variant="danger" id="button-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
