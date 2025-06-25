import profile from '../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';
import food from '../../../public/IMG_2907.jpeg';
import running from '../../../public/IMG_2871-transformed.jpeg';
import {Carousel, CarouselItem} from 'react-bootstrap';

export default function AboutMe (props) {
    return (
        <>
            <div className="row mx-auto my-4 px-3">
            <div className="col">
                <div className="row">
                    <div className="col" data-aos="fade-right" >
                        <h1 className='mb-4'>👋 About Me</h1>
                        <div className='row d-flex d-lg-none align-items-middle justify-content-center mb-3'>
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
                        <p>Hi, I’m Marcus — a Full Stack Web Developer based in Toronto, Canada.</p>
                        <p>Before diving into tech, I explored different paths, starting with studies in Philosophy and Psychology, where I developed a deep interest in how people think and make decisions. That curiosity led me to UX/UI Design, where I focused on user research and learned how thoughtful design can shape digital experiences.</p>
                        <p>While studying UX/UI, I discovered coding — and immediately fell in love with the process of building websites and applications from the ground up.</p>
                        <p>What draws me to Web Development is its perfect blend of continuous learning and problem-solving. I enjoy researching, experimenting, and improving — whether I’m debugging an app, learning a new framework, or exploring a design pattern.</p>
                        <p>Outside of coding, I’m passionate about:</p>
                        <ul>
                            <li>Cooking 🍳</li>
                            <li>Staying active 🏋️</li>
                            <li>All things nerdy 😁</li>
                        </ul>
                        <p>If you're curious about my work, love talking code, or just want to trade recipes or favorite games, feel free to reach out!</p>
                    </div>
                </div>
            </div>
            <div className="col d-none d-lg-flex align-items-middle justify-content-center" data-aos="fade-left">
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
        
        </>
        
    );
}