"use client"
//necessary to use aos library
import { React, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles.modules.css';

export default function Temporary() {
    const chevron = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenOdd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
    );

    const projectDetails = {
        title: "Shoes - Ecommerce Website Capstone",
        intro1: "This project was meant to showcase the skills I had gained throughout a year long Web Development Course at Humber College.",
        intro2: "The objective of this project was to create a E-commerce app from scratch with a focus on both the customer and admin users."
    }

    return (
        <>
            <div className="row title mx-auto">
                <div className="col">
                    <div className="row">
                        <div className="col breadcrumbs">
                            <Link href="/" className='breadcrumb'>home</Link>
                            {chevron}
                            <Link href="/projects" className='breadcrumb'>projects</Link>
                            {chevron}
                            <p className='breadcrumb'>{projectDetails.title}</p>
                        </div>                        
                    </div>
                    <div className="row">
                        <h1>{projectDetails.title}</h1>
                    </div>
                    <div className="row my-2">
                        <div className="col-2 d-flex align-items-center">
                            <p>Profile Image</p>
                        </div>
                        <div className="col-4">
                            <h3>Marcus Jeong</h3>
                            <small>Web Developer, Toronto</small>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <h2>Introduction</h2>
                        <p>{projectDetails.intro1}</p>
                        <p>{projectDetails.intro2}</p>
                    </div>
                </div>
            </div>
        </>
    )
}