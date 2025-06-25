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
    const Projectlangs = [
        "MongoDB",
        "Express",
        "React",
        "Node",
    ];

    return(
        <div className="container my-5 px-5 py-0">
            <div className="row">
                <div className="col">
                    <h1>🥿 Capstone Project – E-Commerce Shoe Store</h1>
                    <small>A 6-week cumulative project to demonstrate full-stack development skills acquired through Humber College’s year-long Web Development course.</small>
                    <span className="target" id="intro"></span>
                    <div className="row imgRow rounded my-3">
                        <img src={capstone.src} className="d-block rounded mx-auto my-3 image" alt="Capstone Picture" />
                    </div>
                    <div className="row my-4">
                        <h3>🧭 Project Overview</h3>
                        <p className="mx-4">
                            This capstone project challenged us to design and develop a complete e-commerce application from scratch, balancing the needs of both customers and administrators. 
                            I chose to create an online shoe store that allows customers to browse products, add them to their cart, and checkout, while giving administrators full CRUD control over products, users, and orders.
                        </p>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3>🧱 Tech Stack (MERN)</h3>
                        <ul className="ms-5">
                            <li>MongoDB: Used as the database to store all data (products, users, orders, blogs).</li>
                            <li>Express: Powered the backend server and routed CRUD operations.</li>
                            <li>React (Native): Built the front-end UI components for both customer and admin.</li>
                            <li>Node.js: Served the backend and handled API requests.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-3">✅ Core Features</h3>
                        <h4 className="my-3">🛍️ Customer-Facing</h4>
                        <ul className="ms-5">
                            <li>Customers can browse products with category filters and view product details.</li>
                            <li>Add items to cart, adjust quantities, input shipping/payment info, and checkout.</li>
                            <li>Register, log in, and manage their user account.</li>
                            <li>LocalStorage used to hold cart data across sessions.</li>
                            <li>Responsive layout and product pages with image previews.</li>
                        </ul>
                        <div className="row my-4 d-flex align-items-middle justify-content-center">
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
                    
                        <h4 className="my-4">🛠️ Admin-Facing</h4>
                        <ul className="ms-5">
                            <li>Full CRUD functionality for products using MongoDB and Mongoose.</li>
                            <li>View and manage users, orders, and blog content.</li>
                            <li>Contact registered users for updates, order confirmations, or promotions.</li>
                            <li>Prepare and send promotional offers or discount codes (planned feature).</li>
                        </ul>
                        <div className="row my-4 d-flex align-items-middle justify-content-center">
                                <div className="col-6 d-flex align-items-middle justify-content-center rounded">
                                    <Carousel className="rounded" interval={null}>
                                        <CarouselItem>
                                            <img className="d-block w-100 rounded img-fluid" style={{height: "50vh"}} src={adminDash.src} alt="Product Detail Cards" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img className="d-block w-100 rounded img-fluid" style={{height: "50vh"}} src={adminReadProducts.src} alt="Expanded Product Details" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img className="d-block w-100 rounded img-fluid" style={{height: "50vh"}} src={adminAddProduct.src} alt="User Cart" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img className="d-block w-100 rounded img-fluid" style={{height: "50vh"}} src={adminUpdateProduct.src} alt="Checkout" />
                                        </CarouselItem> 
                                        <CarouselItem>
                                            <img className="d-block w-100 rounded img-fluid" style={{height: "50vh"}} src={adminDeleteProduct.src} alt="Checkout" />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img className="d-block w-100 rounded img-fluid" style={{height: "50vh"}} src={adminViewOrders.src} alt="Checkout" />
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                            </div>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="mt-2 mb-4">🧠 Challenges & Solutions</h3>
                        <h4>📦 Object Conversion & LocalStorage</h4>
                        <p className="mx-4">Working with object-based data in React created problems with serialization. Data had to be stringified before saving to LocalStorage and then parsed on retrieval. This was solved with utility functions and useEffect hooks to manage sync between state and storage.</p>
                        <h4>🔢 Number vs. String Key Issues</h4>
                        <p className="mx-4">Storing shoe sizes as number-based keys in MongoDB caused issues when accessing them with dot notation. Workaround: sizes were mapped into arrays and accessed with array methods to check availability.</p>
                        <h4>🖼️ Images & Base64 Performance</h4>
                        <p className="mx-4">Storing images in base64 inflated request sizes and slowed down the app. Instead, I pivoted to using hosted image URLs with lazy loading to optimize load times. This mimics how real-world apps use blob storage like AWS or Azure.</p>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-4">📐 Database Design</h3>
                        <p>The project began by modeling the database carefully using MongoDB Atlas and Mongoose schemas. Collections included:</p>
                        <ul className="ms-5 clearfix">
                            <li className="mb-3">
                                <code className="bg-dark p-2 rounded text-white">
                                   products 
                                </code>
                            </li>
                            <li className="mb-3">
                                <code className="bg-dark p-2 rounded text-white">
                                   users 
                                </code>
                            </li>
                            <li className="mb-3">
                                <code className="bg-dark p-2 rounded text-white">
                                   orders 
                                </code>
                            </li>
                            <li className="mb-3">
                                <code className="bg-dark p-2 rounded text-white">
                                   blogs 
                                </code>
                            </li>
                        </ul>
                        <p>Schemas were designed to ensure clear relationships and efficient querying for both customer and admin interfaces.</p>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-4">📈 Takeaways</h3>
                        <ul className="ms-5">
                            <li>Gained deeper understanding of full-stack coordination, especially the importance of structuring data flows early in development.</li>
                            <li>Learned how image hosting and payload sizes affect performance and scalability.</li>
                            <li>Developed strong appreciation for why companies often rely on third-party e-commerce platforms like Shopify.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-4">🧩 Future Improvements</h3>
                        <ul className="ms-5">
                            <li>Add promotional email system and discount code integration.</li>
                            <li>Allow admin to send targeted offers to specific user groups.</li>
                            <li>Add client-side validations (e.g., size selection required).</li>
                            <li>Implement better filtering and query-based category navigation.</li>
                            <li>Add user order history and shipment tracking.</li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    )
}