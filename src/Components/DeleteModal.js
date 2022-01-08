import React from 'react';
import { Modal, ModalBody, Row, Col, Spinner } from 'react-bootstrap';


const DeleteModal = ({showDeleteModal}) => {
    return (
        <Modal show={showDeleteModal} centered size='sm'>
            <ModalBody>
                <Row>
                    <Col className='d-flex justify-content-center pb-4' >
                        <h4>Deleting Device</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Spinner animation='border' role='status' />
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    );
};

export default DeleteModal;