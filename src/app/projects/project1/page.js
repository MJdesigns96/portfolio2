import Link from "next/link"
import Pill from "@/app/components/Pill"
import {Carousel, CarouselItem} from 'react-bootstrap';
//images and svgs
import githubLogo from '../../../../public/github-mark.svg';
import pic1 from '../../../../public/portfolio pics/cap1.png';
import pic2 from '../../../../public/portfolio pics/cap2.png';
import pic3 from '../../../../public/portfolio pics/cap3.png';
import pic4 from '../../../../public/portfolio pics/cap4.png';
import pic5 from '../../../../public/portfolio pics/cap5.png';

export default function Project1 () {
    const languages = [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
    ]

    return(
        <div className="container my-5 mx-3">
            <h1>Capstone Project</h1>
            <small>A cumulative 6 week project that is meant to showcase our skills gained throughout the year long Web Developement Course.</small>
            <div className="my-3 row">
                <h3>Technologies:</h3>
                <Pill props = {languages} />
            </div>
            <div className="row">
                <h3>Introduction</h3>
                <p>This project was meant to showcase the skills I had gained throughout a year long Web Development Course at Humber College.</p>
                <p>The objective of this project was to create a E-commerce app from scratch with a focus on both the customer and admin users.</p>
                <p>For this project, a MERN stack was used:</p>
                <div className="col mx-5 mb-2">
                    <ul className="list-group">
                        <li>MongoDB was used as an online database to store the data from products, users, blogs, and orders.</li>
                        <li>Express were used to run a backend server that would send requests to the database to Create, Read, Update, and Delete data entries.</li>
                        <li>React native was used to create Client Side User Interface components.</li>
                        <li>and NodeJS was used to run these processes in a web server.</li>
                    </ul>     
                </div>
                <p>Our capstone project was assigned along with a set of user stories that we were meant to address through the different features of the web application.</p>
                <p>For this project there were several user stories for the Customer/User that were chosen.</p>
                <div className="col mx-5 mb-2">
                    <ul className="list-group">
                        <li>A User should be able to add an item to cart, enter and adjust their payment and shipping information, then checkout.</li>
                        <li>A user should be able to register, login, and manage their account.</li>
                        <li>The user should be able to filter by category for their desired product.</li>
                        <li>The user should be able to see a detailed view of a product along with various images.</li>
                        <li>The user should be able to clear and adjust their cart details before checking out</li>
                    </ul>
                </div>
                <p>Along with the User several considerations for the Administrator had to be accounted for as well.</p>
                <div className="col mx-5 mb-2">
                    <ul className="list-group">
                        <li>The admin should be able to see all Orders, Users, and Blog components.</li>
                        <li>The admin should be able to  Create, Read, Update, and Delete their products.</li>
                        <li>The admin should be able to contact registered users about their order and shipping statuses as well as send out discount codes and emails.</li>
                    </ul>
                </div>
                <p>With these considerations in mind, the next step that I took was to create a database layout for this project.</p>
            </div>
            <div className="row">
                <h3>Database</h3>
                <p>I had chosen to use MongoDB for this project meaning that I would be sending and retreiving JSON objects between the database, server, and client components.</p>
                <p>Having worked on other Full Stack projects in the past, I had learned that it is very important to start a project with good database structure and management so future problems that could arise can be prevented in advance.</p>
                <p>Knowing that I was intending to use a MERN stack, my backend server would be making calls to MongoDB through Mongoose and the use of DB Schemas.</p>
                <p>I spent some time creating schema layouts and organizing my database into different collections to handle the various requests the website would use.</p>
                <p>I had then started the project by initalizing the DB through MongoDB Atlas, connecting my backend server to the database, then creating the various schemas for my requests to use.</p>
            </div>
            <div className="row">
                <h3>Features</h3>
            </div>
            <div className="row">
                <h3>Problems and Solutions</h3>
            </div>
            <div className="row">
                <h3>Future</h3>
            </div>
        </div>
        
    )
}