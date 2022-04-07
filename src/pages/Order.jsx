
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
        axios.get(`http://127.0.0.1:8000/api/user/history/` +id)
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
                {/* {Object.keys(data).map((item, i) => ( */}
                    <tbody>
                        <tr>
                        <td>{data.name}</td>
                        <td>{data.rentalStart}</td>
                        <td>{data.rentalEnd}</td>
                        <td>{data.duration}</td>
                        </tr>
                        
                    </tbody>
                     {/* ))} */}
                </Table>
               
        </Container>

        
    );
}