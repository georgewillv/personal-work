import one_piece_map from "../thumbnail_images/one_piece_map.png";
import tanjiro_smile from "../thumbnail_images/tanjiro_smile.jpg";
import ua_school from "../thumbnail_images/ua_school.jpg";
import kakashi from "../thumbnail_images/kakashi_sensei.jpg";
import anime_pc from "../thumbnail_images/anime_pc.jpg";
import skill_tree from "../thumbnail_images/skill_tree1.jpg";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black",
  focus: "none",
  visited: "none",
};

const Thumbnails = () => {
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <Link to="/AboutMe" style={linkStyle}>
                <div
                  style={{
                    backgroundImage: `url(${tanjiro_smile})`,
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
                    <b>About Me</b>
                  </text>
                </div>
              </Link>

              <div class="card-body">
                <p class="card-text">Interests, hobbies, and philosophies</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <Link to="/CareerJourney" style={linkStyle}>
                <div
                  style={{
                    backgroundImage: `url(${one_piece_map})`,
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
                    <b>Career Journey</b>
                  </text>
                </div>
              </Link>

              <div class="card-body">
                <p class="card-text">Where I've been and What I did</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <Link to="/Education" style={linkStyle}>
                <div
                  style={{
                    backgroundImage: `url(${ua_school})`,
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
                    <b>Education</b>
                  </text>
                </div>
              </Link>
              <div class="card-body">
                <p class="card-text">Where I studied and what I learned</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>

          <div class="col">
            <div>
              <br></br>
              <br></br>
            </div>
            <div class="card shadow-sm">
              <Link to="/Skills" style={linkStyle}>
                <div
                  style={{
                    backgroundImage: `url(${skill_tree})`,
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
                    <b>Skills</b>
                  </text>
                </div>
              </Link>

              <div class="card-body">
                <p class="card-text">What I'm good at</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <br></br>
              <br></br>
            </div>
            <div class="card shadow-sm">
              <Link to="/Mentors" style={linkStyle}>
                <div
                  style={{
                    backgroundImage: `url(${kakashi})`,
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
                    <b>Mentors</b>
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
          </div>
          <div class="col">
            <div>
              <br></br>
              <br></br>
            </div>
            <div class="card shadow-sm">
              <Link to="/Contact" style={linkStyle}>
                <div
                  style={{
                    backgroundImage: `url(${anime_pc})`,
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
                    <b>Contact Me</b>
                  </text>
                </div>
              </Link>

              <div class="card-body">
                <p class="card-text">Click for related contact information</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
