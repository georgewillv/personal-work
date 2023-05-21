import Intro from "../Intro.js";
import versaggi from "../../thumbnail_images/profversaggi_avatar-normal.png";
import jeff from "../../thumbnail_images/jeff.jpg";
import dakota from "../../thumbnail_images/dakota_anime.jpg";

const linkStyle = {
  textDecoration: "none",
  color: "black",
  focus: "none",
  visited: "none",
};
const Mentors = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Mentors"}
        Description={
          "Better than a thousand days of diligent study is one day with a great teacher."
        }
      ></Intro>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${versaggi})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              >
                <text
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontSize: "28px",
                  }}
                >
                  Matthew Versaggi
                </text>
              </div>

              <div class="card-body">
                <p class="card-text">
                  <a href="http://www.matt-versaggi.com/resume/">Matt</a> was
                  instrumental in educating me in wide aspects of life; from
                  attitude, fitness, and general wellbeing to all things
                  technology, Matt has remained a huge influence to me and many
                  others.
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${jeff})`,
                  backgroundPositionY: "0px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              >
                <text
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontSize: "28px",
                  }}
                >
                  Jeff Arnold
                </text>
              </div>

              <div class="card-body">
                <p class="card-text">
                  <a href="https://www.linkedin.com/in/jeff-arnold-a0720ba/">
                    Jeff
                  </a>{" "}
                  was my boss as an intern. Once I was a fulltime employee he'd
                  always encourage me to foster new ideas. He is always
                  concerned about others and brings happiness into any room he's
                  in.
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${dakota})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              >
                <text
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontSize: "28px",
                  }}
                >
                  Dakota O'Dell
                </text>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <a href="https://www.linkedin.com/in/dakotaodell/">Dakota</a>{" "}
                  was my lead engineer and would always explain things with
                  patience, intelligence and kindness. He is what developers
                  should strive to become
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>

          {/* <div class="col">
            <div>
              <br></br>
              <br></br>
            </div>
            <div class="card shadow-sm">
              <Link to="/Skills" style={linkStyle}>
              <div
                style={{
                  backgroundImage: `url(${"test"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              >
                <text
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontSize: "28px",
                  }}
                >
                  Joe Saperstein
                </text>
              </div>
              </Link>

              <div class="card-body">
                <p class="card-text">
                  Joe is a front end developer God and is a very good at coaxing
                  the correct way to do things out of me. I know most of my
                  React knowledge thanks to his support.
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div> */}
          {/* <div class="col">
            <div>
              <br></br>
              <br></br>
            </div>
            <div class="card shadow-sm">
              <Link to="/Mentors" style={linkStyle}>
              <div
                style={{
                  backgroundImage: `url(${"test"})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              >
                <text
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontSize: "28px",
                  }}
                >
                  Adam Blacke
                </text>
              </div>
              </Link>

              <div class="card-body">
                <p class="card-text">
                  Astounding people who made an impact in my life
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
