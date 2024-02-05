import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogut } from '../redux-toolkit/userAuth';
import cookie from 'js-cookie'
import { Button } from 'react-bootstrap';

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

    const handleLogut = () => {
        dispatch(userLogut())
        cookie.remove("token")
        navigate("/login")
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className=''>
                    <Nav className="my-2 my-lg-0" style={{ marginLeft: "auto" }}>
                        {isAuthenticated ? (
                            <>
                                <Button className='bg-danger' onClick={handleLogut}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                                <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
