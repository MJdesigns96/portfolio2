import Link from "next/link"
import Languages from "../components/Languages"
import styles from './styles.modules.css';

export default function Projects() {
    return(
        <>
            <div className="container py-5">
                <div className="row">
                    <h1>Projects</h1>
                </div>
                <div className="row my-3">
                    <h2>Technologies:</h2>
                    <Languages />
                </div>
            </div>
        </>        
    )
}