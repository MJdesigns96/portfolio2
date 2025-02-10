import Hero from "./components/Hero";
import Project1 from "./projects/project1/page";
import Project2 from "./projects/project2/page";
import Project3 from "./projects/project3/page";
import Project4 from "./projects/project4/page";

export default function Home() {
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <Hero />
          </div>
        </div>
        <hr></hr>
        <div className="row">
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
