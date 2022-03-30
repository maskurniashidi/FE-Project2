// import React, { Component } from 'react'
// import { RoomContext } from '../context'
// import Loading from './Loading';
// import Room from './Room';
// import Title from './Title';
// import { useEffect, useState } from "react";
// import axios from "axios";
// import data from '../data';


// // export default function FeaturedRooms() {
// export default class FeaturedRooms extends Component {
//     // let { loading, featuredRooms: data } = this.context;
//     // const [id, setId] = useState("");
//     // const [name, setName] = useState("");
//     // const [space, setSpace] = useState("");
//     // const [capacity, setCapacity] = useState("");
//     // const [description, setDescription] = useState("");
//     // useEffect(() => {
//     //     axios
//     //         .get('http://127.0.0.1:8000/api/service/1')
//     //         .then((res) => {
//     //             console.log(res.data);
//     //             setId(res.data.id);
//     //             setName(res.data.name);
//     //             setSpace(res.data.space);
//     //             setCapacity(res.data.capacity);
//     //             setDescription(res.data.description);
//     //         })
//     //         .catch((err) => {
//     //             console.log(err);
//     //         });
//     // }, []);

    
//     const [data, getData] = useState([]);
//     useEffect(() => {
//         axios.get(`http://127.0.0.1:8000/api/service/`)
//             .then((res) => {
//                 console.log(res.data);
//                 getData(res.data.data);
//                 // setId(res.data.id);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//         static contextType = RoomContext;
//         render() {
//             let { loading, featuredRooms: rooms } = this.context;
//             console.log(rooms);
//             rooms = rooms.map(room => {
//                 return <Room key={room.id} room={room} />
//             });
//             return (
    
//                 <section className="featured-rooms container">
//                     <Title title="Layanan Unggulan" />
//                     <div className="row">
//                         {loading ? <Loading /> : rooms}
//                     </div>
//                 </section>
//             )
//         }
//     }

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Figure } from 'react-bootstrap';
import Title from './Title';

export default function FeatureRoom() {

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
            <Title title="Layanan Unggulan" /> 
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