import Link from "next/link"
import styles from './styles.modules.css';

export default function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" href="/">Marcus Jeong</Link>
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li> */}
                        <li className="nav-item"><Link className="nav-link text-light" href="/about">About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" href="/contact">Contact</Link></li>
                    </ul>          
                </div>
            </nav>
        </header>
    )
}