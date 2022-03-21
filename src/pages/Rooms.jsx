import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
import axios from "axios";
import { useEffect, useState } from 'react';



const Rooms = () => {

    const [data, setData] = useState([]);
useEffect(() => {
    axios
        .get('http://127.0.0.1:8000/api/service/1')
        .then((res) => {
            console.log(res.data);
            setData(res.data);
           // setId(res.data.id);
        })
        .catch((err) => {
            console.log(err);
        }); 
}, []);


    return (
        <div>
            <Hero hero="roomsHero">
            </Hero>
            <Banner title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/" className="btn btn-warning">
                    RETURN HOME
                </Link>
            </Banner>
            <RoomsContainer />
        </div>
    )
}

export default Rooms
