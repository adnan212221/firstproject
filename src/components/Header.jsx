import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import { HashLink } from 'react-router-hash-link'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
    <nav>
      <h1>ItBuddy</h1>
      <main>
        <HashLink to={'/#home'}>Home</HashLink>
        <Link to={'/contact'}>Contact</Link>
        <HashLink to={'/#about'}>About</HashLink>
        <HashLink to={'/#brands'}>Brands</HashLink>
        <Link to={'/services'}>services</Link>

      </main>
    </nav>



    </>
  )
}

export default Header