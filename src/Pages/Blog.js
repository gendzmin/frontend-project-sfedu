import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, Card } from 'react-bootstrap';
import exams from '../assets/blog/blogExams.png'
import forest from '../assets/blog/blogForest.png'
import shop from '../assets/blog/blogShop.png'
import elves from '../assets/blog/blogElves.png'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <div class="d-flex flex-column">
                            <div class="d-flex align-items-center mt-5">
                                <div class="flex-shrink-0">
                                    <img width={150} height={150} className='mr-3' src={exams} alt="..." />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>Актуальные результаты СОВ и ТРИТОН</h5>
                                    <p>
                                        В этом году студенты Хогвартса сдали экзамены с прекрасным результатом.
                                        Более 70% сдавших получили оцену "Хорошо" или выше, а 25% студентов получили оценку "Отлично".
                                        <br/>
                                        Это один из лучших показателей в истории Хогвартса!
                                        <br/>
                                        <a href='##'>Читать далее...</a>
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mt-5">
                                <div class="flex-shrink-0">
                                    <img width={150} height={150} className='mr-3' src={forest} alt="..." />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>Студенты, сбежавшие в Запретный лес, найдены</h5>
                                    <p>
                                        Двое студентов, на выходных отправившихся гулять по Запретному лесу, 
                                        найдены и возвращены в школу в целости и сохранности.
                                        Единственным последствием для них стал сильный испуг. 
                                        Сейчас они находятся на восстановлении в Больничном крыле.
                                        По предварительным данным, им повезло встретить кентавров, которые и вывели детей из леса.
                                        <br/>
                                        <a href='##'>Читать далее...</a>
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mt-5">
                                <div class="flex-shrink-0">
                                    <img width={150} height={150} className='mr-3' src={shop} alt="..." />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>В Хогсмиде открывается новый магазин</h5>
                                    <p>
                                        В деревне Хогсмид открывается магазин волшебных вещей и приколов под названием "Всевозможные волшебные вредилки".
                                        Магазин принадлежит близнецам Уизли - выпускникам Хогвартса.
                                        <br/>
                                        Основная специализация магазина — волшебные шутки и приколы.
                                        <br/>
                                        <a href='##'>Читать далее...</a>
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mt-5">
                                <div class="flex-shrink-0">
                                    <img width={150} height={150} className='mr-3' src={elves} alt="..." />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5>Новая забастовка эльфов Хогвартса</h5>
                                    <p>
                                    Гражданская Ассоциация Восстановления Независимости Эльфов организовала новую забастовку эльфов.
                                    Теперь работать отказались кухонные эльфы. 
                                    Они выстроились в колонну в Большом зале и требуют уважения со стороны волшебников и увеличения продолжительности перерывов.
                                    Администрация школы обещает в ближайшее время решить конфликт.
                                    <br/>
                                    <a href='##'>Читать далее...</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md='3'>
                        <h5 className='text-center mt-5'>Категории</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item className='list-group-item list-group-item-action'>
                                    <input class="form-check-input me-2" type="checkbox" defaultChecked='true' />
                                    Учёба
                                </ListGroup.Item>
                                <ListGroup.Item className='list-group-item list-group-item-action'>
                                    <input class="form-check-input me-2" type="checkbox" defaultChecked='true' />
                                    Мероприятия
                                </ListGroup.Item>
                                <ListGroup.Item className='list-group-item list-group-item-action'>
                                    <input class="form-check-input me-2" type="checkbox" defaultChecked='true' />
                                    События
                                </ListGroup.Item>
                                <ListGroup.Item className='list-group-item list-group-item-action'>
                                    <input class="form-check-input me-2" type="checkbox" defaultChecked='true' />
                                    Выпускники
                                </ListGroup.Item>
                                <ListGroup.Item className='list-group-item list-group-item-action'>
                                    <input class="form-check-input me-2" type="checkbox" defaultChecked='true' />
                                    Газета
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}