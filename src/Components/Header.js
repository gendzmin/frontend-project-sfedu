import React, { Component } from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import logo from './logo.png'


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='50'
                                width='50'
                                className='d-inline-block align-top'
                                alt='logo'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navber-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='about'>About is</Nav.Link>
                                <Nav.Link href='contacts'>Contacts</Nav.Link>
                                <Nav.Link href='blog'>Blog</Nav.Link>
                            </Nav>
                            <Form className='d-flex right'>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='me-2'
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}