import Intro from "../Intro.js";
import Data from "../../constants.js";

const AboutMe = () => {
  return (
    <div className="page-section-Container">
      <Intro Name={"About Me"} Description={Data.Description}></Intro>
      <h2 style={{ textAlign: "center" }}></h2>
      <div className="row">
        <div className="column">
          <div className="aboutMeCard">
            <div className="aboutMeContainer">
              <h2>Interests</h2>
              <p className="title">
                Things I'm passionate about, in no particular order:
              </p>
              <ul className="cardLists">
                <li>Advances in technology, be it software or hardware</li>
                <li>
                  Dogs - I love cats as well, but have deadly allergies to them.
                  Dogs I'm fortunate enough to handle
                </li>
                <li>Philosophical discussions</li>
              </ul>

              {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p> */}
            </div>
          </div>
        </div>

        <div className="column">
          <div className="aboutMeCard">
            <div className="aboutMeContainer">
              <h2>Hobbies</h2>
              <p className="title">
                How I spend my free time, between working hard and spending time
                with my partner:
              </p>
              <ul className="cardLists">
                <li>
                  Its important to remember to keep our childhood imagination.
                  This allows us to be creative, innovative and more accepting
                  of others. Watching anime allows me to foster this
                </li>
                <li>
                  {" "}
                  I listen to metal music, specifically Metalcore, but I enjoy
                  all flavors from hard rock to djent
                </li>
                <li>
                  I try my best to stay in shape. The way I accomplish this is
                  by weightlifting. My current lifts are: 195 bench, 275 squat,
                  375 deadlift
                </li>
                <li>
                  I grew up playing xbox and ever since Halo 2 and COD4 I have
                  remained an avid gamer. I like to play story driven cinematic
                  type games, but consistently play League of Legends. I'm a
                  diamond adc/lee sin player.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="aboutMeCard">
            <div className="aboutMeContainer">
              <h2>Philosophies</h2>
              <p className="title">
                How I view the world and some of my beliefs:
              </p>
              <ul className="cardLists">
                <li>
                  There is no substitute for hard work. Anything worthwhile in
                  life requires hard work to obtain. If getting or achieving
                  these things were easy, then you were more lucky than others
                </li>
                <li>
                  On the opposite end, what good are dreams, if all one does is
                  work? There's more to life than hitting the books, I hope you
                  know.
                </li>
                <li>
                  Lady Luck absolutely does exist and one should be grateful
                  when she favors them
                </li>
                <li>
                  If you dont like the hand that fate's dealt you with, fight
                  for a new one
                </li>
                <li>
                  After experiencing the deaths of friends, I've learned to
                  treasure life, because unfortunately it can be taken away at
                  any time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
