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
import RentForm from "./RentForm";
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
    day: rentStart.toDateString().slice(8, 10),
    month: (rentStart.getMonth()+ 1).toString(),
    year: rentStart.getFullYear().toString(),
    time: rentStart.toString().slice(16, 24),
  });
  const [rentEnd, setRentEnd] = useState(new Date());
  const [getDateEnd, setGetDateEnd] = useState({
    day: rentEnd.toString().slice(8, 10),
    month: (rentEnd.getMonth() + 1).toString(),
    year: rentEnd.getFullYear().toString(),
    time: rentEnd.toString().slice(16, 24),
  });
  const [duration, setDuration] = useState(1);
  const [error, setError] = useState(false);
  const [array, getArray] = useState([]);
  const [arrayImages, getArrayImages] = useState([]);
  const [validated, setValidated] = useState(false);
  const [iteration, setIteration] = useState(0);
  // const { userId } = useParams();
  const { id } = useParams();
  // const rents = useState();
  //   {
  //     service_id: 4,
  //     user_id: 1,
  //     rentalStart: "2022-03-01 10:32:15",
  //     rentalEnd: "2022-03-01 17:32:15",
  //     duration: 2,
  //   },
  //   {
  //     service_id: 2,
  //     user_id: 1,
  //     rentalStart: "2022-03-01 10:32:15",
  //     rentalEnd: "2022-03-01 17:32:15",
  //     duration: 2,
  //   },
  //   {
  //     service_id: 2,
  //     user_id: 1,
  //     rentalStart: "2022-03-01 10:32:15",
  //     rentalEnd: "2022-03-01 17:32:15",
  //     duration: 2,
  //   },
  // ];

  const [rents, setRents] = useState([{
    //id: 13121,
    service_id: parseInt(id),
    user_id: parseInt(idUser),
    rentalStart: getDateStart.year + "-" + getDateStart.month + "-" + getDateStart.day + " " + getDateStart.time,
    rentalEnd: getDateEnd.year + "-" + getDateEnd.month + "-" + getDateEnd.day + " " + getDateEnd.time,
    duration: duration,
  }]);

  console.log(rents);
  // const [concatRents, setConcatRents] = useState([]);
  // console.log(getDateStart);
  // console.log(getDateEnd);
  // console.log(rentStart.toString(), rentEnd.toString(), duration, parseInt(id), parseInt(idUser));
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
  var allRentsData = [];

  const onChangeStart = (inputId, newValue) => {
    console.log(newValue);
    setRents(prev => prev.map(rent => {
      if (rent.id === inputId) {
        return {
          ...rent,
          rentalStart: newValue
        };
      }

      return rent;
    }))
  }

  const onChangeEnd = (inputId, newValue) => {
    setRents(prev => prev.map(rent => {
      if (rent.id === inputId) {
        return {
          ...rent,
          rentalEnd: newValue
        };
      }

      return rent;
    }))
  }

  const onChangeDuration = (inputId, newValue) => {
    setRents(prev => prev.map(rent => {
      if (rent.id === inputId) {
        return {
          ...rent,
          duration: newValue
        };
      }

      return rent;
    }))
  }

  const addRents = () => {
    setRents(prev => [
      ...prev,
      {
        id: Math.floor(Math.random() * 10000),
        service_id: parseInt(id),
        user_id: parseInt(idUser),
        rentalStart: getDateStart.year + "-" + getDateStart.month + "-" + getDateStart.day + " " + getDateStart.time,
        rentalEnd: getDateEnd.year + "-" + getDateEnd.month + "-" + getDateEnd.day + " " + getDateEnd.time,
        duration: duration,
      }
    ]);
    // setRents({
    //   service_id: parseInt(id),
    //   user_id: parseInt(idUser),
    //   rentalStart: getDateStart.year + "-" + getDateStart.month + "-" + getDateStart.date + " " + getDateStart.time,
    //   rentalEnd: getDateEnd.year + "-" + getDateEnd.month + "-" + getDateEnd.date + " " + getDateEnd.time,
    //   duration: duration,
    // });
    // allRentsData.push(rents);
    // console.log(allRentsData);
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

        axios
          .post("http://127.0.0.1:8000/api/rents", rents, config)
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
            console.log(err);
            swal({
              icon: "error",
              text: "Maaf! Terjadi Kesalahan",
            });
          });
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
        <Card.Title>{data.name}</Card.Title>

        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleOrder}>
            <Row className="mb-3">
              
              {rents.map(rent => 
                <RentForm 
                   key={rent.id} 
                  rentStart={rent.rentalStart} 
                  rentEnd={rent.rentalEnd} 
                  setRentStart={onChangeStart.bind(null, rent.id)} 
                  setRentEnd={onChangeEnd.bind(null, rent.id)}
                  setDuration={onChangeDuration.bind(null, rent.id)}
                  durationList={array} />)}
            </Row>
            <Form.Group className="mb-3">
              <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
            </Form.Group>

            <Button type="submit">Submit</Button>
            <Button onClick={handleOrder}>Coba</Button>
          </Form>
          <button onClick={addRents}> Tambah </button>
        </Card.Body>
      </Card>
    </Container>
  );
}
