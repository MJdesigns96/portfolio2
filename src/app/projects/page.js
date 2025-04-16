import Link from "next/link"
import Languages from "../components/Languages"
import styles from './styles.modules.css';

import Project1Card from "../components/project1-card";
import Project2 from "./project2/page";
import Project3 from "./project3/page";
import Project4 from "./project4/page";

export default function Projects() {
    return(
        <>
            <div className="container py-5">
                <div className="row">
                    <h1>Projects:</h1>
                </div>
                <div className="row my-3">
                    <h2>Languages:</h2>
                    <Languages />
                </div>
                <div className="row mt-5">
                    <Project1Card />
                </div>
                <div className="row">
                    <Project2 />
                </div>
                <div className="row">
                    <Project3 />
                </div>
                <div className="row">
                    <Project4 />
                </div>
            </div>
        </>        
    )
}