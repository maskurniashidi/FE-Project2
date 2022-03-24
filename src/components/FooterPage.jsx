import React from "react";
import styled from "styled-components";
import logo from "../images/logo1.png";
import { AiFillInstagram} from "react-icons/ai";
// import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaClock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaEnvelope
} from 'react-icons/fa';

export default function FooterPage() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
            <br/>
          Sewa virtual office, private office, shared office dengan lokasi prestisius di Surabaya dan paket jasa pembuatan PT & CV untuk bisnismu. tingkatkan kepercayaan customermu dengan alamat kantor yang prestisius bersama Graha Office Surabaya
          </p>
          
        </div>
        <div className="kontak container">
          <div className="title">
          <h3><b>Contact Us</b></h3>
          </div>
          <p>Alamat <span/>: Surabaya, Jawa Timur, Indonesia<br/>
          No Tlp <span/>  : (031) 3000 2222 / 0811 52 1000 <br/>
          WA <span/>: (031) 3000 2222 / 0811 52 1000 <br/>
          Email <span/>: cs@grahaoffice.com<br/>
          Jam Kerja <span/>: Senin – Jumat (08.00-17.00 WIB)</p>
          <ul>
            <li>
              <Link to={'//www.instagram.com/surabayavirtualoffice/'}target='_blank'><AiFillInstagram /></Link>
              
            </li>
            <li>
            <Link to={'//web.facebook.com/surabayavirtualoffice.official?_rdc=1&_rdr'}target='_blank'> <FaFacebookF /></Link>
            </li>
            <li>
            <Link to={'//www.youtube.com/channel/UCRtSgT8Dn1Q7eXyuBJibIKg/featured'}target='_blank'><FaYoutube /></Link>
            </li>
          </ul>
            </div>
           
        <div className="kantor container">
          <div className="title">
            <h3><b>Kantor Graha Office</b></h3>
          </div>
          <p>
          Graha Pena Lt 15, Jl. Ahmad Yani No.88, Ketintang, Kec. Gayungan, Kota SBY, Jawa Timur 60231
          </p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Powered &copy; By <span>Graha Office</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: black;
  /* background: linear-gradient(to right, #06138b, #e2e9f0); */
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;
  padding: 2vw;
  p {
    font-size: 0.9rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    align-items: center;
      justify-content: center;
    li {
      padding: 0.6rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0000ff;
        font-size: 1.4rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 12vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    /* gap: 0.5rem; */
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      padding-bottom: 1vw;
      text-align: center;
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: white;
  color: #333;
  padding: 1rem;
  h2 {
    font-size: 0.9rem;
    span {
      font-size: 0.8rem;
      color: #4979fc;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;