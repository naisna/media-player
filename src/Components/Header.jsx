import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div><Navbar className="" style={{backgroundColor:	'#9C2542'}}>
    <Container>
      <Navbar.Brand href="#home" style={{color:'white'}}>
       <Link to={'/'} style={{color:'white',textDecoration:'none'}}> <i class="fa-solid fa-photo-film me-2" ></i>
         Media-Player-App </Link>
   

      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header