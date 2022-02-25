import React, { Component } from 'react'
import Title from './Title'
import { FaHandshake, FaClock, FaMoneyBill, FaUsers } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaHandshake />,
                title: "Transaksi Mudah & Terpercaya",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon: <FaClock />,
                title: "Realtime Booking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon: <FaMoneyBill />,
                title: "Price Match Guaranted",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon: <FaUsers />,
                title: "Mitra Partner Terlengkap di Indonesia",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
                <Title title="Mengapa Memilih Sewa In?" />
                <div className="row">
                    {this.state.services.map((item, index) => {
                        return (
                            <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                                <div className="card shadow-lg border-0 p-4">
                                    <article className="service">
                                        <span>{item.icon}</span>
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                    </article>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}