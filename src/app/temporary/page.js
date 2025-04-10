"use client"
//necessary to use aos library
import styles from './styles.modules.css';
import { React, useState, useEffect, useCallback } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Typewriter from '../components/typewriter';

export default function Temporary() {
    const [isDone, setIsDone] = useState(0);

    const isItDone = useCallback(()=> {
        setIsDone(isDone + 1);
    }, [isDone]);
    console.log(isDone);

    const secondType = (
        isDone > 0 ? 
        <p>
            <Typewriter text="I'm a Full Stack Web Developer based out of Toronto Canada." delay={50} isItDone={isItDone} />
        </p>
        : ""
    );

    return (
        <>
            <div className="container intro">
                <div className="row">
                    <div className="col">
                        <h1>
                            <Typewriter text="Hi there, my name is Marcus." delay={50} isItDone={isItDone} />
                        </h1>
                        {secondType}
                    </div>
                </div>
            </div>
        </>
    )
}