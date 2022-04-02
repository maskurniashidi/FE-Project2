import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import FooterPage from './components/FooterPage';
import Login from './pages/Login'
import Bantuan from './components/Bantuan/Bantuan'
import Navbarlogin from './components/NavbarLogin'
import Order from './pages/Order'
import HomeAdmin from './pages/Admin/Home';

function App() {
  const[loginNav, setloginNav] = useState(true) 
   //let {isLoggedIn} = this.state;
 //   useEffect(() => {
 //   const isLogin = () => {
 //     if (localStorage.getItem("token")) {
 //       return true;
 //     }
 //     return false;
 //   };
 // },[])
 useEffect(() => {
 // const itLogin = () => {
   if (localStorage.getItem("token")) {
     console.log("berhasil")
     setloginNav(false);
   }
   else {
     console.log("gagal")
     setloginNav(true);
   }
 // };
 },[])
 
   return (
   
    <Router>
      
     {loginNav
       ? (<Navbar />)
       : (<Navbarlogin />)
     }


        {/* <Navbar/> */}
        <Switch>
          {/* /Ini Buat User/ */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/rooms/:id" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Bantuan" component={Bantuan} />
          <Route exact path="/Order" component={Order} />
          <Route component={Error}/>
          {/* {/Ini Buat Admin/} */}
          <Route exact path="/HomeAdmin/" component={HomeAdmin} />

        </Switch>
        <FooterPage/>
      </Router>

  );
}

export default App;