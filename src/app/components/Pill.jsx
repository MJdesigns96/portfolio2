import styles from './styles.modules.css';

export default function Pill(props) {
    const langs = props.props;
    const languages = langs.map(lang => (
        <div className="col-2 pill" key={lang.indexof}>
            <div className="row d-flex align-items-center">
                <div className="col-2">
                    <div className="ball" style={{backgroundColor: "#457b9d"}}></div>
                </div>
                <div className="col text-start pe-0">
                    <p className='my-1'>{ lang }</p>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            {languages}
        </>    
    )
}