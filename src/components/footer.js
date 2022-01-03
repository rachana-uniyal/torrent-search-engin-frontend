import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";



const Footer = () =>{
    return(
        <footer style={{
            width: "100%",
            height: "56px",
            backgroundColor: "black",
            display: "flex",
            align:"center",
            position:"fixed",
            bottom: "0px"
        }}>
            <Container>
                <span>
                    <strong style={{color: "white"}}>&copy; TorrentClick</strong>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/about">About</Link>
                </span>
            </Container>
        </footer>
    )
}

export default Footer;