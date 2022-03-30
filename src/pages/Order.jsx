
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Figure,Table } from 'react-bootstrap';
import Title from '../components/Title';

export default function Order() {

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
            <Title title="Pesanan Saya" /> 
            {/* <div class="row row-cols-3">
            
            
                 <Card style={{ width: '18rem' }}>
                     <p>{data[item].name}</p>
              <img class="card-img-top" src={data[item].image_url} alt="Card image cap"></img>
                 
                    <div class="card-body">
                                <Card.Title>{data[item].name}</Card.Title>
                            <Card.Text> {data[item].description}</Card.Text>
                    </div>
                </Card>
                ))}
            </div> */}

                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name Service</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                {Object.keys(data).map((item, i) => (
                    <tbody>
                        <tr>
                        <td>{data[item].name}</td>
                        <td>{data[item].description}</td>
                        <td>{data[item].capacity}</td>
                        <td>{data[item].space}</td>
                        </tr>
                        
                    </tbody>
                     ))}
                </Table>
               
        </Container>

        
    );
}