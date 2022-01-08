import React, { useState, useEffect } from 'react'
import {Container, Row} from 'react-bootstrap';
import Device from './Device';
import axios from 'axios';
import DeleteModal from './DeleteModal';

const Devices = () => {

    const [devices, setDevices] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const getAllDevices = async () => {
        try {
            const devices = await axios.get('http://localhost:4000/devices');
            setDevices(devices.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteDevice = async (deviceId) => {
        setShowDeleteModal(true);
        try {
            const { status } = await axios.delete(`http://localhost:4000/deleteDevice/${deviceId}`);
            if (status === 200) {
                setDevices(devices.filter(device => device.id !== deviceId));
                getAllDevices();
            } else {
                alert('Some error ocurred')
            }
        } catch (error) {
            console.log(error);
        }
        setShowDeleteModal(false);
    };

    useEffect(() => {
        getAllDevices();
    }, []);

    return (
        <Container className='mt-5'>
            <DeleteModal showDeleteModal={showDeleteModal} />
            <Row>
                {devices.map((device, index) => (
                    <Device
                        key={index}
                        device={device}
                        deleteDevice={deleteDevice}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default Devices;