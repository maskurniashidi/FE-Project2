import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Container, Button, Form, Col, Row, Datetimepicker } from "react-bootstrap";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import DatePicker from "react-datepicker";
//mui
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import DateTimePicker from 'react-bootstrap-date-time-picker';

const Right = styled.div`
  padding-top: 10px;
  padding-left: 465px;
`;

export default function Process({ close }) {
  const [token, setToken] = useState([]);
  const [idUser, setidUser] = useState(localStorage.getItem("idUser"));
  const [data, getData] = useState([]);
  //const [email, setEmail] = useState([]);
  //const [name, setName] = useState([]);
  const [rentStart, setRentStart] = useState(new Date());
  const [getDateStart, setGetDateStart] = useState({
    date: rentStart.toString().slice(8, 10),
    month: (rentStart.getMonth() + 1).toString(),
    year: rentStart.getFullYear().toString(),
    time: rentStart.toString().slice(16, 24),
  });
  const [rentEnd, setRentEnd] = useState(new Date());
  const [getDateEnd, setGetDateEnd] = useState({
    date: rentEnd.toString().slice(8, 10),
    month: (rentEnd.getMonth() + 1).toString(),
    year: rentEnd.getFullYear().toString(),
    time: rentEnd.toString().slice(16, 24),
  });
  const [duration, setDuration] = useState(1);
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
    service_id: parseInt(id),
    user_id: parseInt(idUser),
    rentalStart: getDateStart.date + "-" + getDateStart.month + "-" + getDateStart.year + " " + getDateStart.time,
    rentalEnd: getDateEnd.date + "-" + getDateEnd.month + "-" + getDateEnd.year + " " + getDateEnd.time,
    duration: duration,
  });
  const [concatRents, setConcatRents] = useState([]);
  console.log(getDateStart);
  console.log(getDateEnd);
  console.log(rentStart.toString(), rentEnd.toString(), duration, parseInt(id), parseInt(idUser));
  const handleDuration = (event) => {
    setDuration(parseInt(event.target.value));
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/service/` + id)
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
  }, []);

  const addRents = () => {
    setRents({
      service_id: parseInt(id),
      user_id: parseInt(idUser),
      rentalStart: getDateStart.date + "-" + getDateStart.month + "-" + getDateStart.year + " " + getDateStart.time,
      rentalEnd: getDateEnd.date + "-" + getDateEnd.month + "-" + getDateEnd.year + " " + getDateEnd.time,
      duration: duration,
    });
    console.log(rents);
    if (concatRents.length === 0) {
      setConcatRents(rents);
      console.log("test");
    } else {
      setConcatRents(concatRents.push(rents));
    }
    console.log(concatRents);
  };

  function handleOrder(event) {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };

    if (localStorage.getItem("token", token)) {
      for (let i = 0; i < concatRents.length; i++) {
        axios
          .post("http://127.0.0.1:8000/api/rent", concatRents[i], config)
          .then(function (res) {
            setError(false);
            console.log(res);
            swal({
              icon: "success",
              text: "Berhasil ! Pesanan Anda telah diproses",
            });
          })
          .catch((err) => {
            setError(true);
            swal({
              icon: "error",
              text: "Maaf! Terjadi Kesalahan",
            });
          });
      }
    } else {
      swal({
        icon: "warning",
        text: "Harap Login Terlebih dahulu!",
      });
    }
  }

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
        <Card.Title>{data.name}</Card.Title>

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

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Start"
                  value={rentStart}
                  onChange={(newValue) => {
                    setRentStart(newValue);
                    setGetDateStart({
                      date: rentStart.toString().slice(8, 10),
                      month: (rentStart.getMonth() + 1).toString(),
                      year: rentStart.getFullYear().toString(),
                      time: rentStart.toString().slice(16, 24),
                    });
                    if (rentStart.getMonth() + 1 < 10) {
                      setGetDateStart({
                        date: rentStart.toString().slice(8, 10),
                        month: "0" + (rentStart.getMonth() + 1).toString(),
                        year: rentStart.getFullYear().toString(),
                        time: rentStart.toString().slice(16, 24),
                      });
                    }
                  }}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Until"
                  value={rentEnd}
                  onChange={(newValue) => {
                    setRentEnd(newValue);
                    setGetDateEnd({
                      date: rentEnd.toString().slice(8, 10),
                      month: (rentEnd.getMonth() + 1).toString(),
                      year: rentEnd.getFullYear().toString(),
                      time: rentEnd.toString().slice(16, 24),
                    });
                    if (rentEnd.getMonth() + 1 < 10) {
                      setGetDateEnd({
                        date: rentEnd.toString().slice(8, 10),
                        month: "0" + (rentEnd.getMonth() + 1).toString(),
                        year: rentEnd.getFullYear().toString(),
                        time: rentEnd.toString().slice(16, 24),
                      });
                    }
                  }}
                />
              </LocalizationProvider>

              <Form.Group as={Col} md="4" controlId="validationDuration">
                <Form.Label>Duration</Form.Label>
                <Form.Select aria-label="Select Duration" Value={duration} onChange={handleDuration}>
                  {Object.keys(array).map((i) => (
                    <option value={array[i].duration}>{array[i].duration} Hours</option>
                  ))}
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

            {Object.keys(concatRents).map((item) => (
              <div>
                <span>{concatRents[item].rentalStart}</span>
                <span>{concatRents[item].rentalEnd}</span>
              </div>
            ))}
            <Form.Group className="mb-3">
              <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
            </Form.Group>

            <Button onClick={handleOrder} type="submit">
              Submit
            </Button>
            {/* <Button onClick={handleOrder}>Coba</Button> */}
          </Form>
          <button
            onClick={() => {
              var dataRents = {
                service_id: parseInt(id),
                user_id: parseInt(idUser),
                rentalStart: getDateStart.date + "-" + getDateStart.month + "-" + getDateStart.year + " " + getDateStart.time,
                rentalEnd: getDateEnd.date + "-" + getDateEnd.month + "-" + getDateEnd.year + " " + getDateEnd.time,
                duration: duration,
              };
              setRents({
                ...dataRents,
              });
              if (concatRents.length === 0) {
                setConcatRents({ dataRents });
                console.log("test");
              } else {
                setConcatRents(concatRents.push(rents));
              }
              console.log(concatRents);
              console.log(dataRents);
              console.log(rents);
            }}
          >
            {" "}
            +{" "}
          </button>
        </Card.Body>
      </Card>
    </Container>
  );
}
