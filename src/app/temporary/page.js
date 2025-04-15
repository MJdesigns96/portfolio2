"use client"
//necessary to use aos library
import styles from './styles.modules.css';
import { React, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Typewriter from '../components/typewriter';
import profile from '../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg'

export default function Temporary() {
    const [isDone, setIsDone] = useState(0);
    useEffect(() => {
          AOS.init({
              duration: 1000,
              once: true,
              easing: 'ease-in-out'
            })
      }, [])

    const isItDone = useCallback(()=> {
        setIsDone(isDone + 1);
    }, [isDone]);
    console.log(isDone);

    const welcomeCode = (
        <div>
            <p>
                <span className="txt-accent-pri">const </span> <span className="txt-accent-sec">SayHello</span> = () =&gt; &#123;
            </p>
            
            <p>
                <span className="ms-3 txt-accent-third">return </span> <span className="txt-accent-sec">"Hey Hi Hello 🖐️";</span> 
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
                        Projects
                    </Link>
                </button>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn-dark">
                    <Link className="nav-link text-light" href="/about">
                        About Me
                    </Link>
                </button>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn-dark">
                    <Link className="nav-link text-light" href="/contact">
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
    )

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
    )
}