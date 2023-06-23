import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '600px'}}>
                <br />
                <h1 className='text-center'>Свяжитесь с нами</h1>
                <br />
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Адрес электронной почты</Form.Label>
                        <Form.Control type='email' placeholder='Введите адрес' />
                    </Form.Group>
                    <br />
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Ваш вопрос</Form.Label>
                        <Form.Control as='textarea' rows='8' placeholder='Введите текст' />
                    </Form.Group>
                    <br />
                    <Form.Group controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label='Подписаться на новостную рассылку Хогвартса'/>
                    </Form.Group>
                    <br />
                    <Button variant='primary' type='submit'>Отправить</Button>
                </Form>
            </Container>
        )
    }
}