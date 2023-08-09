import { Link } from "react-router-dom";
import me from "../thumbnail_images/me.jpg";

const Header = ({ dark, children }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <header>
      <div class={`navbar navbar-${dark} bg-${dark} shadow-sm">`}>
        <div class="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={me}
              width="55"
              alt="ResumeNavBarImage"
              style={{ borderRadius: "50%" }}
            />
            {children}
          </a>
          <Link to="/about_me">About Me</Link>
          <Link to="/career_journey">Career</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
