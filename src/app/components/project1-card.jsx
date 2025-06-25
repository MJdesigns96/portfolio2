import Link from "next/link"
import Pill from "@/app/components/Pill";
// images and svgs
import githubLogo from '../../../public/github-mark.svg';
import journal from '../../../public/journal-richtext.svg';
import browser from '../../../public/browser-chrome.svg';
import pic1 from '../../../public/capstone-1.png';

export default function Project1Card ({ langs = [] }) {
    const Projectlangs = [
        "MongoDB",
        "Express",
        "React",
        "Node",
    ];

    return(
        <div className="card mb-3 col-12 px-0 vw-75" data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center bg-dark rounded-start">
                    <img src={pic1.src} alt="Capstone Project Picture" className="img-fluid rounded-start d-block w-100 object-fit-cover" style={{"maxHeight": "45vh", "objectPosition":"center"}}/>
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Capstone E-Commerce Shoe Store</h3>
                        <div className="row mb-3 ms-3 d-none d-lg-flex">
                            <Pill projectLangs = {Projectlangs} langs = {langs} />
                        </div>
                        <p className="card-text">
                            A full-stack MERN e-commerce app built in 6 weeks, featuring customer checkout, admin product management, and a fully modeled database. Built from scratch to showcase end-to-end development skills with real-world challenges like object serialization, image optimization, and CRUD design.
                        </p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://github.com/MJdesigns96/W25-capstone-server" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center bg-light">
                                                    <div className="col-2">
                                                        <img src={githubLogo.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center text-dark">
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
                                                <div className="row align-items-center bg-light">
                                                    <div className="col-2">
                                                        <img src={journal.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center text-dark">
                                                        <h5 className="mb-0">Case Study</h5>
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