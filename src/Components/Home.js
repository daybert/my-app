import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'


const Home = () => {
    return (
        <Container className='mt-5'>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col lg={8} className='d-flex justify-content-center'>
                    <h3>This is the Home Page</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;