import React, { useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
// import Regis from './Regis';
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { useState } from 'react';
import { BASE_URL,baseURL } from '../url';

const Section = styled.section`
  background-color: #EDEFFD;
  height: 350px;
  width: 500px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgb(0 42 177 / 10%);
`;

const Title = styled.p`
text-align: center;
  color: #04050a;
  font-weight: 300;
  font-size: 35px;
`;

const Label = styled.p`
padding-left: 60px;
`;

const LabelPas = styled.p`
padding-left: 50px;
`;

const Left = styled.div`
  padding-left: 165px;
  padding-top: 25px;
`;

const LeftButton = styled.div`
  padding-left: 40px;
`;

const Right = styled.div`
  padding-top: 10px;
  padding-left: 465px;
`;

const Acc = styled.div`
padding-left: 8px;
font-size: 12px;
color : #326A88;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 40px;
  width: 90px;
  height: 35px;
  line-height: 50px;
  font-size: 17px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

function Login({close}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  //const apilogin='https://api.gunma.my.id/api/v1/login-user';

   useEffect(() => {
     if (email || password) {
      setError(false);
     }
     return () => {};
   }, [email, password]);

  function handleLogin (){
      // var datauser ={
      //   email : email,
      //   password : password,
      // }

      console.log(email,password);
      axios.post(baseURL + '/api/login', {
        email : email,
        password : password,
      })

// const variables = {
//                     email: email,
//                     password: password
//  } 
// axios.post(baseURL + "/api/login?email&password", variables)
      
      .then(function (res) {
        //set token on localStorage
        setError(false);
        console.log(res)
        // localStorage.setItem('token', res.data.token);
        swal({
          icon: 'success',
          text: 'Berhasil!',
        })
        window.location.reload();

    }).catch((err) =>{
      setError(true);
      swal({
        icon: 'error',
        text: 'Maaf! Terjadi Error',
      })
    })
  };
    return ( 
      <Section>
        <div>       
          <Right>
          <a href className="close" onClick={close}>
          &times;
          </a>
          </Right>
          <Title>
          Login Form
          </Title>
          <Left>
          <form>
            <div className = "form-group">
            <Label className="form-label"> <br/>Email : <br/> </Label> 
            <input type="email"
            value={email}
            placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className = "form-group">
            <LabelPas className="form-label"><br/> Password : <br/> </LabelPas> 
            <input type="password"
            value={password}
            placeholder="Enter password"  
            onChange={(e) => setPassword(e.target.value)} />           
            </div>
            <LeftButton>
            <div className="Login">
            <Button type = "submit" variant="primary" className = "btn btn-dark btn-lg btn-block" onClick={handleLogin}> Login </Button>
            </div>
            </LeftButton>
            </form>
            <Acc>
            <a align="center" href>  Don't Have Account ?
            {/* <Popup onClick={close} modal trigger={<u> Sign Up</u>}>
            {close => <Regis close={close} />}
            </Popup> */}
            </a> 
            </Acc>
            </Left> 
            </div> 
            </Section>
        )
      }
export default Login;