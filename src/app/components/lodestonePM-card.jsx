import Link from "next/link"
import Pill from "@/app/components/Pill";
// images and svgs
import githubLogo from '../../../public/github-mark.svg';
import journal from '../../../public/journal-richtext.svg';
import pic1 from '../../../public/lodestone-logo.jpg';
import globe from '../../../public/browser-chrome.svg';

export default function LodestonePMCard ({ langs = [] }) {
    const Projectlangs = [
        "TS",
        "React",
        "Remix",
        "Prisma",
        "Postgresql",
    ];

    return(
        <div className="card mb-3 col-12 px-0 vw-75 border border-dark" data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center bg-dark rounded-start">
                    <img src={pic1.src} alt="LodestonePM logo" className="img-fluid rounded-start d-block w-100 object-fit-cover" style={{"maxHeight": "45vh", "objectPosition":"center"}}/>
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Lodestone PM - Internship</h3>
                        <div className="row mb-3 ms-3 d-none d-lg-flex">
                            <Pill projectLangs = {Projectlangs} langs = {langs} />
                        </div>
                        <p className="card-text">
                            As a Web Development Intern at Lodestone PM, contributed to a full-stack web app using TypeScript, React, Remix, and Prisma. Implemented multi-row table editing CRUD features, improved UI usability, and integrated AI-powered tools in a collaborative Agile environment.
                        </p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://lodestone.pm/" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center bg-light">
                                                    <div className="col-2">
                                                        <img src={globe.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center text-dark">
                                                        <h5 className="mb-0">Lodestone</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href="/projects/lodestone" passHref={true}>
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