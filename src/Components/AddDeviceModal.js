import React from 'react';
import { Modal, Row, Col, ListGroup } from 'react-bootstrap';

const AddDeviceModal = ({ showAddDeviceModal, setShowAddDeviceModal, devices, addDevice }) => {

    return (
        <Modal show={showAddDeviceModal} centered onHide={() => setShowAddDeviceModal(false)}>
            <Modal.Header closeButton>
                <h4>Select a Device</h4>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            {devices.map((device) => (
                                <ListGroup.Item
                                    key={device._id}
                                    onClick={() => addDevice(device._id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {device.vendor}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );

};

export default AddDeviceModal;
