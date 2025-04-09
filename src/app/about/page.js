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
                        <p>Hi there, my name is Marcus. I'm a Full Stack web developer based out of Toronto Ontario, Canada.</p>
                        <p>I've tried various different paths before settling on Web Development.</p>
                        <p>In school I had studied Philosophy and Psychology because I was interested in the workings of the Human Mind. How and why we make decisions and how we think about those descisions.</p>
                        <p>From this study I had tried various paths before settling on the tech industry. Originally, I had studied UX/UI Design with a focus on UX research. I was fascinated by how people interacted with online media and how design decisions could greatly influence how users would move through a digital product.</p>
                        <p>While studying UX/UI, I had started to code and had fallen in love with developing websites and applications.</p>
                        <p>I fell in love with Web Development because it allows me to pursue 2 goals that I find across all of my hobbies and my professional goals: </p>
                        <p>Allowing me to constantly imrpove and to let me research about topics to find solutions.</p>
                        <p>I love to get better over time and have fallen in love with the continuous growth that this field allows me to do. I am always learning, testing new things, and becoming a better developer over time.</p>
                        <p>Every time I run into a problem I am able to search online and research on a solution.</p>
                        <p>These two things are important to me because I find comfort in being able to be adaptable and learn. I love improving step by step as well as researching on my own on new ways to imrpove.</p>

                        <p>I believe these qualities also appear in my hobbies some of which include:</p>
                        <ul>
                            <li className='list-group-item'>Cooking 🍳</li>
                            <li className='list-group-item'>Exercise 🏋️</li>
                            <li className='list-group-item'>Most things nerdy 😁</li>
                        </ul>
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