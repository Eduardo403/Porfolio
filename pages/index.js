import Link from "next/link";
import Leyout from "../components/Leyout";

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
        <div class="row py-2">
          <div class="col-md-4">
            <div class="card bg-light">
              <div class="card-body">
                <h2>Skills</h2>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card bg-light">
              <div class="card-body">
                <h2>Experince</h2>
              </div>
            </div>
          </div>
        </div>
      </Leyout>
    </>
  );
};

export default index;
