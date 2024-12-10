import profile from '../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';
import food from '../../../public/IMG_2907.jpeg';
import running from '../../../public/IMG_2871-transformed.jpeg';
import {Carousel, CarouselItem} from 'react-bootstrap';

export default function AboutMe (props) {
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <h1>Marcus Jeong</h1>
                </div>
                <div className="row">
                    <p>Hi there my name is Marcus. I'm a web developer based out of Toronto Ontario, Canada.</p>
                </div>
                <div className="row">
                    <p>Currently studying Web Developement at College and open to taking Work Internship opportunities.</p>
                </div>
                <div className="row">
                    <p>My hobbies include:</p>
                </div>
                <div className="row">
                    <ul>
                        <li className='list-group-item'>Cooking 🍳</li>
                        <li className='list-group-item'>Exercise 🏋️</li>
                        <li className='list-group-item'>Most things nerdy 😁</li>
                    </ul>
                </div>
                <div className="row">
                    <p>One thing that I focus on is constantly imrpoving. I apply this way of thinking into all aspects of my life from my hobbies to coding. The thing that drew me most to coding is the constant little steps that you set out to do and complete. You realize that a big complex app is a summation of hundreds to thousands of small micro steps that make a big functional app at the end.</p>
                </div>
            </div>
            <div className="col">
                <Carousel>
                    <CarouselItem >
                        <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={profile.src} alt="Profile Picture" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={food.src} alt="food" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100 object-fit-cover" style={{height: "75vh"}} src={running.src} alt="Running" />
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    );
}