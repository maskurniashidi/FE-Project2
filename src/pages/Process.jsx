import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Card, Container, Button, Form, Col, Row, Datetimepicker } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
// import DateTimePicker from 'react-bootstrap-date-time-picker';

const Right = styled.div`
  padding-top: 10px;
  padding-left: 465px;
`;

export default function Process({ close }) {

    const [data, getData] = useState([]);
    //const [email, setEmail] = useState([]);
    //const [name, setName] = useState([]);
    const [rentStart, setRentStart] = useState([]);
    const [rentEnd, setRentEnd] = useState([]);
    const [duration, setDuration] = useState([]);
    const [error, setError] = useState(false);
    const [array, getArray] = useState([]);
    const [arrayImages, getArrayImages] = useState([]);
    const [validated, setValidated] = useState(false);
    const { userId } = useParams();
    const { id } = useParams();

    // userId = localStorage.getItem('userId');

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/service/` + id)
            .then((res) => {
                console.log(res.data);
                getData(res.data.data);
                getArray(res.data.data.prices);
                getArrayImages(res.data.data.images);
                // setId(res.data.id);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    function handleOrder() {
        console.log();
        if (localStorage.getItem('token')) {
            axios.post('http://127.0.0.1:8000/api/rent', {
                service_id: id,
                user_id: userId,
                //email: email,
                //name: name,
                rentalStart: rentStart,
                rentalEnd: rentEnd,
                duration: duration,
            }).then(function (res) {
                setError(false);
                console.log(res);
                swal({
                    icon: 'success',
                    text: 'Berhasil ! Pesanan Anda telah diproses',
                })
            }).catch((err) => {
                setError(true);
                swal({
                    icon: 'error',
                    text: 'Maaf! Terjadi Kesalahan',
                });
            })
        }
        else {
            swal({
                icon: 'warning',
                text: 'Harap Login Terlebih dahulu!',
            });
        }
    };

    return (
        <Container className="grid" display="inline-block">
            <Right>
                <a href className="close" onClick={close}>
                    &times;
                </a>
            </Right>
            <Card>
            {/* {
                  Object.keys(arrayImages).map((data, i) => (
                    <img key={i} class="card-img-top" src={arrayImages[0].image_url} alt="Card image cap" />
                  ))
                } */}
                <Card.Title>
                    {data.name}
                </Card.Title>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleOrder}>
                        {/* <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    Value={setEmail}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please fill Email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                        Value={setName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please fill Username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row> */}
                        <Row className="mb-3">
                            {/* <Form.Label>{data.name}</Form.Label> */}
                            <Form.Group as={Col} md="4" controlId="validationStart">
                                <Form.Label>Start</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    Value={setRentStart}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Date.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationEnd">
                                <Form.Label>Until</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    Value={setRentEnd}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Date.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationDuration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Select aria-label="Select Duration">
                                    {
                                         
                                        Object.keys(array).map((i) => (
                                            <option value={array[i].duration}>{array[i].duration} Hours</option>
                                        ))
                                    }
                                </Form.Select>
                                {/* <Form.Control
                                    required
                                    type="text"
                                    Value={setDuration}
                                /> */}
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}