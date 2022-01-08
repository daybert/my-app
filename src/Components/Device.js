import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Device = ({device, deleteDevice }) => {
    return (
        <Col lg={4} className='py-3 px-3' >
            <Card className='shadow'>
                <Card.Body>
                    <Card.Title>
                        {device.vendor}
                    </Card.Title>
                    <Card.Text>
                        {device.status}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant='danger' onClick={() => deleteDevice(device._id)}>
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    )

};

export default Device;