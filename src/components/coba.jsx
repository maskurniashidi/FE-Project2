import React from 'react'
import axios from 'axios'

export default function coba(){
var data = '{\r\n    "name" : "hasnaaro",\r\n    "email" : "hasnaaro@gmail.com",\r\n    "password" : "hasnaa123"\r\n}';
const Daftar = ()=>{
    var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/register',
        headers: { },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}
    return(
        <div>
            <h1>Register</h1>
            <button onClick={Daftar}> Daftar</button>
            </div>
    )
}