import styles from './styles.modules.css';

export default function Pill(props) {
    const langs = props.langs;
    const projectLangs = props.projectLangs;
    
    let newList = [];
    projectLangs.forEach(entry => {
        for (let [key, value] of Object.entries(langs)) {
            if (key == entry) {
                newList.push({key, value});
            }
        }
    });

    return (
        <div className="row py-3">
            {newList.map((lang) => (
                <div key={lang.value.id} className="col">
                    <img src={lang.value.url} alt={lang.key} className="lang" />
                </div>
            ))}
        </div> 
    )
}