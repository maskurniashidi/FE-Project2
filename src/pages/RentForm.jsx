import React from 'react';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DatePicker from "react-datepicker";
import TextField from "@mui/material/TextField";
import { Card, Container, Button, Form, Col, Row, Datetimepicker } from "react-bootstrap";
import { parse } from 'date-fns/esm';

const RentForm = ({ rentStart, setRentStart, rentEnd, setRentEnd, duration, setDuration, durationList }) => {

    const onChangeStart = (date) => {
        let dateJadiFix = date;
        // date date date pindah disini
        // nanti manggil setRentStart tinggal simpen di parent doang
        let endDate = dateJadiFix.getDate().toString();
        if(parseInt(dateJadiFix.getMonth) < 10) {
            let endMonth = "0" + dateJadiFix.getMonth().toString();
        }
        else {
            let endMonth = dateJadiFix.getMonth().toString();
        }

        let endYear = dateJadiFix.getFullYear().toString();
        let endFullDate = endYear + "-" + endMonth + "-" + endDate 
        console.log(endFullDate)


        setRentStart(dateJadiFix);
        // console.log(date);
    };

    const onChangeEnd = (date) => {
        let dateJadiFix = date;
        // date date date pindah disini
        // nanti manggil setRentStart tinggal simpen di parent doang

        setRentEnd(dateJadiFix);
        // console.log(date);
    }; 
    
    const onChangeDuration = (event) => {
        setDuration(event.target.value);
    }

    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                //format = "yy-MMM-dd"
                renderInput={(props) => <TextField {...props} />}
                label="Start"
                value={rentStart}
                onChange={onChangeStart}
            />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                //format = "yy-MMM-dd"
                renderInput={(props) => <TextField {...props} />}
                label="Until"
                value={rentEnd}
                onChange={onChangeEnd}
            />
            </LocalizationProvider>

            <Form.Group as={Col} md="4" controlId="validationDuration">
                <Form.Label>Duration</Form.Label>
                <Form.Select aria-label="Select Duration" Value={duration} onChange={onChangeDuration}>
                  {Object.keys(durationList).map((i) => (
                    <option value={durationList[i].duration}>{durationList[i].duration} Hours</option>
                  ))}
                </Form.Select>
              </Form.Group>
        </>
    )
};

export default RentForm;