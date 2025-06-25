import logo from '../../../../public/lodestone-logo.jpg'

export default function LodstoneInternship() {
    return(
        <div className="container my-5 px-5 py-0">
            <div className="row">
                <div className="col">
                    <h1>🛠️ Web Development Internship – Lodestone.pm</h1>
                    <small>A hands-on internship focused on full-stack web development using modern frameworks and best practices in a collaborative, fast-paced team environment.</small>
                    <span className="target" id="intro"></span>
                    <div className="row imgRow rounded my-3 bg-dark" style={{height: "60vh"}}>
                        <img src={logo.src} className="d-block h-100 rounded mx-auto my-3 image object-fit-scale" alt="Storefront Picture" />
                    </div>
                    <div className="row my-4">
                        <h3 className="mb-3">🧭 Overview</h3>
                        <p className="mx-4">As a Web Development Intern at Lodestone.pm, I worked closely with senior developers to build and maintain production-ready web applications. My responsibilities spanned frontend design, backend integration, and UX enhancements, giving me valuable experience with real-world development workflows and team collaboration.</p>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3>🧱 Tech Stack (MERN)</h3>
                        <ul className="ms-5">
                            <li>React & TypeScript: Built modular, responsive UI components.</li>
                            <li>Remix: Managed server-side routing and form handling.</li>
                            <li>Prisma: Interfaced with the database using a modern ORM.</li>
                            <li>Tailwind CSS: Styled components with a scalable utility-first approach.</li>
                            <li>Git & GitHub: Contributed to a multi-developer codebase via PRs and code reviews.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-3">✅ Core Contributions</h3>
                        <ul className="ms-5">
                            <li>Built on existing developer work to create intuitive, user-focused table editing features, improving workflow clarity and ease-of-use for multi-item editing tasks.</li>
                            <li>Designed and integrated UI components to streamline data input and editing workflows.</li>
                            <li>Debugged and resolved UI bugs and backend inconsistencies through QA testing and collaboration with the senior dev team.</li>
                            <li>Assisted in refactoring components for performance, readability, and accessibility.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="mt-2 mb-4">🧠 Challenges & Solutions</h3>
                        <h4>🧩 Enhancing Existing Features for Better UX</h4>
                        <p className="mx-4">Improving previously developed multi-row editing features required understanding both legacy logic and user pain points. I collaborated with the UX/UI team and focused on reducing friction through clearer interactions, simplified form patterns, and better visual feedback.</p>
                        <h4>⚙️ Backend Synchronization</h4>
                        <p className="mx-4">Ensured smooth communication between client components and the Prisma-connected backend, resolving issues around data shape and form validation. This experience sharpened my understanding of full-stack integration and Remix’s data flow.</p>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-4">📈 Takeaways</h3>
                        <ul className="ms-5">
                            <li>Learned how to work efficiently within an agile dev team, using Git and code review processes.</li>
                            <li>Gained real-world experience with Remix, Prisma, and building production-grade UI/UX.</li>
                            <li>Strengthened skills in debugging, testing, and writing maintainable code.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-4">🧩 Future Goals </h3>
                        <ul className="ms-5">
                            <li>Continue improving at writing clean, reusable React components..</li>
                            <li>Explore advanced backend integrations.</li>
                            <li>Build upon other existing features and build new features to improve the user app experience.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row my-4">
                        <h3 className="my-4">🔗 Company Link</h3>
                        <ul className="ms-5">
                            <li>Lodestone.pm: <a href='https://lodestone.pm/' className='text-decoration-none'>lodestone.pm</a></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    )
}