import profile from '../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';
import food from '../../../public/IMG_2907.jpeg';
import running from '../../../public/IMG_2871-transformed.jpeg';
import {Carousel, CarouselItem} from 'react-bootstrap';

export default function AboutMe (props) {
    return (
        <div className="row mx-auto my-4 px-3">
            <div className="col-6">
                <div className="row">
                    <div className="col" data-aos="fade-right" >
                        <h1>Marcus Jeong</h1>
                        <p>Hi there my name is Marcus. I'm a web developer based out of Toronto Ontario, Canada.</p>
                        <p>Currently studying Web Developement at College and open to taking Internship and Work opportunities.</p>
                        <p>I've tried various different paths before settling on Web Development and I believe the reason I settled on this career path were beacuse of 2 qualities about myself:</p>
                        <p>My curisotiy to learn about things and my drive to constantly improve.</p>
                        <p>I've found that in this field you need to constantly keep learning, adapting, and growing your skills using the plethora of resources availble from very talented people online.</p>
                        <p>Over time I fell in love with improving my skills and being able to apply the things I've learned into products.</p>
                        <p>I believe these qualities also appear in my hobbies which include:</p>
                        <ul>
                            <li className='list-group-item'>Cooking 🍳</li>
                            <li className='list-group-item'>Exercise 🏋️</li>
                            <li className='list-group-item'>Most things nerdy 😁</li>
                        </ul>
                        <p>I find that being able to break down big problems or goals into smaller steps, slowly experiment, apply those things, and learn over time is found across all my hobbies as well as my code.</p>
                        <p>If there are any questions about Coding or any of my hobbies please feel free to reach out.</p>
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex align-items-middle justify-content-center" data-aos="fade-left">
                <Carousel interval={null}>
                    <CarouselItem >
                        <img className="d-block w-100 rounded object-fit-fill" style={{height: "75vh"}} src={profile.src} alt="Profile Picture" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100 rounded object-fit-fill" style={{height: "75vh"}} src={food.src} alt="food" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100 rounded object-fit-fill" style={{height: "75vh"}} src={running.src} alt="Running" />
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    );
}