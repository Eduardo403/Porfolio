import Link from "next/link";
import Leyout from "../components/Leyout";
import { Skills, Experince } from "../profile.js";
const index = () => {
  return (
    <>
      <Leyout>
        {/**header card */}

        <header className="row">
          <div className="col-md-12">
            <div className="card-body card bg-secondary text-light">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="Eduardo-Hernandez.jpg"
                    alt="Edaurdo Hernandez"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h1>Eduardo Hernandez</h1>
                  <h3>Web Developer</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aut, molestiae aliquid. Laboriosam voluptatum libero dolore
                    vel, consectetur rerum fugiat cupiditate velit, illo
                    sapiente eos laborum quis! Expedita dolore vitae nam!
                  </p>
                  <Link href="/contact" legacyBehavior>
                    <a className="btn btn-light">Hire me</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/**Secund section */}
        <div className="row py-2">
          <div className="col-md-4">
            <section className="card bg-light">
              <div className="card-body">
                <h2>Skills</h2>
                {Skills.map(({ Skill, percentage }, i) => (
                  <div className="py-3" key={i}>
                    <h5>{Skill}</h5>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <section className="col-md-8">
            <div className="card bg-light">
              <div className="card-body">
                <h2>Experince</h2>
                <ul>
                  {Experince.map(({ title, description, from, to }, index) => (
                    <li key={index}>
                      <h3>{title}</h3>
                      <h5>
                        {from}-{to}
                      </h5>
                      <p>{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Leyout>
    </>
  );
};

export default index;
