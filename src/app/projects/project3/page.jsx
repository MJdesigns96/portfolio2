import Link from "next/link"
import Pill from "@/app/components/Pill";
import {Carousel, CarouselItem} from 'react-bootstrap';
//svg and images
import githubLogo from '../../../../public/github-mark.svg';
import pic1 from '../../../../public/portfolio pics/asp1.png'
import pic2 from '../../../../public/portfolio pics/asp2.png'
import pic3 from '../../../../public/portfolio pics/asp3.png'
import pic4 from '../../../../public/portfolio pics/asp4.png'

export default function Project3 ({ langs = [] }) {
    const Projectlangs = [
        "net",
        "CSharp",
        "SQL",
        "JS"
    ]

    return(
        <div className="card mb-3 col-12 px-0 vw-75" data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-dark rounded-start">
                    <img src={pic1.src} className="img-fluid rounded-start d-block w-100" alt="Project Image 1" style={{"maxHeight": "45vh"}} />
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Album + Card database - EF+.NET Group Project</h3>
                        <div className="row mb-3 ms-3 d-none d-lg-flex">
                            <Pill projectLangs = {Projectlangs} langs = {langs} />
                        </div>
                        <p className="card-text">
                            This project was a cumulative project for a Back End Development course. 
                            The project aim was for each student to create a EF application and then merge their project with another student's and work on problems that arise as the two of them are integrated. 
                        </p>
                        <p className="card-text">
                            Following the MVC framework, the project aimed to use Models, Interfaces, and Services to create integrated SQL databases.
                        </p>
                        <p className="card-text">
                            With those databases Controllers were created to retreive and implement CRUD functionality for the application.
                        </p>
                        <p className="cart-text">
                            Following the controllers, Views were created to show the users the data and interact with them through a custom UI.
                        </p>
                        <p className="card-text">
                            For our project me and my team member joined a Trading Card database with a Music Database while exploring the features and limitations of Visual Studio 2022.
                        </p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://github.com/MJdesigns96/PassionProject-Group" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center bg-light">
                                                    <div className="col-2">
                                                        <img src={githubLogo.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center text-dark">
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