import React, { Component } from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/logo/logo.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home.js'
import Contacts from '../Pages/Contacts.js'
import Blog from '../Pages/Blog.js'
import About from '../Pages/About.js'


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky='top' collapseOnSelect expand='xl' bg='dark' variant='dark'>
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
                                <Nav.Link href='/'>Главная</Nav.Link>
                                <Nav.Link href='about'>О нас</Nav.Link>
                                <Nav.Link href='contacts'>Контакты</Nav.Link>
                                <Nav.Link href='blog'>Новости</Nav.Link>
                            </Nav>
                            <Form className='d-flex right'>
                                <FormControl
                                    type='text'
                                    placeholder='Найти...'
                                    className='me-2'
                                />
                                <Button variant='outline-info'>Поиск</Button>
                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}
