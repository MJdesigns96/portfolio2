"use client"
import { React, useState, useEffect } from 'react'

export default function Typewriter ({ text, delay, isItDone }) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
            
            return () =>{
                clearTimeout(timeout);
            } 
        }
        isItDone();
    }, [currentIndex, delay, text]);

    return (
        <span>{currentText}</span>
    ) 
}