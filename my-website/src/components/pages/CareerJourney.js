import "../../../src/styles.css";
import alteryx from "../../thumbnail_images/alteryx.png";
import optum from "../../thumbnail_images/Optum-Logo-2011.png";

import Intro from "../Intro.js";

const CareerJourney = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Career Journey"}
        Description={
          "Timeline of which companies I've worked at and other notable achievements"
        }
      ></Intro>
      <div class="container">
        <div class="timeline">
          <div class="timeline-row">
            <div class="timeline-time">
              Summers of 2016-2019<small>Optum, United Health Group</small>
            </div>
            <div class="timeline-content">
              <h4>Optum Internships</h4>
              <p>
                Learned significant knowledge on Data Science and Machine
                Learning as an AI & ML Intern.
              </p>
              <div class="thumbs">
                <div class="thumbs">
                  <img
                    class="img-fluid rounded"
                    src={optum}
                    alt="Optum Logo"
                  ></img>
                </div>
              </div>
              <div class="">
                <span class="badge badge-pill">Python</span>
                <span class="badge badge-pill">numpy</span>
                <span class="badge badge-pill">sci-kit learn</span>
                <span class="badge badge-pill">pandas</span>
                <span class="badge badge-pill">EDA</span>
              </div>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              Summer 2019<small>Optum, United Health Group</small>
            </div>
            <div class="timeline-content">
              <h4>Optum Product Patent</h4>
              <p>
                Developed a patented Fraud Detection Algorithm using a GCN. If
                you're interested in patent documenation you can read the
                writeup{" "}
                <a href="https://patents.google.com/patent/US20210406917A1/en?oq=U.S+Patent+application+16%2f916%2c571">
                  here
                </a>
              </p>
              <div class="thumbs">
                <div class="thumbs">
                  <img
                    class="img-fluid rounded"
                    src={optum}
                    alt="Optum Logo"
                  ></img>
                </div>
              </div>
              <div class="">
                <span class="badge badge-pill">TigerGraph</span>
                <span class="badge badge-pill">AI</span>
                <span class="badge badge-pill">Python</span>
                <span class="badge badge-pill">Fraud Detection</span>
              </div>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              Summer 2021<small>Alteryx</small>
            </div>
            <div class="timeline-content">
              <h4>Data Science Intern</h4>
              <p>
                Built a drift detection plugin using for Alteryx designer
                desktop
              </p>
              <div class="thumbs">
                <img
                  class="img-fluid rounded"
                  src={alteryx}
                  alt="Alteryx image"
                ></img>
              </div>
              <div>
                <span class="badge badge-pill">Python</span>
                <span class="badge badge-pill">React</span>
                <span class="badge badge-pill">Data Science</span>
                <span class="badge badge-pill">Typescript</span>
              </div>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              Jan 2022 - May 2022<small>Alteryx</small>
            </div>
            <div class="timeline-content">
              <h4>Associate Data Scientist</h4>
              <div class="thumbs">
                <img
                  class="img-fluid rounded"
                  src={alteryx}
                  alt="Alteryx image"
                ></img>
              </div>
              <div>
                <span class="badge badge-pill">Data Analysis</span>
                <span class="badge badge-pill">Content Creation</span>
                <span class="badge badge-pill">Sales Analysis</span>
                <span class="badge badge-pill">Alteryx Core</span>
              </div>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              May 2022 - March 2023<small>Alteryx</small>
            </div>
            <div class="timeline-content">
              <h4>Intelligence Suite Engineer</h4>
              <p class="no-margin">
                Responsible for the python backend and React/Typescript frontend
                codebase of the Alteryx Intelligence Suite product. Conducted
                Code Reviews, built features, and fixed bugs related to data
                science functionality
              </p>
              <div class="thumbs">
                <img
                  class="img-fluid rounded"
                  src={alteryx}
                  alt="Alteryx image"
                ></img>
              </div>
              <div>
                <span class="badge badge-pill">Software Engineering</span>
                <span class="badge badge-pill">Python</span>
                <span class="badge badge-pill">React</span>
                <span class="badge badge-pill">Typescript</span>
                <span class="badge badge-pill">CI/CD</span>
              </div>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              March 2022 - May 2023<small>Alteryx</small>
            </div>
            <div class="timeline-content">
              <h4>Software Engineer II </h4>
              <p>
                All responsibilities of prior role plus began working on an
                experimental cloud product
              </p>
              <div class="thumbs">
                <img
                  class="img-fluid rounded"
                  src={alteryx}
                  alt="Alteryx image"
                ></img>
              </div>
              <div class="">
                <span class="badge badge-pill">Docker</span>
                <span class="badge badge-pill">FastAPI</span>
                <span class="badge badge-pill">React</span>
                <span class="badge badge-pill">Typescript</span>
                <span class="badge badge-pill">Python</span>
              </div>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">
              May 2023 - Present<small></small>
            </div>
            <div class="timeline-content">
              <p class="m-0">Actively looking for a new role!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerJourney;
