
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Figure,Table } from 'react-bootstrap';
import Title from '../components/Title';
import { useParams } from 'react-router-dom';

export default function Order() {

    const [data, getData] = useState([]);
    const { userId } = useParams();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/rent/` +id )
            .then((res) => {
                console.log(res.data);
                getData(res.data.data);
                // setId(res.data.id);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container className="grid" display="inline-block">
            <Title title="Pesanan Saya" /> 

                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name Service</th>
                        <th>Rental Start</th>
                        <th>Rental End</th>
                        <th>Duration</th>
                        </tr>
                    </thead>
                    
                    {data.map((item, i) => (
                    <tbody key={i}>
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.rentalStart}</td>
                        <td>{item.rentalEnd}</td>
                        <td>{item.duration}</td>
                        </tr>
                        
                    </tbody>
                       ))}
                </Table>
               
        </Container>

        
    );
}