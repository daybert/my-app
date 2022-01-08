import React from 'react';
import { Col, Accordion, Row, ListGroup, Button, Alert } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai'
const GateWay = ({
    gateway,
    index,
    setShowAddDeviceModal,
    getAllDevices,
    setGatewaySelected,
    setShowDeleteDeviceModal,
    setDeviceSelected
}) => {

    //STYLE OBJECTS
    const accordionStyles = {
        borderRadius: '0px',
        padding: '10px',
    }

    const deleteIconSyle = {
        color: 'red',
        fontSize: '20px'
    }
    return (
        <Accordion className='shadow' defaultActiveKey={'0'}>
            <Accordion.Item eventKey={JSON.stringify(index)} style={accordionStyles}>
                <Accordion.Header>
                    <Col xs={12}>
                        <Row>
                            <Col>
                                <h5>{gateway.human_readable_name}</h5>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                                <h6 className='text-muted'>IP: {gateway.ipv4_address}</h6>
                            </Col>
                        </Row>
                    </Col>
                </Accordion.Header>
                <Accordion.Body>
                    <Row className='mb-3'>
                        <Col className='d-flex justify-content-start'>
                            <h5>Devices</h5>
                        </Col>
                    </Row>
                    {gateway.devices.length ? (
                        <ListGroup variant="flush">
                            {gateway.devices.map((device) => (
                                <ListGroup.Item key={device._id}>
                                    <Row className='d-flex justify-content-between p-2' >
                                        <Col lg={8} xs={8} className='p-1'>
                                            {device.vendor}
                                        </Col>
                                        <Col lg={3} xs={3} className='p-0 m-0 d-flex justify-content-end'>
                                            <Button
                                                variant="transparent"
                                                className='p-1 ml-0'
                                                onClick={() => {
                                                    setDeviceSelected(device._id);
                                                    setGatewaySelected(gateway._id);
                                                    setShowDeleteDeviceModal(true);
                                                }}
                                            >
                                                < AiFillDelete
                                                    style={deleteIconSyle}
                                                />
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    ) : (
                        <Row>
                            <Col className='d-flex justify-content-center mt-2'>
                                <Alert variant='info'>
                                    <h6>No devices yet !</h6>
                                </Alert>
                            </Col>
                        </Row>
                    )}
                    <Row className='mt-5'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <Button
                                size='sm'
                                onClick={() => {
                                    setGatewaySelected(gateway._id);
                                    getAllDevices();
                                    setShowAddDeviceModal(true);
                                }}
                                variant='info'
                                className='rounded-circle text-white px-3  d-flex justify-content-center align-items-center'
                            >
                                <h3>+</h3>
                            </Button>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default GateWay;
