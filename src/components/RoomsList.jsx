import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button, Figure } from 'react-bootstrap';
import { useHistory, NavLink, Link} from 'react-router-dom';

export default function RoomsList() {

    const [data, getData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/service`)
            .then((res) => {
                console.log(res.data);
                getData(res.data.data);
                // setId(res.data.id);
            })
            .catch((err) => {
                console.log(err);
            }).finally(() => { setLoading(false); });;
    }, []); 
    
    if (loading) { return <p>Data is loading...</p>; }
    return (
        <Container className="grid" display="inline-block">
            <div className ="row row-cols-3">
            {data.map((item, i) => (
                    <Card key={i}>
                        <Card.Body>
                            {/* <NavLink to= {'/rooms/'+ item.id} style={{ textDecoration: 'none' }}> */}
                            {/* {item.images.map((image, b) => (
                                     <img className="card-img-top" src={image.image_url} alt="Card image cap" key={b}></img>
                                     ))} */}
                                     <img className="card-img-top" src={item.images[0].image_url} alt="Card image cap"></img>
                                      <div className="card-body">
                                           <Card.Title>{item.name}</Card.Title>
                                           <Card.Text> {item.description.substring(0, 100) + '.....'}</Card.Text>
                                           <Card.Text>Rp. {item.prices[0].price},00</Card.Text>
                                      </div>
                                      <Link to= {'/rooms/'+ item.id} style={{ textDecoration: 'none' }} >
                                       <Button  > Detail </Button>
                                       </Link>
                            {/* </NavLink>  */}
                        </Card.Body>
                    </Card>
                              ))}
            </div>
        </Container>
    );
}