import React from 'react';
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
//import Chart from "./variables/charts";
// react plugin used to create charts
//import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar.js"
// import Header from "../../components/Header.js";


function Home (props) {
  const [activeNav, setActiveNav] = useState(1);

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    //setChartExample1Data("data" + index);
  };
  return (
    <>
      <Sidebar/>
    </>
  );
};

export default Home;