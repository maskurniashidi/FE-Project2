import React from 'react'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div className="container aboutus">
            <div className="row">
                <div className="col-md-6 col-12 my-auto">
                    <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
                </div>
                {/* <div className="col-md-6 col-12 my-auto">
                    <h1 className="display-4 text-center my-5">About Us </h1>
                    <p className="lead text-justify text-center">Kami Mahasiswa Magang</p>
                    <div className="text-center col-md-6 col-12 mx-auto">
                        <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                    </div>
                </div> */}
            </div>
            <div className="about_company">
                <h1 className="display-4">About Company</h1>
                <div className="pt-4">
                    <p className="about_info">Sewa virtual office, private office, shared office dengan lokasi prestisius di Surabaya dan paket jasa pembuatan PT & CV untuk bisnismu. tingkatkan kepercayaan customermu dengan alamat kantor yang prestisius bersama Graha Office Surabaya</p>
                </div>
            </div>
            <div className="team">
                <h1 className="display-4">Our Team</h1>
            </div>
            <div className="row mb-5">
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Team Member</h5>
                            <div className="card-text text-black-50">Admin <p className="float-right">5 years</p>
                            </div>
                            <h6 className="mt-5">CONNECT</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Team Member</h5>
                            <div className="card-text text-black-50">Admin <p className="float-right">5 years</p>
                            </div>
                            <h6 className="mt-5">CONNECT</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Team Member</h5>
                            <div className="card-text text-black-50">Admin <p className="float-right">8 years</p>
                            </div>
                            <h6 className="mt-5">CONNECT</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;