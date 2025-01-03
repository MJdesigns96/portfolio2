import Link from "next/link"
import temp from '../../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';

export default function Project1 () {
    return(
        <div className="row">
            <div className="card text-bg-dark">
                <img className="card-img" style={{height: "75vh", objectFit: "none", objectPosition: "center"}} src={temp.src} alt="Profile Picture" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">description text</p>
                    <div>
                        <p>Pills generated for each of the technologies.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}