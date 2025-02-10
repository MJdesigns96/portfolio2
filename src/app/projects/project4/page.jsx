import Link from "next/link"
import Pill from "@/app/components/Pill";
import {Carousel, CarouselItem} from 'react-bootstrap';
//svg and images
import githubLogo from '../../../../public/github-mark.svg';
import pic1 from '../../../../public/portfolio pics/useless1.png'


export default function Project4 () {
    const languages = [
        "JS",
        "Node.Js",
        "Scratch"
    ]

    return(
        <div className="card mb-3 col-12 px-0" style={{"maxWidth": "60vw"}} data-aos="fade-up">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-dark rounded-start">
                    <img src={pic1.src} className="img-fluid rounded-start d-block w-100" alt="Project Image" style={{"maxHeight": "60vh"}} />
                </div>
                <div className="col-md-8 bg-secondary-subtle">
                    <div className="card-body my-auto">
                        <h3 className="card-title mt-3">Useless Website - Pixel Image</h3>
                        <div className="row mb-3 ms-3">
                            <small className="mb-2">Technologies:</small>
                            <Pill props = {languages} />
                        </div>
                        <p className="card-text">
                            This project was a project for class that was meant to find an interesting idea that might be considered "useless" and build a website or web application with it.
                        </p>
                        <p className="card-text">
                            The idea for my project was to create web app where a user would upload an image and an 8-bit version of the image would be returned.
                        </p>
                        <p className="card-text">
                            Using scratch, an image would be uploaded to a node server and the image would be converted to 256px image. The reason for this is because this would fit nicely into a 16x16 image once converted.
                        </p>
                        <p className="card-text">
                            Using the Canvas and ImageData I made a method that would get the colour data of each pixel in the 256px image, then a hash map would keep a tally of the most popular colour in each 16x16 pixels.
                        </p>
                        <p className="card-text">
                            Once the most popular colour was determined, a new canvas image would be drawn with each 16 pixels in a square being a single colour, making a 8bit image at the end.
                        </p>
                        
                        <div className="card-footer">
                            <div className="row">
                                <div className="col">
                                    <Link href="https://github.com/MJdesigns96/useless-website-pixel" passHref={true} target="_blank">
                                        <button type="button" className="btn btn-light">
                                            <div className="container">
                                                <div className="row align-items-center">
                                                    <div className="col-2">
                                                        <img src={githubLogo.src} style={{"maxHeight": "48px"}} />
                                                    </div>
                                                    <div className="col text-center">
                                                        <h5 className="mb-0">Repository</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <p className="card-text mt-2">
                                <small className="text-body-secondary">Last updated: December 2024</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}