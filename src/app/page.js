"use client"
import Hero from "./components/Hero";
import Project1 from "./projects/project1/page";
import Project2 from "./projects/project2/page";
import Project3 from "./projects/project3/page";
import Project4 from "./projects/project4/page";

//necessary to use aos library
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
      AOS.init({
          duration: 600,
          once: false,
          easing: 'ease-in-out'
        })
  }, [])
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <Hero />
          </div>
        </div>
        <hr></hr>
        <div className="row d-flex justify-content-center mx-auto">
          <div className="col-12">
            <div className="row">
              <h2>Projects</h2>
              <p className="mb-4 mt-3 fs-4">Here are some projects that I have worked on:</p>
            </div>
          </div>
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
        </div>
      </div>
    </div>
  );
}
