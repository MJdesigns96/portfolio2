import Link from "next/link"
import Pill from "@/app/components/Pill"
import {Carousel, CarouselItem, CarouselCaption} from 'react-bootstrap';
import styles from './styles.modules.css';
//images and svgs
import capstone from '../../../../public/capstone-1.png'
import productCard from '../../../../public/product-cards.png';
import productDetails from '../../../../public/product-detail.png';
import checkoutCart from '../../../../public/cart-details.png';
import checkoutSuccess from '../../../../public/checkout.png';

import adminDash from '../../../../public/admin-dashboard.png';
import adminReadProducts from '../../../../public/admin-read-products.png';
import adminAddProduct from '../../../../public/admin-update-product.png';
import adminUpdateProduct from '../../../../public/admin-add-product.png';
import adminDeleteProduct from '../../../../public/admin-delete-product.png';
import adminViewOrders from '../../../../public/admin-view-orders.png';

export default function Project1 () {
    const languages = [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Bootstrap"
    ]

    return(
        <div className="container my-5 mx-3 p-0">
            <nav className="nav" id="stickyNav">
                <div className="row">
                    <div className="col">
                        <h3>
                            <Link className="text-decoration-none" href="#intro">Intro</Link>
                        </h3> 
                    </div>
                    <div className="col">
                        <h3>
                            <Link className="text-decoration-none" href="#database">Database</Link>
                        </h3>
                    </div>
                    <div className="col">
                        <h3>
                            <Link className="text-decoration-none" href="#features">Features</Link>
                        </h3>
                    </div>
                    <div className="col">
                        <h3>
                            <Link className="text-decoration-none" href="#problems">Problems</Link>
                        </h3>
                    </div>
                </div>
            </nav>
            <h1>Capstone Project</h1>
            <small>A cumulative 6 week project that is meant to showcase our skills gained throughout the year long Web Developement Course.</small>
            <div className="my-3 row d-none d-lg-flex">
                <h3>Technologies:</h3>
                <Pill props = {languages} />
            </div>
            <span className="target" id="intro"></span>
            <div className="row bg-dark my-5">
                    <img src={capstone.src} className="d-block rounded mx-auto " style={{maxWidth: '50vw'}} alt="Capstone Picture" />
                </div>
            <div className="row">
                <h3>Introduction</h3>
                <p>This project was meant to showcase the skills I had gained throughout a year long Web Development Course at Humber College.</p>
                <p>The objective of this project was to create a E-commerce app from scratch with a focus on both the customer and admin users.</p>
                <p>I had chosen to create an online shoe store that the customer can browse, add items to cart, then checkout with while letting the admin keep a record of each user, order, as well as being able to Create, Read, Update, and Deleting their products.</p>
                <p>For this project, a MERN stack was used:</p>
                <div className="col mx-5 mb-2">
                    <ul className="list-group">
                        <li>MongoDB was used as an online database to store the data from products, users, blogs, and orders.</li>
                        <li>Express were used to run a backend server that would send requests to the database to Create, Read, Update, and Delete data entries.</li>
                        <li>React native was used to create Client Side User Interface components.</li>
                        <li>and NodeJS was used to run these processes in a web server.</li>
                    </ul>     
                </div>
                {/* image of  User Stories*/}
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
            <span className="target" id="database"></span>
            {/* make image of mongodb */}
            <div className="row">
                <h3>Database</h3>
                <p>I had chosen to use MongoDB for this project meaning that I would be sending and retreiving JSON objects between the database, server, and client components.</p>
                <p>Having worked on other Full Stack projects in the past, I had learned that it is very important to start a project with good database structure and management so future problems that could arise can be prevented in advance.</p>
                <p>Knowing that I was intending to use a MERN stack, my backend server would be making calls to MongoDB through Mongoose and the use of DB Schemas.</p>
                <p>I spent some time creating schema layouts and organizing my database into different collections to handle the various requests the website would use.</p>
                <p>I had then started the project by initalizing the DB through MongoDB Atlas, connecting my backend server to the database, then creating the various schemas for my requests to use.</p>
            </div>
            <span className="target" id="features"></span>
            <div className="row">
                <h3>Features</h3>
                <p>The main features for this ecommerce website can be split into two groups: Customer and Administrator.</p>
                {/* make a carousel of pictures of the features */}
                <div className="col">
                    <div className="row mb-3">
                        <h4>Customer</h4>
                        <p>The most important feature to have for an ecommerce site is to allow the customer/user to select a product and checkout.</p>
                        <p>In order to achieve this it is necessary to allow the user to view different products, add them to a cart, and then retrieve their selected product(s) as they checkout.</p>
                        <p>Attached to this, there must be product cards and/or details pages that help the user see details about the various products.</p>
                        <p>Once the user selects their products, localstorage will be used to house the various ids of the different products.</p>
                        <p>In the checkout page, a method will access the items ids and number of items from localstorage, then match those items to their respective details.</p>
                        <p>From the checkout page, the user will be able to enter and select their payment, shipping, and additional details then checkout.</p>
                        <p>When the checkout is prompted a method will save the details and send that data back through the server to the orders database.</p>
                        <p>There will also be a register and login feature for the user so they can access and change their information, which can be preloaded for faster checkout, and orders, based on order id.</p>
                    </div>
                    <div className="row d-flex align-items-middle justify-content-center">
                         <div className="col-6 d-flex align-items-middle justify-content-center rounded">
                            <Carousel className="rounded" interval={null}>
                                <CarouselItem>
                                    <img className="d-block rounded" style={{width: "50vw"}} src={productCard.src} alt="Product Detail Cards" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="d-block rounded" style={{width: "50vw"}} src={productDetails.src} alt="Expanded Product Details" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="d-block rounded" style={{width: "50vw"}} src={checkoutCart.src} alt="User Cart" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="d-block rounded" style={{width: "50vw"}} src={checkoutSuccess.src} alt="Checkout" />
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                    <div className="row">
                        <h4>Admin</h4>
                        <p>For the admin features the most important features would be to be able to Create, Read, Update, and Delete the various products.</p>
                        <p>In order to do this, various Post and Get methods are sent through the client and run the specific server and mongoose method to run its respective mongodb method.</p>
                        <p>In addition to product CRUD methods, there should be a way to list the Orders and Users that are registered for the website.</p>
                    </div>
                    <div className="row d-flex align-items-middle justify-content-center">
                         <div className="col-6 d-flex align-items-middle justify-content-center rounded">
                            <Carousel className="rounded" interval={null}>
                                <CarouselItem>
                                    <img className="d-block w-100 rounded object-fit-fill" style={{height: "50vh"}} src={adminDash.src} alt="Product Detail Cards" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="d-block w-100 rounded object-fit-fill" style={{height: "50vh"}} src={adminReadProducts.src} alt="Expanded Product Details" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="d-block w-100 rounded object-fit-fill" style={{height: "50vh"}} src={adminAddProduct.src} alt="User Cart" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="d-block w-100 rounded object-fit-fill" style={{height: "50vh"}} src={adminUpdateProduct.src} alt="Checkout" />
                                </CarouselItem> 
                                <CarouselItem>
                                    <img className="d-block w-100 rounded object-fit-fill" style={{height: "50vh"}} src={adminDeleteProduct.src} alt="Checkout" />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className="d-block w-100 rounded object-fit-fill" style={{height: "50vh"}} src={adminViewOrders.src} alt="Checkout" />
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <span className="target" id="problems"></span>
            <div className="row">
                <h3>Problems and Solutions</h3>
                {/* JSON Object notation; using mongo everything had to be an object and having to convert the details weren't a problem, however, to go from a form, save it to an object, then save it under localhost as an object, convert the form object as a string to */}
                <div className="col">
                    <div className="row">
                        {/* whiteboard conversion chart */}
                        <h4>Object Conversions</h4>
                        <p>One of the first problems that I ran through while working on this project was the need to convert objects then reconvert them.</p>
                        <p>This was expected because using MongoDB all of the data being retreived or sent will have to be in JSON notation.</p>
                        <p>Some of the problems that arose were issues regarding the native React map method, which only works on arrays, having to convert objects to strings to save data into the localStorage, then reversed that process to access the data for the customer cart, and issues that arose when saving certain elements.</p>
                        <p>To tackle these problems, I had gone through various forums and guides to learn about how to best convert and revocent these objects as well as how to set up methods to deal with form changes before the objects were passed through the server.</p>
                    </div>
                    <div className="row">
                        {/* js vs ts */}
                        <h4>Loose typed vs Strict type Language</h4>
                        <p>As an extension to the object saving issue, a problem arose with the use of Javascript. React using native Javascript, which is a loose typed language caused an issue in this specific project because the ecommerce site was dealing with shoes.</p>
                        <p>Shoes are usually broken down into sizes based on Numbers and while saving this data into MongoDB, the sizes were saved as such.</p>
                        <p>This caused some problems to occur because the JSON object keys were being recognized as Numbers and therefore could not be accessed through dot(.) notation the same way as if they were saved as strings.</p>
                        <p>This could have been avoided through the use of a strongly typed language, such as Typescript, which would designate the key as being a string rather than a number.</p>
                        <p>To address these problems, a workaround was done where the various sizes were mapped into an array then the array method would checke if they were in stock or not.</p>
                    </div>
                    <div className="row">
                        {/* blob object storage */}
                        <h4>Images and base64</h4>
                        <p>Another problem I had encountered was the use of images and saving them in base64.</p>
                        <p>Originally, the plan was to save various images to mongodb directly and have them be pulled in the same object that had the other details for each product.</p>
                        <p>This started creating problems with my fetch method (axios) and my server methods because the request bodies became too big to efficiently pass the data back and forth when updating or creating new products.</p>
                        <p>Upon researching I had discovered that to counteract this problem, most companies choose to host their images and videos in blob storage web systems, servers dedicated to being written once and read multiple times. Some web services that would host these images include Azure, AWS, and others.</p>
                        <p>By doing so, the image retrieval is optimized because it is not waiting for large amounts of data to be passed back and forth.</p>
                        <p>For the purposes of this project, instead of signing up for and hosting images, I had chosen to find img urls for the images used and to lazy load them onto the server so that they are retreived when the user scrolls to them.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3>Conclusion</h3>
                {/* Features I want to add; Paypal and other payment systems, client side and server side validation before transactions go through */}
                <p>I feel that I had completed most of the project goals in the 6 week period and I am happy with the product. I feel like I've learned quite a bit about the challenges faced by many ecommerce platforms and why many vendors choose to sign up through a reputable company instead of hiring a team to create a custom website themselves.</p>
                <p>There are a few features I wish to add in the future, which include:</p>
                <div className="col mx-5 mb-2">
                    <ul className="list-group">
                        <li>Integrating discount codes</li>
                        <li>Allowing the admin to send discount codes and promotional emails to registered users</li>
                        <li>Client side validation that prohibits adding to cart without choosing a size</li>
                        <li>showing users their orders and status</li>
                        <li>Filtering options</li>
                        <li>Changing the product filter options to adapt based on query passed through the url</li>
                    </ul>     
                </div>
                <p>Overall, this project has given me a new appreciation for ecommerce developers and the vast teams that are required to set everything up as well as maintain them in order for issues and bugs to not arise as a customer goes through the ecommerce process.</p>
            </div>
        </div>
    )
}