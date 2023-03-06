import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
export const Header = () => {
  return (
    <div className="header container">
      <div className="row">
        <h2>
          H<i>oss</i>ain
        </h2>
        <h2>
          A<i>h</i>me<i>d</i>
        </h2>
      </div>
      <hr />
      <div className="row">
        <span> react js developer</span>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          vew Rusume
        </a>
        <a
          href="mailto:mrhossainahmed7@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send email
        </a>
        <Link to="/contact"> Contact me</Link>
      </div>

      <hr />
      <div className="row">
        <Link to='/about' className="about box">
          <span>About</span>
          <span><BsArrowUpRightCircle/></span>
        </Link>
        <h2>Aspiring </h2>
        <Link to='/project' className="projects box">
          <span>projects</span>
          <span><BsArrowUpRightCircle/></span>
        </Link>
      </div>
      <hr />
      <div className="row">
        <h2><i> react</i> js deve<i>l</i>ope<i>r</i> </h2>
      </div>
      <hr />
      <div className="row">
        <h2>based</h2>
        <Link to='/skills' className="skills box">
          <span>Skills</span>
          <span><BsArrowUpRightCircle/></span>
        </Link>
        <h2>in Saudi arabia</h2>
      </div>
      <hr />
    </div>
  );
};
