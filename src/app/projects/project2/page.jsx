import Link from "next/link"
import temp from '../../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';
import Pill from "@/app/components/Pill";
import githubLogo from '../../../../public/github-mark.svg';

export default function Project2 () {
    const languages = [
        "NextJS",
        "MongoDB",
        "React",
        "Express"
    ]

    return(
        <div className="card mb-3 col-12 px-0" style={{"maxWidth": "60vw"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={temp.src} className="img-fluid rounded-start" alt="Project Image" style={{"maxHeight": "60vh"}} />
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
                        </div>
                        <p className="card-text mt-2">
                            <small className="text-body-secondary">Last updated: December 2024</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}