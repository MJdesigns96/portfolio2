import Link from "next/link";

export default function Footer() {
    return(
        <footer data-aos="fade-in">
            <div className="row mb-3 d-flex justify-content-center">
                <div className="col-6 text-center">
                    <h2>Marcus Jeong</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <p>Making things beautiful and functional.</p>
                </div>
            </div>
            <hr className="divider"></hr>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" href="/about">About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row text-center mt-5">
                <p>CopyRight: &copy; 2025 Marcus Jeong Canada. All Rights Reserved.</p>
            </div>
        </footer>
    )
}