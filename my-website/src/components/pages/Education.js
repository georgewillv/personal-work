import "../../../src/styles.css";
// import uofm from "../../thumbnail_images/UofM.png";
import diploma from "../../thumbnail_images/diploma.jpg";
import fiji from "../../thumbnail_images/Phi_Gamma_Delta_Crest.png";

import Intro from "../Intro.js";

const Education = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Education"}
        Description={
          "It is the mark of an educated mind to entertain a thought without accepting it"
        }
      ></Intro>
      {/* <img src={uofm} alt="college-crest"></img> */}

      <div className="education-content-container">
        <div className="college-diploma-container">
          <h2>University of Minnesota - Twin Cities CSE</h2>

          <p className="title">Bachelors of Science - Computer Science</p>

          <div className="education-images">
            <img src={diploma} alt="my-diploma"></img>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="other-achievements">
          <h3>Other Involvements:</h3>
          <div className="college-achievements">
            <h4>Recording Secretary of Phi Gamma Delta Mu Sigma Chapter</h4>
            <img src={fiji} alt="fiji"></img>
            <p>
              Responsible for disciplinary action and communication delivery of
              90 active members.
            </p>
            <p>
              Worked on incorporating realistic Academic Goal Setting and Time
              Management Skills into the pledging process.
            </p>
            <p>
              Established philanthropic tradition of the “Phi Gamma Delta Casino
              Night” where students, friends, and families can come and play
              casino games at McNamara Alumni Center in support of cancer
              research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
