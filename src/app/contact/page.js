'use client'
import styles from './styles.modules.css';
//svgs and assets
import githubLogo from '../../../public/github-mark.svg';
import linkedinLogo from '../../../public/linkedin-logo.svg';
import emailLogo from '../../../public/email.svg';
import document from '../../../public/document.svg';
import Link from 'next/link';

export default function Contact () {
    return(
        <div className="row my-5">
            <div className="col">
                <div className="row">
                    <h1>Contact Me</h1>
                </div>
                <div className="row">
                    <p className='fs-5'>If you would like to chat about coding or anything else please feel free to reach out or check out any of my links.</p>
                </div>
                <div className="row">
                    <div className='col'>
                        <Link href="https://www.linkedin.com/in/marcus-jeong-b513b6190/" passHref={true} target="_blank">
                            <button className='btn btn-light'>
                                <div className="row">
                                    <div className="col">
                                        <img src={linkedinLogo.src} style={{"maxHeight": "98px"}} />
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <h2>LinkedIn</h2>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link href="https://github.com/MJdesigns96/W25-Capstone-client" passHref={true} target="_blank">
                            <button className='btn btn-light'>
                                <div className="row">
                                    <div className="col">
                                        <img src={githubLogo.src} style={{"maxHeight": "98px"}} />
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <h2>Github</h2>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link href="mailto:marcus.jeong96@gmail.com" passHref={true} target="_blank">
                            <button className='btn btn-light'>
                                <div className="row">
                                    <div className="col">
                                        <img src={emailLogo.src} style={{"maxHeight": "98px"}} />
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <h2>Email</h2>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className='col'>
                    <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className='btn btn-light'>
                            <div className="row">
                                <div className="col">
                                    <img src={document.src} style={{"maxHeight": "98px"}} />
                                </div>
                                <div className="col d-flex align-items-center">
                                    <h2>Resume</h2>
                                </div>
                            </div>
                        </button>
                    </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}