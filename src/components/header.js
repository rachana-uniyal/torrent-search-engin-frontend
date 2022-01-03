import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container  from "react-bootstrap/Container";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";


const Wrapper = styled(Container)`
    padding-left:25px;
    paddig-right: 25px;
    display: flex;
`;

const Navl = styled(Nav)`
    margin-left: auto
    `;

const Header = () =>{
    return(
        <Navbar bg="dark" variant="dark" fixed="top" style={{marginBottom:"10px", display:"block"}}>
            <Wrapper>
               <Navbar.Brand href="/">TorrentClick</Navbar.Brand> 
               <Navl>
                   <Nav.Link href="/about">About</Nav.Link>
               </Navl>
               <Navl>
                   <Nav.Link href="/feedback">Feedback</Nav.Link>
               </Navl>
               <Navl>
                   <Nav.Link href="/">Github</Nav.Link>
               </Navl>
            </Wrapper>
        </Navbar>

    )
}

export default Header;