import Link from "next/link";

export default function Footer() {
    return(
        <footer>
            <div className="row mb-3">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <h2>Marcus Jeong</h2>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <p>Making beautiful and functional.</p>
                </div>
            </div>
            <hr className="divider"></hr>
            <div className="row container-fluid">
                <div className="col-5"></div>
                <div className="col">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/about">About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-5"></div>
            </div>
        </footer>
    )
}