import React, { useEffect, useReducer, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import { GiCommercialAirplane } from "react-icons/gi";
import {
  BsArrowLeftRight,
  BsFillCalendar2WeekFill,
  BsSearch,
} from "react-icons/bs";

const Search = ({ title }) => {
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

  const [order, setOrder] = useState(true);

  //STYLE OBJECTS
  const inputStyles = {
    background: "#F0F3F5",
    height: "70px",
    border: "none",
  };

  const titleStyle = {
    fontWeight: "bold",
  };

  const containerStyle = {
    border: "1px solid black",
  };

  const iconStyle = { color: "black", height: "23px", width: "23px" };
  const iconStyleSearch = { ...iconStyle, color: "white" };

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

  const handleOrder = () => {
    setOrder(!order);
  };

  const handleSubmit = (e) => {
    const orderToSearch = order
      ? `From ${values.originSelector} to ${values.destinationSelector}`
      : `From ${values.destinationSelector} to ${values.originSelector}`;
    e.preventDefault();
    console.log(values);
    console.log(orderToSearch);
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

  //OPTIONS DATA
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
    dispatch({
      ["selectedFlightOption"]: flightTypeOptions[0],
      ["selectedPassagerOption"]: passagerOptions[0],
      ["selectedTravelClass"]: travelClass[0],
    });
  }, []);

  return (
    <Container className="mt-5 shadow py-5 px-3" style={containerStyle}>
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg={12} className="d-flex justify-content-start mb-3 px-4">
          <h1 className="px-2" style={titleStyle}>
            {title}
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
      <Form className="px-4 row" onSubmit={handleSubmit}>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text className="rounded-0" style={inputStyles}>
              <GiCommercialAirplane style={iconStyle} />
            </InputGroup.Text>

            <Form.Control
              className="rounded-0"
              value={values.originSelector}
              onChange={handleOrigin}
              id="disabledTextInput"
              style={inputStyles}
              required
              placeholder={order ? "From?" : "To?"}
            />
          </InputGroup>
        </Col>
        <Col lg={1}>
          <Button
            style={inputStyles}
            className="rounded-0 w-100"
            onClick={handleOrder}
          >
            <BsArrowLeftRight style={iconStyle} />
          </Button>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text className="rounded-0" style={inputStyles}>
              <GiCommercialAirplane style={iconStyle} />
            </InputGroup.Text>
            <Form.Control
              className="rounded-0"
              value={values.destinationSelector}
              onChange={handleDestination}
              id="disabledTextInput"
              style={inputStyles}
              required
              placeholder={order ? "To?" : "From?"}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text className="rounded-0" style={inputStyles}>
              <BsFillCalendar2WeekFill style={iconStyle} />
            </InputGroup.Text>
            <Form.Control
              type="date"
              value={values.departureDateSelector}
              onChange={handleDeparture}
              className="rounded-0"
              id="disabledTextInput"
              style={inputStyles}
              required
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text className="rounded-0" style={inputStyles}>
              <BsFillCalendar2WeekFill style={iconStyle} />
            </InputGroup.Text>
            <FormControl
              type="date"
              value={values.returnDateSelector}
              onChange={handleReturn}
              aria-label="Default"
              style={inputStyles}
              required
              className="rounded-0"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button variant="danger" id="button-addon1" type="submit">
              <BsSearch style={iconStyleSearch} />
            </Button>
          </InputGroup>
        </Col>
      </Form>
    </Container>
  );
};

export default Search;
