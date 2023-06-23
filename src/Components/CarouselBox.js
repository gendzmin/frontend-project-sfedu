import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import exteriorNorth from '../assets/slider/sliderExteriorNorth.png';
import exteriorSouth from '../assets/slider/sliderExteriorSouth.png';
import exteriorBridge from '../assets/slider/sliderExteriorBridge.png';
import interiorEntrance from '../assets/slider/sliderInteriorEntrance.png';
import interiorHall from '../assets/slider/sliderInteriorHall.png';
import interiorLadder from '../assets/slider/sliderInteriorLadder.png';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ exteriorNorth }
                        alt='North side of the castle'
                    />
                    <Carousel.Caption>
                        <h2>Северная сторона замка</h2>
                        <p>Хогвартс | Экстерьер</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ exteriorSouth }
                        alt='South side of the castle'
                    />
                    <Carousel.Caption>
                        <h3>Южная сторона замка</h3>
                        <p>Хогвартс | Экстерьер</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ exteriorBridge }
                        alt='Stone bridge'
                    />
                    <Carousel.Caption>
                        <h3>Каменный мост</h3>
                        <p>Хогвартс | Экстерьер</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ interiorEntrance }
                        alt='Main entrance'
                    />
                    <Carousel.Caption>
                        <h3>Парадный вход</h3>
                        <p>Хогвартс | Интерьер</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ interiorHall }
                        alt='Great Hall'
                    />
                    <Carousel.Caption>
                        <h3>Большой зал</h3>
                        <p>Хогвартс | Интерьер</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ interiorLadder }
                        alt='Ladder'
                    />
                    <Carousel.Caption>
                        <h3>Мраморная лестница</h3>
                        <p>Хогвартс | Интерьер</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}