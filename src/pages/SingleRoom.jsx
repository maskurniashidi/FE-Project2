import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function SingleRoom() {
  const [data, getData] = useState([]);
  const [array, getArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/service/` + id)
      .then((res) => {
        console.log(res.data);
        getData(res.data.data);
        getArray(res.data.data.images);
        // setId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => { setLoading(false); });;
  }, []);

  if (loading) { return <p>Data is loading...</p>; }

  return (
    <div>
    <Container className="grid" display="inline-block">
      <div class="row row-cols-1">
          <Card>
            <Card.Body>
            {/* {Object.keys(image).map((data) => (
             <div>
             {image.images.map((image) => (
              <img class="card-img-top" src={image.image_url} alt="Card image cap"/>
              ))}
             </div>
              ))}  */}
              <div className ="row row-cols-2">
              {
                Object.keys(array).map((data, i) => (
                 <img key={i} class="card-img-top" src={array[i].image_url} alt="Card image cap"/> 
                
                ))
              }

              </div>
              <div class="card-body">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>Deskripsi : </Card.Text>
                <Card.Text>{data.description}</Card.Text>
                <Card.Text>Luas : {data.space} M²</Card.Text>
                <Card.Text>Kapasitas : {data.capacity} Orang</Card.Text>
                <Button>Pesan Sekarang</Button>
              </div>
            </Card.Body>
          </Card>
         
      </div>
    </Container>
    </div>
  );
}