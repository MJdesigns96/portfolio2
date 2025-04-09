import Link from "next/link"
import Pill from "@/app/components/Pill";
import {Carousel, CarouselItem} from 'react-bootstrap';
//svg and images
import githubLogo from '../../../../public/github-mark.svg';
import next1 from '../../../../public/portfolio pics/nextjs1.png'
import next2 from '../../../../public/portfolio pics/nextjs2.png'
import next3 from '../../../../public/portfolio pics/nextjs3.png'
import next4 from '../../../../public/portfolio pics/nextjs4.png'

export default function Project2 () {
    const languages = [
        "NextJS",
        "MongoDB",
        "React",
        "Express"
    ]

    return(
        <div className="card mb-3 col-12 px-0" style={{"maxWidth": "60vw"}} data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-dark rounded-start">
                    <img src={next1.src} alt="NextJS Project Picture" className="img-fluid rounded-start d-block w-100 object-fit-cover" style={{"maxHeight": "45vh", "objectPosition":"center"}}/>
                    {/* <Carousel interval={null}>
                        <CarouselItem >
                            <img src={next1.src} className="img-fluid rounded-start d-block w-100 object-fit-fill " alt="Project Image 1" style={{"maxHeight": "45vh"}} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={next2.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 2" style={{"maxHeight": "45vh"}} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={next3.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 3" style={{"maxHeight": "45vh"}} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={next4.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 4" style={{"maxHeight": "45vh"}} />
                        </CarouselItem>
                    </Carousel> */}
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Storefront - NextJS Project</h3>
                        <div className="row mb-3 ms-3">
                            <small className="mb-2">Technologies:</small>
                            <Pill props = {languages} />
                        </div>
                        <p className="card-text">
                            This project was a final for a Full Stack development course. 
                            The project was to create an API endpoint that would retrieve data from a MongoDB collection and to use that data as props in a NextJS website. 
                        </p>
                        <p className="card-text">
                            The back end server was set up using Express and NextJS' internal server to connect to MongoDB. 
                            The client side was designed and organized through NextJS' routing and React.
                        </p>
                        <p className="card-text">
                            The project aimed to explore the features and limitations of NextJS as a framework and to become familiar with creating applications that involve an entire tech stack.
                        </p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://github.com/MJdesigns96/storefront-assignment/tree/main" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-2">
                                                        <img src={githubLogo.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center">
                                                        <h5 className="mb-0">Repository</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <p className="card-text mt-2">
                                <small className="text-body-secondary">Last updated: December 2024</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}