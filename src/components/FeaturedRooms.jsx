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
import { Card, Container, Row, Col, Button, Figure} from 'react-bootstrap';
import { useHistory, Link} from 'react-router-dom';
import Title from './Title';
import img from '../images/room-1.jpeg'

export default function FeatureRoom() {
    const [data, getData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/service`)
            .then((res) => {
                console.log(res.data);
                getData(res.data.data.slice(0,2));
                // setId(res.data.id);
            })
            .catch((err) => {
                console.log(err);
            }).finally(() => { setLoading(false); });;
    }, []); 
    
    if (loading) { return <p>Data is loading...</p>; }

    return (
        <div>
            <h1>Featured Room</h1>
        <Container className="grid" display="inline-block">
        <div className ="row row-cols-3">
        {data.map((item, i) => (
                <Card key={i}>
                    <Card.Body >
                       
                        {/* {item.images.map((image, b) => (
                                 <img className="card-img-top" src={image.image_url} alt="Card image cap" key={b}></img>
                                 ))} */}
                                 <img className="card-img-top" src={item.images[0].image_url} alt="Card image cap"></img>
                                  <div className="card-body" >
                                 
                                       <Card.Title>{item.name}</Card.Title>
                                       <Card.Text>Rp. {item.prices[0].price}</Card.Text>
                                       <Link to= {'/rooms/'+ item.id} style={{ textDecoration: 'none' }} >
                                       <Button > Detail </Button>
                                       </Link>
                                  </div>
                         
                    </Card.Body>
                </Card>
                          ))}
        </div>
    </Container>
    </div>
    );
}