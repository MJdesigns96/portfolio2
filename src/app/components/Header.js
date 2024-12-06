import Link from "next/link"

export default function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Marcus Jeong</Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/about">About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                    </ul>          
                </div>
            </nav>
        </header>
    )
}