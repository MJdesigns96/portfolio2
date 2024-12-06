import Link from "next/link"

export default function Project1 () {
    return(
        <div className="row">
            <div className="col mt-3">
                <div className="row mb-5">
                    <Link className="btn btn-primary" href="/projects">Back to List</Link>
                </div>
                <div className="row">
                    <h2>Hello World!</h2>
                </div>
            </div>
        </div>
    )
}