import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import '../components/Detail/Detail.css'
import { Card, Container, Row, Col, Button, Figure } from 'react-bootstrap';
import { useHistory, Link, useParams} from 'react-router-dom';
import CardDetail from '../components/Detail/Detail'

export default function RoomsList() {
    const [data, setData] = useState([]);
    const {id}= useParams();
  
    useEffect(() => {
      axios
          .get(`http://127.0.0.1:8000/api/service/` +id)
          .then((res) => {
              console.log(res.data);
              setData(res.data);
              
          })
          .catch((err) => {
              console.log(err);
          }); 
  }, []);

  return (
    <section className="section-cardD">
    <div className='cardD'>
    <div className='cardD__container'>
    <div className='cardD__wrapper'>
    <ul className='cardD__items'>
        <CardDetail
          src={data.imageUrl}
          label={data.programName}
          text_1 = {data.description}
          text_2 = {data.isPaid}
          text_3 = {data.benefit}
          text_4 = {data.requirement}
          link = {data.registrationLink}
          text_5 = {data.duration}
          text_6 = {data.closeRegistration}
          // text_7 = {data.location.locationName}                 
         // text_8 = {data.tag.tagName}
        />
   
      </ul>
      </div>
      </div>
      </div>
      </section>     
  );
}