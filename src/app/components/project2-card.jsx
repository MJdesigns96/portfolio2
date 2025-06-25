import Link from "next/link"
import Pill from "@/app/components/Pill";
// images and svgs
import githubLogo from '../../../public/github-mark.svg';
import journal from '../../../public/journal-richtext.svg';
import next1 from '../../../public/portfolio pics/nextjs1.png'

export default function Project2Card ({ langs = [] }) {
    const Projectlangs = [
        "Next",
        "MongoDB",
        "React"
    ];

    return(
        <div className="card mb-3 col-12 px-0 vw-75" data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center bg-dark rounded-start">
                    <img src={next1.src} alt="NextJS Project Picture" className="img-fluid rounded-start d-block w-100 object-fit-cover" style={{"maxHeight": "45vh", "objectPosition":"center"}}/>
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Water Bottle Storefront - NextJS Project</h3>
                        <div className="row mb-3 ms-3 d-none d-lg-flex">
                            <Pill projectLangs = {Projectlangs} langs = {langs} />
                        </div>
                        <p className="card-text">
                            A full-stack Next.js project built to explore API development and server-side rendering. Product data is fetched from MongoDB and displayed using dynamic routes and React components. Designed to demonstrate end-to-end integration using Express and Next.js. 
                        </p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://github.com/MJdesigns96/storefront-assignment/tree/main" passHref={true} target="_blank">
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
                                    <Link href="/projects/project2" passHref={true}>
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
                                <small className="text-body-secondary">Last updated: December 2024</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}