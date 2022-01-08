import React from 'react';
import { Modal, Col, Button } from 'react-bootstrap';
import { BsQuestionOctagon } from "react-icons/bs";

const DeleteDeviceModal = ({ showDeleteDeviceModal, deviceSelected, deleteDeviceFromGateWay, setShowDeleteDeviceModal }) => {

    // STYLE OBJECTS
    const buttonStyle = {
        borderRadius: '0px',
        color: 'white'
    }

    const iconStyles = {
        fontSize: '70px',
        color: 'black'
    }

    return (
        <Modal
            size='sm'
            show={showDeleteDeviceModal}
            centered
            onHide={() => setShowDeleteDeviceModal(false)}>
            <Modal.Header closeButton>
                <h4>Sure to delete ?</h4>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-center p-4'>
                <BsQuestionOctagon
                    style={iconStyles}
                />
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
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
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteDeviceModal;
