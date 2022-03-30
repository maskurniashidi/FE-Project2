import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Figure } from 'react-bootstrap';

export default function RoomsList() {

    const [data, getData] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/service/`)
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
            <div class="row row-cols-3">
                {data.map((data) => (
                    <Card>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}