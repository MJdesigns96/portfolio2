"use client"
import styles from './styles.modules.css';
import { React, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Typewriter from './components/typewriter';
import profile from '../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';

export default function Home() {
  const [isDone, setIsDone] = useState(0);
  useEffect(() => {
      AOS.init({
          duration: 600,
          once: false,
          easing: 'ease-in-out'
        })
  }, [])

  const isItDone = useCallback(()=> {
    setIsDone(isDone + 1);
}, [isDone]);
// console.log(isDone);

const welcomeCode = (
    <div>
        <p>
            <span className="txt-accent-pri">const </span> <span className="txt-accent-sec">SayHello</span> = () =&gt; &#123;
        </p>
        
        <p>
            <span className="ms-3 txt-accent-third">return </span> <span className="txt-accent-sec">&lt;p&gt;"Hey Hi Hello 🖐️";&lt;/p&gt;</span> 
        </p>
        <p>&#125;;</p>
        <p data-aos="fade-up" data-aos-delay="2000"><span className="txt-accent-sec">SayHello();</span></p>
        <p data-aos="fade-up" data-aos-delay="3000">Hey Hi Hello 🖐️</p>
    </div>
    
);

const secondType = (
    isDone > 0 ?
        <p>
            <Typewriter text="I'm a Full Stack Web Developer based out of Toronto, Ontario, Canada." delay={40} isItDone={isItDone} />
        </p>        
    : ""
)

const thirdType = (
    isDone > 1 ?
        <p>
            <Typewriter className="test" text="Enjoy your stay!" delay={50} isItDone={isItDone} />
        </p>        
    : ""
);

const heroButtons = (
    isDone > 2 ?
    <div className="row mt-3" data-aos="fade-up">
        <div className="col-4">
            <button type="button" className="btn btn-dark">
                <Link className="nav-link text-light" href="/projects">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
                  </svg>
                  <span> </span>  
                  Projects
                </Link>
            </button>
        </div>
        <div className="col-4">
            <button type="button" className="btn btn-dark">
                <Link className="nav-link text-light" href="/about">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                  <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                </svg>
                <span> </span>
                  About Me
                </Link>
            </button>
        </div>
        <div className="col-4">
            <button type="button" className="btn btn-dark">
                <Link className="nav-link text-light" href="/contact">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                  </svg>
                  <span> </span>
                  Contact
                </Link>
            </button>
        </div>
    </div>
    : ""
);

const profilePic = (
    isDone > 0 ?
    <div className="col-6 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="100">
        <div className="img-container rounded-circle d-flex align-items-center justify-content-center">
            <img className='rounded-circle profile-img' src={profile.src} alt="Profile Picture" />
        </div>
    </div>
    :
    ""
);

  return (
    <>
      <div className="container intro p-5 d-grid">
          <div className="row">
              <div className="col-6">
                  <div className="row p-3">
                      <h1>
                          <Typewriter text="Hi there 🖐️, I'm Marcus." delay={50} isItDone={isItDone} />
                      </h1>
                  </div>
                  <div className="row p-3">
                      {secondType}
                  </div>
                  <div className="row p-3 ms-3 pseudo-code rounded d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="100">
                      {welcomeCode}
                  </div>
                  <div className="row p-3 mt-5">
                      <div className="col">
                          <div className="row">
                              {thirdType}
                          </div>
                          {heroButtons}
                      </div>
                  </div>
              </div>
              {profilePic}
          </div>
      </div>
    </>
  );
}
