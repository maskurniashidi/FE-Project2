import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Button } from 'react-bootstrap';
import { useParams, NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Process from "../pages/Process"

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
  },[]);

  if (loading) { return <p>Data is loading...</p>; }


  return (

    <div>
      <Container className="grid" display="inline-block">
        <div class="row row-cols-1">
          <Card>
            <Card.Body>
          
              <div className="row row-cols-2">
                {
                  Object.keys(array).map((data, i) => (
                    <img key={i} class="card-img-top" src={array[i].image_url} alt="Card image cap" />
                  ))
                }
              </div>
              <div class="card-body">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>Deskripsi : </Card.Text>
                <Card.Text>{data.description}</Card.Text>
                {/* <Card.Text>Rp. {item.prices[0].price}</Card.Text> */}
           
                <Card.Text>Luas : {data.space} M²</Card.Text>
                <Card.Text>Kapasitas : {data.capacity} Orang</Card.Text>
             
                {/* <Popup modal trigger={ */}
                    <Button href={'/Process/'+id}>
                      Pesan Sekarang
                    </Button>

                    {/* </NavLink>}>  */}
                 {/* }> */}


       
                {/* </Popup> */}
              </div>
            </Card.Body>
          </Card>

        </div>
      </Container>
    </div>
  );
}