import React, { useState, useEffect } from 'react';
import { NavLink, useHistory  } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
import Popup from "reactjs-popup";
import Login from '../pages/Login'
import { Button } from '../components/Button'

// for changing navbar  color

function Navbarlogin() {
    jquery(window).scroll(function () {
        jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
    })

    
const [click,setClick] = useState(false);
// // const [dropdown, setDropdown] = useState(false);
// // const [button, setButton] = useState(true);
const history = useHistory()

// const handleClick = () => setClick(!click);
// const closeMobileMenu = () => setClick(false);

// const onMouseEnter = () => {
//     if(window.innerWidth < 960) {
//         setDropdown(false);
//     }else{
//         setDropdown(true);
//     }
// };

// const onMouseLeave = () => {
//     if(window.innerWidth < 500) {
//         setDropdown(false);
//     }else{
//         setDropdown(false);
//     }
// };


// const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

// //   window.addEventListener('resize', showButton);

  const _onLogout = () => {
    localStorage.removeItem("token");
     history.replace("/");
     window.location.reload();
   };

// const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-2 fixed-top">
                <div className="container-fluid ">
                {/* <NavLink to='/' className='navbar-logo'>
                             <img src="logo3.png"></img></NavLink> */}
                    <span className="navbar-brand font-weight-bolder">Graha Office</span>
                    <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <FaAlignRight className="nav-icon" /></span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            
                            
    
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/rooms">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active_class" exact to="/Bantuan">Help</NavLink>
                            </li>
                            
                  
                            <li className='nav-item'>
                                {/* // onMouseEnter = {onMouseEnter}
                                // onMouseLeave = {onMouseLeave} */}

                           <NavLink className="nav-link" onClick={_onLogout}> Logout  </NavLink>
      
                             </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbarlogin;