import Intro from "../Intro.js";

import fma from "../../thumbnail_images/fma_reaching_out.png";

const Contact = () => {
  return (
    <div className="page-section-Container">
      <Intro
        Name={"Contact Me"}
        Description={
          "Sometimes, reaching out and taking someone's hand is the beginning of a journey. At other times, it is allowing another to take yours."
        }
      ></Intro>
      <img src={fma} alt="reaching-out"></img>
      <br></br>
      <br></br>
      <br></br>
      <p>
        Please reach out via{" "}
        <a href="https://www.linkedin.com/in/georgewillv/">LinkedIn</a>. I will
        not disclose my personal contact information here due to potential spam{" "}
      </p>
    </div>
  );
};

export default Contact;
