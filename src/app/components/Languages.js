import {React} from "react";
import styles from './styles.modules.css';

export default function Languages({ langs = [] }) {
    // an object that holds all the languages
    // console.log(langs);
    const langsArr = [];
    
    for (let [key, value] of Object.entries(langs)) {
        langsArr.push({key, value});
    };

    return (
        <div className="row">
            <div className="col">
                <div className="row mx-auto overflow-hidden">
                    {langsArr.map((lang) => (
                        <div key={lang.value.id} className="col">
                            <img src={lang.value.url} alt={lang.key} className="lang" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}