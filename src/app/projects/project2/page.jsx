import Link from "next/link"
import Pill from "@/app/components/Pill";
import {Carousel, CarouselItem} from 'react-bootstrap';
//svg and images
import next1 from '../../../../public/portfolio pics/nextjs1.png'


export default function Project2 () {
    return(
        <div className="container my-5 px-5 py-0">
                    <div className="row">
                        <div className="col">
                            <h1>💧 Water Bottle Storefront – Full Stack Next.js Project</h1>
                            <small>A final project for a Full Stack Development course focused on building a functional storefront using Express, MongoDB, and Next.js.</small>
                            <span className="target" id="intro"></span>
                            <div className="row imgRow rounded my-3">
                                {/* <img src={next1.src} className="d-block rounded mh-50 mx-auto my-3 image" alt="Storefront Picture" /> */}
                            </div>
                            <div className="row my-4">
                                <h3 className="mb-3">🧭 Project Overview</h3>
                                <p className="mx-4">This project challenged us to build a full-stack application from scratch that demonstrated how to retrieve data from a MongoDB database through an API and use it to populate a dynamic, server-rendered website using Next.js.</p>
                                <p className="mx-4">The result was a water bottle storefront with a simple product display page powered by a custom-built backend and rendered via server-side props.</p>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <h3>🧱 Tech Stack (MERN)</h3>
                                <ul className="ms-5">
                                    <li>MongoDB: Used to store water bottle product data.</li>
                                    <li>Express: Served as the backend to build a RESTful API for data access.</li>
                                    <li>Next.js: Used for both frontend rendering and as a minimal backend API layer.</li>
                                    <li>React: Powered the UI components and handled client interactivity.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <h3 className="my-3">✅ Core Features</h3>
                                <ul className="ms-5">
                                    <li>API endpoint to fetch water bottle products from the database.</li>
                                    <li>Dynamic routing to handle individual product pages.</li>
                                    <li>Clean and simple UI built with reusable React components.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <h3 className="mt-2 mb-4">🧠 Challenges & Solutions</h3>
                                <h4>🔌 Integrating MongoDB with Next.js API Routes</h4>
                                <p className="mx-4">Connecting to MongoDB within Next.js' API route structure introduced challenges in managing asynchronous data access and connection pooling. This was solved by modularizing the MongoDB connection logic and handling errors gracefully in API responses.</p>
                                <h4>🧭 Understanding Framework Limitations</h4>
                                <p className="mx-4">Exploring the edge cases of Next.js helped highlight where it excels (performance, routing, server-side rendering) and where it can become complex (middleware, server setup with custom APIs).</p>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <h3 className="my-4">📈 Takeaways</h3>
                                <ul className="ms-5">
                                    <li>Gained hands-on experience with server-side rendering and how Next.js integrates with external databases.</li>
                                    <li>Learned to manage both backend APIs and frontend rendering in a single framework.</li>
                                    <li>Strengthened my understanding of building modular, reusable components and organizing routing in a scalable way.</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <h3 className="my-4">🧩 Future Improvements</h3>
                                <ul className="ms-5">
                                    <li>Add a cart and checkout workflow to extend functionality.</li>
                                    <li>Improve styling with a component library like Tailwind.</li>
                                    <li>Expand the backend to support product categories and admin CRUD features.</li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>
    )
}