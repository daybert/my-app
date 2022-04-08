import React, { useEffect, useReducer } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Search = () => {
  //STATES
  const [values, dispatch] = useReducer(
    (state, setState) => ({ ...state, ...setState }),
    {
      selectedFlightOption: "",
      selectedPassagerOption: "",
      selectedTravelClass: "",
      departureDateSelector: "",
      returnDateSelector: "",
      originSelector: "",
      destinationSelector: "",
    }
  );

  //STYLE OBJECTS
  const inputStyles = {
    background: "#F0F3F5",
    height: "60px",
  };

  const titleStyle = {
    fontWeight: "bold",
  };

  const containerStyle = {
    border: "1px solid black",
  };

  //FUNCTIONS
  const handleFlightType = (option) => {
    dispatch({ ["selectedFlightOption"]: option });
  };

  const handlePassagerOption = (option) => {
    dispatch({ ["selectedPassagerOption"]: option });
  };

  const handleTravelCLass = (option) => {
    dispatch({ ["selectedTravelClass"]: option });
  };

  const handleDeparture = (e) => {
    dispatch({ ["departureDateSelector"]: e.target.value });
  };

  const handleReturn = (e) => {
    dispatch({ ["returnDateSelector"]: e.target.value });
  };

  const handleOrigin = (e) => {
    dispatch({ ["originSelector"]: e.target.value });
  };

  const handleDestination = (e) => {
    dispatch({ ["destinationSelector"]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(values.selectedFlightOption);
    console.log(values.selectedPassagerOption);
    console.log(values.selectedTravelClass);
    console.log(values.departureDateSelector);
    console.log(values.destinationSelector);
    console.log(values.returnDateSelector);
    console.log(values.originSelector);
    dispatch({
      selectedFlightOption: "",
      selectedPassagerOption: "",
      selectedTravelClass: "",
      departureDateSelector: "",
      returnDateSelector: "",
      originSelector: "",
      destinationSelector: "",
    });
  };

  //FAKE DATA
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
    dispatch({ ["selectedFlightOption"]: flightTypeOptions[0] });
    dispatch({ ["selectedPassagerOption"]: passagerOptions[0] });
    dispatch({ ["selectedTravelClass"]: travelClass[0] });
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
            <Form.Control
              className="rounded-0"
              value={values.originSelector}
              onChange={handleOrigin}
              id="disabledTextInput"
              style={inputStyles}
              placeholder="From?"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              className="rounded-0"
              value={values.destinationSelector}
              onChange={handleDestination}
              id="disabledTextInput"
              style={inputStyles}
              placeholder="To?"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              value={values.departureDateSelector}
              onChange={handleDeparture}
              className="rounded-0"
              id="disabledTextInput"
              style={inputStyles}
            />
          </Form.Group>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              type="date"
              value={values.returnDateSelector}
              onChange={handleReturn}
              aria-label="Default"
              style={inputStyles}
              className="rounded-0"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button variant="danger" id="button-addon1" onClick={handleSubmit}>
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

export default Search;
