import Link from "next/link"
import temp from '../../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';
import Pill from "@/app/components/Pill";
import githubLogo from '../../../../public/github-mark.svg';

export default function Project1 () {
    const languages = [
        "MERN",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
    ]

    return(
        <div className="card mb-3 col-12 px-0" style={{"maxWidth": "60vw"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={temp.src} className="img-fluid rounded-start" alt="Project Image" style={{"maxHeight": "60vh"}} />
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Capstone Project</h3>
                        <div className="row mb-3 ms-3">
                            <small className="mb-2">Technologies:</small>
                            <Pill props = {languages} />
                        </div>
                        <p className="card-text">
                            A cumulative 7 week project that is meant to showcase our skills gained throughout the course.
                            For this project I made an ecommerce site using a MERN stack. The main features are the ability for users to find products, add them to a cart, and checkout through the use of localstorage.
                            For administative features, I have CRUD functionality to add, update, and delete products as well as view the user and order lists.
                            The users are also able to register for accounts and login to see their past transactions.
                            This is an ongoing work in progress so to see further details please view the github directories.
                        </p>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://github.com/MJdesigns96/W25-Capstone-client" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-2">
                                                        <img src={githubLogo.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center">
                                                        <h5 className="mb-0">Client Side</h5>
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
                                                        <h5 className="mb-0">Server Side</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <p className="card-text mt-2">
                            <small className="text-body-secondary">Last updated: February 2025</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}