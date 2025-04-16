import {React} from "react";
import styles from './styles.modules.css';

export default function Languages() {
    // an object that holds all the languages
    const tech = {
        frontEnd: [
            "JS",
            "CSS",
            "HTML",
            "React",
            "Next.js",
            "Redux",
            "Typescript",
        ],
        backEnd: [
            "C#",
            "PHP",
            "EF Core",
            "ASP.Net",
            "Laravel",
        ],
        database: [
            "SQL",
            "MongoDB",
        ],
        design: "UX/UI Design",
    };

    return (
        <div className="row">
            <div className="col">
                <div className="row mx-auto">
                    <div className="col">
                        <img className="lang" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Next.Js" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://www.svgrepo.com/show/303557/redux-logo.svg" alt="Redux" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://www.svgrepo.com/show/354478/typescript-icon.svg" alt="Typescript" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="C#" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://www.svgrepo.com/show/452088/php.svg" alt="PHP" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://www.svgrepo.com/show/353985/laravel.svg" alt="Laravel" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg" alt="SQL" />
                    </div>
                    <div className="col">
                        <img className="lang" src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="Mongodb" />
                    </div>
                </div>
            </div>
        </div>
    )
}