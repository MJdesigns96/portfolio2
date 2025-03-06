import Link from "next/link"
import Pill from "@/app/components/Pill";
import {Carousel, CarouselItem} from 'react-bootstrap';
// images and svgs
import githubLogo from '../../../public/github-mark.svg';
import journal from '../../../public/journal-richtext.svg';
import browser from '../../../public/browser-chrome.svg';
import pic1 from '../../../public/portfolio pics/cap1.png';
import pic2 from '../../../public/portfolio pics/cap2.png';
import pic3 from '../../../public/portfolio pics/cap3.png';
import pic4 from '../../../public/portfolio pics/cap4.png';
import pic5 from '../../../public/portfolio pics/cap5.png';

export default function Project1Card () {
    const languages = [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
    ]

    return(
        <div className="card mb-3 col-12 px-0" style={{"maxWidth": "60vw"}} data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center bg-dark rounded-start">
                    <Carousel interval={null}>
                        <CarouselItem >
                            <img src={pic1.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 1" style={{"maxHeight": "45vh", "objectPosition":"center"}} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={pic2.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 2" style={{"height": "45vh", "objectPosition":"center"}} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={pic3.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 3" style={{"maxHeight": "45vh", "objectPosition":"center"}} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={pic4.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 4" style={{"maxHeight": "45vh", "objectPosition":"center"}} />
                        </CarouselItem>
                        <CarouselItem>
                            <img src={pic5.src} className="img-fluid rounded-start d-block w-100 object-fit-cover" alt="Project Image 5" style={{"maxHeight": "45vh", "objectPosition":"center"}} />
                        </CarouselItem>
                    </Carousel>
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Capstone Project</h3>
                        <div className="row mb-3 ms-3">
                            <small className="mb-2">Technologies:</small>
                            <Pill props = {languages} />
                        </div>
                        <p className="card-text">
                            A cumulative 6 week project that is meant to showcase our skills gained throughout the year long Web Developement Course.
                        </p>
                        <p className="card-text">
                            For this project I made an ecommerce site using a MERN stack. 
                            The main user features are the ability for users to find products, add them to a cart, and checkout through the use of localStorage.
                            For administative features, I have CRUD functionality to add, update, and delete products as well as view the user and order lists.
                            The users are also able to register for accounts and login to see their past transactions. 
                        </p>
                        <p className="card-text">
                            All the individual products, accounts, and transactions are hosted on a MongoDB database and use an Express server and mongoose to retrive data and pass it to the React + Vite application.
                        </p>
                        <p className="card-text">
                            This is an ongoing work in progress so to see further details please view these github directories.
                        </p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://capstone-client-sand.vercel.app/" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-2">
                                                        <img src={browser.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center">
                                                        <h5 className="mb-0">Website</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href="https://github.com/MJdesigns96/W25-capstone-server" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-2">
                                                        <img src={githubLogo.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center">
                                                        <h5 className="mb-0">Github</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href="/projects/project1" passHref={true}>
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-2">
                                                        <img src={journal.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center">
                                                        <h5 className="mb-0">See More</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            
                            <p className="card-text mt-2">
                                <small className="text-body-secondary">Last updated: February 2025</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}