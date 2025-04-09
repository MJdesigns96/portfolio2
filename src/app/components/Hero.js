import temp from '../../../public/F4B2C7A4-A0F0-47F1-A64B-BA1DB4E3DA57.jpeg';

export default function Hero () {
    return (
        <div className="row my-5">
            <div className="col text-center">
                <div className="row justify-content-center">
                    <div className="col ms-5" data-aos="slide-right">
                        <div className="row text-xl-start mb-5">
                            <h1>Welcome!</h1>
                        </div>
                        <div className="row text-center text-xl-start">
                            <div className="col-8">
                                <p className='fs-4'>Hi my name is Marcus and I am a Full Stack Developer based out of Toronto Ontario, Canada.</p>
                                <p className='fs-4'>I have worked on projects with MERN, ASP.Net, Next.Js, and Php/Laravel</p>
                                <p className='fs-4'>If you want to see some of my work please check out my projects listed below.</p>
                                <p className='fs-4'>Thanks for stopping by and enjoy your stay.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col d-none d-xl-block" data-aos="fade-up">
                        <img src={temp.src} className="img-fluid rounded" alt="Profile Image" style={{"height": "60vh", "borderWidth" : "2em"}}/>
                    </div>
                </div>
                <div className="row mt-5" data-aos="fade-up">
                    <div className="col">
                        <h2 className='fs-2'>Currently: </h2>
                        <p className='fs-4'>Web Development Program</p>
                    </div>
                    <div className="col">
                        <h2>Looking for: </h2>
                        <p className='fs-4'>Internships or Job opportunities</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}