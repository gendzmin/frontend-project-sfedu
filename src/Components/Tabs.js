import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, ListGroup } from 'react-bootstrap';
import school from '../assets/tabs/tabsSchool.png';
import education from '../assets/tabs/tabsEducation.png';
import lifestyle from '../assets/tabs/tabsLifestyle.png';
import exams from '../assets/tabs/tabsExams.png';
import abroad from '../assets/tabs/tabsAbroad.png';

export default class Tabs extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='school'>О школе</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='education'>Обучение</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='lifestyle'>Студенческая жизнь</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='exams'>Экзамены</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='exchange'>Программы обмена</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='school'>
                                    <img src={school} className='w-100' alt='school' />
                                    <p className="lh-lg">
                                        <h5 className="lh-lg">О школе</h5>
                                        Школа Чародейства и Волшебства Хогвартс — учебное заведение для волшебников.
                                        <br />
                                        В Хогвартс принимаются дети, достигшие 11 лет и обладающие магическими способностями.
                                        Если ребенку уже исполнилось 11 лет или исполнится до 1 сентября, то в июле, перед началом учебного года, ему приходит письмо о зачислении в Хогвартс со списком необходимых к покупке предметов.
                                        <br />
                                        Обучение длится 7 лет. В конце каждого года сдаются экзамены, но особенно важны для будущего учеников экзамены в конце 5 и 7 курса (СОВ и ТРИТОН).
                                        <br />
                                        В школе обучаются 285 детей. Предусмотрена возможность обучения на дому.
                                        <br />
                                        Обучение в школе бесплатное, книги и школьный инвентарь учащиеся покупают сами. 
                                        В Хогвартсе существует специальный фонд для покупки учебников и школьного инвентаря малоимущим ученикам.
                                        <br />
                                        Школа находится в старинном восьмиэтажном замке времён Средневековья.
                                        На территории школы, кроме замка, есть горное озеро, большой лес и поле для игры в квиддич. Замок окружён горами.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='education'>
                                    <img src={education} className='w-100' alt='education' />
                                    <p className="lh-lg">
                                        <h5 className="lh-lg">Учебная программа</h5>
                                        Все предметы, изучаемые в школе, так или иначе связаны с магией.
                                        За исключением астрономии, ни один предмет не преподаётся в обычных школах.
                                        <br />
                                        В учебную программу входят 8 обязательных предметов:
                                        <ListGroup as="ol" numbered>
                                            <ListGroup.Item as="li" action variant="dark">Зельеварение</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="secondary">История магии</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="dark">Заклинания</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="secondary">Астрономия</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="dark">Травология</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="secondary">Защита от тёмных искусств</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="dark">Полёты на мётлах</ListGroup.Item>
                                        </ListGroup>
                                        Все эти предметы обязательны с 1 по 5 курс.
                                        <br />
                                        Начиная с 3 курса, ученикам, наряду с обязательными, предлагаются факультативные предметы:
                                        <ListGroup as="ol" numbered>
                                            <ListGroup.Item as="li" action variant="dark">Прорицания</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="secondary">Уход за магическими существами</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="dark">Изучение древних рун</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="secondary">Магловедение</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="dark">Нумерология</ListGroup.Item>
                                        </ListGroup>
                                        Обучение на двух последних курсах не является обязательным.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='lifestyle'>
                                    <img src={lifestyle} className='w-100' alt='lifestyle' />
                                    <p className="lh-lg">
                                        <h5 className="lh-lg">В школе</h5>
                                        Кроме обучения, у студентов есть большой выбор времяпровождения.
                                        В школе существует множество кружков по интересам: Клуб зельеварения, Клуб игроков в плюй-камни, Клуб музыки, Кружок заклинаний.
                                        <br />
                                        По случаю знаменательных событий в Хогвартсе устраиваются праздничные пиры.
                                        Традиционными являются пир в честь начала нового учебного года с церемонией распределения и пир в честь окончания учебного года, на котором объявляют лучший факультет года.
                                        Также пиры устраивают в честь всеобщих празднеств: Пасха, Рождество, Хэллоуин.
                                        Во время проведения Турнира трёх волшебников в школе проводят Святочный бал.
                                        <br />
                                        <h5 className="lh-lg">Хогсмид</h5>
                                        Ближайшим населённым пунктом является маленькая деревушка Хогсмид — единственная деревушка в стране, не населенная маглами.
                                        Там же находится и ближайшая к Хогвартсу железнодорожная станция.
                                        <br />
                                        На центральной Верхней улице Хогсмида находятся кондитерская «Сладкое королевство»,
                                        несколько магазинов смешных сувениров, магазин письменных принадлежностей «Писарро»,
                                        совиная почта и несколько пивных баров, наиболее популярный из которых — «Три метлы».
                                        <br />
                                        Любой ученик Хогвартса, начиная с 3 курса, получает право посещать Хогсмид на выходных, если родители или опекун предоставят школьной администрации письменное разрешение. 
                                        За плохое поведение ученика этого права могут лишить декан факультета или иной представитель школьного руководства.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='exams'>
                                    <img src={exams} className='w-100' alt='exams' />
                                    <p className="lh-lg">
                                        <h5 className="lh-lg">Экзамены</h5>
                                        Личная успеваемость студента отслеживается только с помощью экзаменов, которые студенты сдают в конце каждого года.
                                        Самые ответственные из них — СОВ и ТРИТОН.
                                        <br />
                                        В конце 5 курса по всем изучаемым предметам устраивается экзамен, называемый СОВ — Стандарты Обучения Волшебству.
                                        Максимально можно набрать 12 баллов. Экзамен принимают профессора и члены Волшебной экзаменационной комиссии.
                                        <br />
                                        После 7 курса ученики сдают экзамены ТРИТОН — Типично Решаемый Изнуряющий Тест.
                                        После сдачи ТРИТОН выпускники устраиваются на работу.
                                        <br />
                                        Для многих профессий или должностей в требования к кандидатам входит уровень оценки, полученной по определённым предметам на экзаменах СОВ и ТРИТОН.
                                        Также для работы мракоборцем или занятию иной специфической деятельностью необходимо пройти специальное обучение и сдать дополнительные тесты и экзамены.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='exchange'>
                                    <img src={abroad} className='w-100' alt='exchange' />
                                    <p className="lh-lg">
                                        <h5 className="lh-lg">Школы магии в мире</h5>
                                        Всего в мире существует одиннадцать древних и престижных школ магии, каждая из которых зарегистрирована в Международной конфедерации магов.
                                        Преимущественно, они представляют собой школы-интернаты, в которых студенты разных возрастов и национальностей получают образование и живут на протяжении нескольких лет.
                                        Существование школ в разных странах обусловлено территориальными, языковыми и социальными различиями.
                                        <br />
                                        <h5 className="lh-lg">Программы обмена Хогвартса</h5>
                                        В Хогвартсе существуют программы обмена с 7 школами магии:
                                        <ListGroup as="ol" numbered>
                                            <ListGroup.Item as="li" action variant="dark">Академия магии Шармбатон (Франция)</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="secondary">Институт Дурмстранг (Норвегия)</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="dark">Колдовстворец (Россия)</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="secondary">Школа магии Махотокоро (Япония)</ListGroup.Item>
                                            <ListGroup.Item as="li" action variant="dark">Школа Чародейства и Волшебства Ильверморни (США)</ListGroup.Item>
                                        </ListGroup>
                                        В целях укрепления международного сотрудничества в Хогвартсе существует международная программа друзей по переписке для учеников Хогвартса и вышеперечисленных школ.
                                        <br />
                                        Программы обмена доступны с 3 курса и полностью финансируются за счёт школы.
                                        Студенты, уезжающие в другую школу по программе обмена, весь учебный год должны будут провести в принимающей стране, проживая в школе или в семье волшебников.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}