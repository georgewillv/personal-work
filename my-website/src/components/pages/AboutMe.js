import Intro from "../Intro.js";
import Data from "../../constants.js";

import friends from "../../thumbnail_images/friends.jpg";
import zoro from "../../thumbnail_images/zoro.jpg";
import thought from "../../thumbnail_images/thoughtful.jpg";

const AboutMe = () => {
  return (
    <div className="page-section-Container">
      <Intro Name={"About Me"} Description={Data.Description}></Intro>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${friends})`,
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
                  5 things about me
                </text>
              </div>

              <div class="card-body">
                <p class="card-text">
                  <ul className="cardLists">
                    <p>
                      <small>
                        {" "}
                        Pictured above is a close friend who is in Med School,
                        myself, and another close friend obtaining his PhD.
                      </small>
                    </p>
                    <li>
                      I've worked many odd jobs before obtaining my degree.
                      These jobs include, working at Target, goodwill, a pizza
                      joint, and a tech help center.
                    </li>
                    <li>
                      I lived in NC for the majority of my adolescent years,
                      before my family moved back to Minnesota. I still miss the
                      beaches there.
                    </li>
                    <li>
                      I spent a long time in college and am very thankful for
                      it. While I learned a lot via coursework I learned even
                      more about how the world works.
                    </li>
                    <li>
                      {" "}
                      My favorite bands are Currents, Polaris, Avenged
                      Sevenfold, Crown the Empire, While She Sleeps, and
                      Picturesque.
                    </li>
                    <li>
                      I love building computers. My current rig is a 3800XT +
                      FTW3 3070Ti in a humble case.
                    </li>
                  </ul>
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${zoro})`,
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
                  Hobbies
                </text>
              </div>

              <div class="card-body">
                <p class="card-text">
                  <ul className="cardLists">
                    <li>
                      Its important to remember to keep our childhood
                      imagination. This allows us to be creative, innovative and
                      more accepting of others. Watching anime allows me to
                      foster this
                    </li>
                    <li>
                      {" "}
                      I listen to metal music, specifically Metalcore, but I
                      enjoy all flavors from hard rock to djent
                    </li>
                    <li>
                      I try my best to stay in shape. The way I accomplish this
                      is by weightlifting. My current lifts are: 195 bench, 275
                      squat, 375 deadlift
                    </li>
                    <li>
                      I grew up playing xbox and ever since Halo 2 and COD4 I
                      have remained an avid gamer. I like to play story driven
                      cinematic type games, but consistently play League of
                      Legends. I'm a diamond adc/lee sin player.
                    </li>
                  </ul>
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <div
                style={{
                  backgroundImage: `url(${thought})`,
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
                  Philosophies
                </text>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <ul className="cardLists">
                    <li>
                      There is no substitute for hard work. Anything worthwhile
                      in life requires hard work to obtain. If getting or
                      achieving these things were easy, then you were more lucky
                      than others
                    </li>
                    <li>
                      On the opposite end, what good are dreams, if all one does
                      is work? There's more to life than hitting the books, I
                      hope you know.
                    </li>
                    <li>
                      Lady Luck absolutely does exist and one should be grateful
                      when she favors them
                    </li>
                    <li>
                      If you dont like the hand that fate's dealt you with,
                      fight for a new one
                    </li>
                    <li>
                      After experiencing the deaths of friends, I've learned to
                      treasure life, because unfortunately it can be taken away
                      at any time
                    </li>
                  </ul>
                </p>
                <div class="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
