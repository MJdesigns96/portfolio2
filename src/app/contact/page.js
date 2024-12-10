'use client'
import styles from './styles.modules.css';

export default function Contact () {
    return(
        <div className="row">
            <div className="col">
                <div className="row">
                    <h1>Contact Me</h1>
                </div>
                <div className="row">
                    <p>If you would like to chat about coding or anything else please feel free to reach out.</p>
                </div>
                <div className="row">
                    <div className='col'>
                        <a className='social-link' href= "https://linkedin.com/in/marcus-jeong-b513b6190" target="_blank">
                            <div className="social-div text-center">
                                Linkedin
                                {/* <img /> */}
                            </div>
                        </a> 
                    </div>
                    <div className='col'>
                        <a className='social-link'  href= "https://github.com/MJdesigns96" target="_blank">
                            <div className="social-div text-center">
                                github
                                {/* <img /> */}
                            </div>
                        </a>
                    </div>
                    <div className='col'>
                        <a className='social-link'  href= "mailto:marcus.jeong96@gmail.com" target="_blank">
                            <div className="social-div text-center">
                                email
                                {/* <img /> */}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}