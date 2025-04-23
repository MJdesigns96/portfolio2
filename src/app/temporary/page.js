"use client"
//necessary to use aos library
import { React, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.modules.css';

export default function Temporary() {
    return (
        <>
            <div className="row title mx-auto">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenOdd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </div>
                        
                    </div>
                    <div className="row">
                        <h1>Project Title</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>Profile Image</p>
                        </div>
                        <div className="col">
                            <h3>Marcus Jeong</h3>
                            <small>Web Developer, Toronto</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}