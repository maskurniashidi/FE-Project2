import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Figure } from 'react-bootstrap';
import { useHistory, NavLink } from 'react-router-dom';

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
            {Object.keys(data).map((item, i) => (
                    <Card>
                        <Card.Body>
                     
                            <NavLink to= {`/SingleRoom/${data[item].id}`} style={{ textDecoration: 'none' }}>
                                     <img class="card-img-top" src={data[item].image_url} alt="Card image cap"></img>
                                      <div class="card-body">
                                           <Card.Title>{data[item].name}</Card.Title>
                                           <Card.Text> {data[item].description}</Card.Text>
                                      </div>
                            </NavLink> 
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}