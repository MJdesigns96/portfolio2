import Link from "next/link"
import Languages from "../components/Languages"
import styles from './styles.modules.css';

import Project1Card from "../components/project1-card";
import Project2Card from "../components/project2-card";
import Project2 from "./project2/page";
import Project3 from "./project3/page";
import Project4 from "./project4/page";

export default function Projects() {
    const languages = {
        JS: {
            id: 1,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
        },
        React: {
            id: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        },
        TS: {
            id: 3,
            url: "https://www.svgrepo.com/show/354478/typescript-icon.svg"
        },
        Next: {
            id: 4,
            url: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B"
        },
        Redux: {
            id: 5,
            url: "https://www.svgrepo.com/show/303557/redux-logo.svg"
        },
        CSharp: {
            id: 6,
            url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg"
        },
        net: {
            id: 7,
            url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
        },
        PHP: {
            id: 8,
            url: "https://www.svgrepo.com/show/452088/php.svg"
        },
        SQL: {
            id: 9,
            url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg"
        },
        MongoDB: {
            id: 10,
            url: "https://www.svgrepo.com/show/331488/mongodb.svg"
        },
        Express: {
            id: 11,
            url: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
        },
        Node: {
            id: 12,
            url: "https://www.svgrepo.com/show/376337/node-js.svg"
        },
        Remix: {
            id: 13,
            url: "https://remix.run/_brand/remix-letter-glowing.png"
        },
        Prisma: {
            id: 14,
            url: "https://cdn.worldvectorlogo.com/logos/prisma-4.svg"
        },
        Postgresql: {
            id: 15,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
        },
    };

    return(
        <>
            <div className="container py-5">
                <div className="row">
                    <h1>Projects:</h1>
                </div>
                <div className="row my-3">
                    <h2>Languages:</h2>
                    <Languages langs={languages} />
                </div>
                <div className="row mt-5">
                    <Project1Card langs={languages} />
                </div>
                <div className="row">
                    <Project2Card langs={languages} />
                </div>
                <div className="row">
                    <Project3 langs={languages} />
                </div>
            </div>
        </>        
    )
}