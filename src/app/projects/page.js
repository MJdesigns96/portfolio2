import Link from "next/link"
import Languages from "../components/Languages"

export default function Projects() {
    return(
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h1>Projects</h1>
                        <p>Thank you for taking an interest in my Prjects.</p>
                        <p>Listed below are some of my recent work, the languages i've used, and some images.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-12">
                        <div className="row mb-3">
                            <h2>Technologies:</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                            <Languages />
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Project Heading</h3>
                            <p className="card-test">Descriptive text about the project and its details</p>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col-5">
                                    <Link className="btn btn-primary" href="/projects/project1">See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}