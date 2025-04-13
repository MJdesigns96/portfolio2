"use client"
//necessary to use aos library
import styles from './styles.modules.css';
import { React, useState, useEffect, useCallback } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Typewriter from '../components/typewriter';
import profile from '../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg'

export default function Temporary() {
    const [isDone, setIsDone] = useState(0);

    const isItDone = useCallback(()=> {
        setIsDone(isDone + 1);
    }, [isDone]);
    console.log(isDone);

    const secondType = (
        isDone > 0 ? 
        <p>
            <Typewriter text="I'm a Full Stack Web Developer based out of Toronto, Ontario, Canada." delay={50} isItDone={isItDone} />
        </p>
        : ""
    );

    const thirdType = (
        isDone > 1 ?
        <p>
            <Typewriter text="Enjoy your stay!" delay={50} isItDone={isItDone} />
        </p>
        : ""
    );

    return (
        <>
            <div className="container intro p-5">
                <div className="row">
                    <div className="col-6">
                        <div className="row p-3">
                            <h1>
                                <Typewriter text="Hi there, my name is Marcus." delay={50} isItDone={isItDone} />
                            </h1>
                        </div>
                        <div className="row p-3">
                            {secondType}
                        </div>
                        <div className="row p-2 mt-5">
                            {thirdType}
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <div className="img-container rounded-circle d-flex align-items-center justify-content-center">
                            <img className='rounded-circle profile-img' src={profile.src} alt="Profile Picture" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}