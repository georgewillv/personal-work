import one_piece_map from "../thumbnail_images/one_piece_map.png";
import tanjiro_smile from "../thumbnail_images/tanjiro_smile.jpg";
import ua_school from "../thumbnail_images/ua_school.jpg";
import kakashi from "../thumbnail_images/kakashi_sensei.jpg";
import anime_pc from "../thumbnail_images/anime_pc.jpg";
import skill_tree from "../thumbnail_images/skill_tree1.jpg";
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
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
                  <Link to="/AboutMe" style={{ linkStyle }}>
                    <b>About Me</b>
                  </Link>
                </text>
              </div>
              <div class="card-body">
                <p class="card-text">Interests, hobbies, and philosophies</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
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
                  <Link to="/CareerJourney" style={{ linkStyle }}>
                    <b>Career Journey</b>
                  </Link>
                </text>
              </div>
              <div class="card-body">
                <p class="card-text">Where I've been and What I did</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
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
                  <Link to="/Education" style={{ linkStyle }}>
                    <b>Education</b>
                  </Link>
                </text>
              </div>
              <div class="card-body">
                <p class="card-text">Where I studied and what I learned</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>

          <div class="col">
            <div>
              <text
                style={{
                  position: "relative",
                  bottom: "15px",
                  fontSize: "28px",
                }}
              >
                <Link to="/Skills" style={{ linkStyle }}>
                  <b>Skills</b>
                </Link>
              </text>
            </div>
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${skill_tree})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              ></div>
              <div class="card-body">
                <p class="card-text">What I'm good at</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <text
                style={{
                  position: "relative",
                  bottom: "15px",
                  fontSize: "28px",
                }}
              >
                <Link to="/Mentors" style={{ linkStyle }}>
                  <b>Mentors</b>
                </Link>
              </text>
            </div>
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${kakashi})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              ></div>
              <div class="card-body">
                <p class="card-text">
                  Astounding people who made an impact on my life
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <text
                style={{
                  position: "relative",
                  bottom: "15px",
                  fontSize: "28px",
                }}
              >
                <Link to="/Contact" style={{ linkStyle }}>
                  <b>Contact Me</b>
                </Link>
              </text>
            </div>
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${anime_pc})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "225px",
                  width: "100%",
                }}
              ></div>
              <div class="card-body">
                <p class="card-text">Click for related contact information</p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>

          {/* <div class="col">
            <div class="card shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
