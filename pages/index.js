import Link from "next/link";
import Leyout from "../components/Leyout";
import { Skills, Experince, projects } from "../profile.js";
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
                    and I am a passionate programmer with two years of
                    experience in the technology industry. My main focus is web
                    application development using technologies like node.js ,
                    next.js , SQL , vanilla.js. In addition, I have a solid
                    experience in database design and development, system
                    integration . I love working on challenging projects and am
                    always looking to learn new skills to improve my work. I am
                    a proactive and self-directed person, which allows me to
                    work effectively both individually and in a team. In
                    addition, I am always willing to share my knowledge and
                    experience with other team members to ensure the success of
                    the project. In my free time, I like to attend programming
                    events, where I can meet other programmers and keep up with
                    the latest trends and technologies. I also enjoy reading
                    articles on programming. If you are interested in my work,
                    do not hesitate to contact me. I am looking forward to
                    working on exciting new projects!
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
        {/**section for proyects */}
        <section className="row">
          <article className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center text-light">Porfolio</h2>
                </div>
                {projects.map(
                  ({ name, description, images, github, website }, i) => (
                    <div class="col-md-4 py-2" key={i}>
                      <div
                        className="card h-100"
                        style={{ width: "18rem" }}
                        key={i}
                      >
                        <div className="overflow">
                          <img
                            src={images}
                            className="card-img-top"
                            alt="projects"
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-title">{name}</h5>
                        </div>
                        <p className="card-text">{description}</p>

                        <div className="card-body">
                          <a
                            href={github}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </a>
                          <a
                            href={website}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </article>
        </section>
      </Leyout>
    </>
  );
};

export default index;
