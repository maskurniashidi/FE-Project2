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
   const [token, setToken] = useState([]);
   const [idUser, setidUser] = useState([]);
    const [data, getData] = useState([]);
    //const [email, setEmail] = useState([]);
    //const [name, setName] = useState([]);
    const [rentStart, setRentStart] = useState(new Date());
    const [rentEnd, setRentEnd] = useState(new Date());
    const [duration, setDuration] = useState([]);
    const [error, setError] = useState(false);
    const [array, getArray] = useState([]);
    const [arrayImages, getArrayImages] = useState([]);
    const [validated, setValidated] = useState(false);
    // const { userId } = useParams();
    const { id } = useParams();
    // const rents = [
    //     {
    //         service_id: 4,
    //         user_id: 1,
    //         rentalStart: "2022-03-01 10:32:15",
    //         rentalEnd: "2022-03-01 17:32:15",
    //         duration: 2
    //     },
    //     {
    //         service_id: 2,
    //         user_id: 1,
    //         rentalStart: "2022-03-01 10:32:15",
    //         rentalEnd: "2022-03-01 17:32:15",
    //         duration: 2
    //     },
    //     {
    //         service_id: 2,
    //         user_id: 1,
    //         rentalStart: "2022-03-01 10:32:15",
    //         rentalEnd: "2022-03-01 17:32:15",
    //         duration: 2
    //     }
    // ]
    const [rents, setRents] = useState({
        service_id: 0,
        user_id: 0,
        rentalStart: "",
        rentalEnd: "",
        duration: 0
    });
    const [concatRents, setConcatRents] = useState([]);
    // userId = localStorage.getItem('userId');
    const addRents = () => {
        setRents({
          service_id: id,
          user_id: localStorage.getItem(idUser),
          rentalStart: rentStart,
          rentalEnd: rentEnd,
          duration: duration
      })
      if(concatRents.length === 0){
          setConcatRents(rents);
           console.log("test");
           console.log(rents);
           console.log(typeof(rentStart));
      }else{
          concatRents.push(rents);
      }
      console.log(concatRents);
    }

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

    function handleOrder(event) {
        event.preventDefault();
        const config = {
            headers: {
              'Content-Type': "application/json",
              Authorization : "Bearer 24|7X9kRIypW8rqycmhrtyYl4wMAkeWzLSctCfqmK8S",
            },
          };
        (localStorage.getItem('idUser', setidUser))
        if (localStorage.getItem('token', token))
        {
            for (let i = 0; i < concatRents.length; i++) {
          
            axios.post('http://127.0.0.1:8000/api/rent',
            concatRents[i]
            ,config).then(function (res) {
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
            console.log(id);
            console.log(idUser);
            console.log(rentStart);
            console.log(rentEnd);
            console.log(duration);
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
                                Value={rentStart}
                                onchange={e=>setRentStart((e.target.value).toString())}
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
                                Value={rentEnd}
                                onchange={e=>setRentEnd(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Date.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationDuration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Select aria-label="Select Duration"
                                Value={duration}
                                onchange={e=>setDuration(e.target.value)}
                            >
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

                        {/* <div className="btn-box">
                             {inputList.length !== 1 && <button
                             className="mr10"
                             onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div> */}
                       
                    </Row>
                    
                    {
                            Object.keys(concatRents).map((item) => (
                                <div>
                                <span>{concatRents[item].rentalStart}</span>
                                <span>{concatRents[item].rentalEnd}</span>
                                </div>
                                ))
                        }
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    
                    <Button onClick={handleOrder} type="submit">Submit</Button>
                    {/* <Button onClick={handleOrder}>Coba</Button> */}
                </Form>
                <button onClick={addRents}> + </button>
            </Card.Body>
        </Card>
    </Container>
  );
}
 
