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

    // a fxn that loops through and creates elements that shows the text
    const randomDivs = (arr) => {
        let arrayToBeShuffled = arr;
        const shuffle = (array) => {
            let currentIndex = array.length;
            while (currentIndex != 0) {
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex] , array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            };
        };
        shuffle(arrayToBeShuffled);
        return arrayToBeShuffled;
    }

    let FED = randomDivs(tech.frontEnd);
    let BED = randomDivs(tech.backEnd);
    let DB = randomDivs(tech.database);

    const renderFED = FED.map(entry => 
        <div className="language col-3 text-center pill mr-2 mb-2" key={FED.indexOf(entry)}>
            <div className="row">
                <div className="col-2 mt-3">
                    <div className="ball" style={{backgroundColor: "#ffe6fd"}}></div>
                </div>
                <div className="col mt-3">
                    <p className="">{entry}</p>
                </div>
            </div>
        </div>
    )
    const renderBED = BED.map(entry => 
        <div className="language col-3 text-center pill mr-1 mb-1" key={BED.indexOf(entry)}>
            <div className="row">
                <div className="col-2 mt-3">
                    <div className="ball" style={{backgroundColor: "rgb(228, 241, 255)"}}></div>
                </div>
                <div className="col mt-3">
                    <p className="">{entry}</p>
                </div>
            </div>
        </div>
    )
    const renderDB = DB.map(entry => 
        <div className="language col-3 text-center pill" key={DB.indexOf(entry)}>
            <div className="row">
                <div className="col-2 mt-3">
                    <div className="ball" style={{backgroundColor: "rgb(253, 242, 211)"}}></div>
                </div>
                <div className="col mt-3">
                    <p className="">{entry}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div> 
            <div id="languageSection" className="row languages">
                <div className="col">
                    <div className="FED row">
                        <div className="col">
                            <h3 className="mb-3">Front End</h3>
                            <div className="row pill-container">
                                {renderFED}
                            </div>
                        </div>
                    </div>
                    
                    <div className="BED row">
                        <div className="col">
                        <h3 className="mb-3">Back End</h3>
                            <div className="row pill-container">
                                {renderBED}
                            </div>
                        </div>
                    </div>

                    <div className="DB row">
                        <div className="col">
                        <h3 className="mb-3">Database</h3>
                            <div className="row pill-container">
                                {renderDB}
                            </div>
                        </div>
                    </div>

                    <div className="Design row">
                        <div className="col">
                        <h3 className="mb-3">Design</h3>
                            <div className="row ml-1 pill-container">
                                <div className="pill col-2 text-center">
                                    <div className="row">
                                        <div className="col-2 mt-3">
                                            <div className="db-ball ball"></div>
                                        </div>
                                        <div className="col mt-3">
                                            <p className="">{tech.design}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}