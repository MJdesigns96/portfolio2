import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Project1 from "./projects/project1/page";

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
                  <p className="mb-4 mt-3">Here are a list of some languages and technologies I've worked on.</p>
              </div>
              <div>
                <Languages />
              </div>
              <div><Project1 /></div>
              <div><Project1 /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
