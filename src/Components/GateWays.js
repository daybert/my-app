import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Col, Container, ListGroup, Row, ModalBody, Button, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import GateWay from './GateWay';
import { BsQuestionOctagon } from "react-icons/bs";
import AddDeviceModal from './AddDeviceModal';

const GateWays = () => {

    //STATES
    const [gateways, setGateways] = useState([]);
    const [showAddDeviceModal, setShowAddDeviceModal] = useState(false);
    const [devices, setDevices] = useState([]);
    const [gatewaySelected, setGatewaySelected] = useState(null);
    const [deviceSelected, setDeviceSelected] = useState(null);
    const [showDeleteDeviceModal, setShowDeleteDeviceModal] = useState(false);

    //FUNCTIONS
    const getAllGateWays = async () => {
        try {
            const gateWaysList = await axios.get('http://localhost:4000/gateways');
            setGateways(gateWaysList.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllDevices = async () => {
        try {
            const devices = await axios.get('http://localhost:4000/devices');
            setDevices(devices.data);
        } catch (error) {
            console.log(error);
        }
    };

    const addDevice = async (deviceId) => {
        try {
            const response = await axios.put(`http://localhost:4000/addDeviceToGateWay/${gatewaySelected}/device/${deviceId}`)
            console.log(response);
            getAllDevices();
            getAllGateWays();
        } catch (error) {
            alert('The device already exist in the GateWay');
            console.log('Error:', error);
        }
        setShowAddDeviceModal(false);
    };

    const deleteDeviceFromGateWay = async (deviceId) => {
        try {
            const { status } = await axios.delete(`http://localhost:4000/deleteDeviceFromGateWay/${gatewaySelected}/device/${deviceId}`);
            if (status === 200) {
                getAllDevices();
                getAllGateWays();
            } else {
                alert('Some error ocurred')
            }
        } catch (error) {
            console.log(error)
        }
        setShowDeleteDeviceModal(false);
    };

    // STYLE OBJECTS
    const buttonStyle = {
        borderRadius: '0px',
        color: 'white'
    }

    const iconStyles = {
        fontSize: '70px',
        color: 'black'
    }

    useEffect(() => {
        getAllGateWays();
    }, [])

    return (
        <Container className='mt-5'>
            <AddDeviceModal
                addDevice={addDevice}
                setShowAddDeviceModal={setShowAddDeviceModal}
                devices={devices}
                showAddDeviceModal={showAddDeviceModal}
            />
            <Modal
                size='sm'
                show={showDeleteDeviceModal}
                centered
                onHide={() => setShowDeleteDeviceModal(false)}>
                <ModalHeader closeButton>
                    <h4>Sure to delete ?</h4>
                </ModalHeader>
                <ModalBody className='d-flex justify-content-center p-4'>
                    <BsQuestionOctagon
                        style={iconStyles}
                    />
                </ModalBody>
                <ModalFooter className='justify-content-center'>
                    <Col lg={5}>
                        <Button
                            variant='info'
                            size="lg"
                            className='w-100'
                            style={buttonStyle}
                            onClick={() => setShowDeleteDeviceModal(false)}>
                            Cancel
                        </Button>
                    </Col>
                    <Col lg={5}>
                        <Button
                            variant='danger'
                            size="lg"
                            className='w-100'
                            style={buttonStyle}
                            onClick={() => {
                                deleteDeviceFromGateWay(deviceSelected);
                            }}
                        >
                            Delete
                        </Button>
                    </Col>
                </ModalFooter>
            </Modal>
            <Row>
                {gateways.map((gateway, index) => (
                    <Col lg={4} className='py-3 px-3' key={gateway._id}>
                        <GateWay
                            gateway={gateway}
                            index={index}
                            setShowAddDeviceModal={setShowAddDeviceModal}
                            getAllDevices={getAllDevices}
                            setGatewaySelected={setGatewaySelected}
                            setDeviceSelected={setDeviceSelected}
                            setShowDeleteDeviceModal={setShowDeleteDeviceModal}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};


export default GateWays;
