import React, { Component } from 'react';
import MyFace from "../../assets/face.png";
import { HashLink as Link } from "react-router-hash-link";

export default class Overview extends Component {
  render() {
    const header = {
      fontWeight: "700"
    };

    const icon_down = {
      fontSize: "35px",
      marginTop: "25%"
    };

    const overview_text = {
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "0 auto",
      transform: "translate(-50%,-50%)"
    };

    const my_face = {
      height: "290px"
    };

    return (
      <div style={overview_text}>
        <img style={my_face} src={MyFace} alt={"Eric Gonzalez"}/>
        <h1 className="display-4" style={header}>it's nice to meet you.</h1>
        <h2 className="display-5">software engineer</h2>
        <h2 className="display-5">graphic designer</h2>
          <Link smooth to={"#about_me"}>
              <span className="glyphicon glyphicon-chevron-down" style={icon_down}/>
          </Link>
      </div>
    )
  }
}
