import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useRef } from "react";
import { useHrForword, useLinkFallDown, useTextUpper,  useBoxBright } from "../hooks/Gsap";
 const Header = () => {

  const link1 = useRef(null)
  const link2 = useRef(null)
  const link3 = useRef(null)
  const link4 = useRef(null)

  const linkArr = [link1, link2,link3, link4];
  useLinkFallDown(linkArr)

  const hrRef1 = useRef(null)
  const hrRef2 = useRef(null)
  const hrRef3 = useRef(null)
  const hrRef4 = useRef(null)

  const hrArr = [hrRef1,hrRef2,hrRef3,hrRef4]
  useHrForword(hrArr)

  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)
  const text4 = useRef(null)
  const text5 = useRef(null)
  const text6 = useRef(null)

  const textArr = [text1,text2,text3,text4,text5,text6]
  useTextUpper(textArr)

  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)

  const boxArr = [box1,box2,box3]
  useBoxBright(boxArr)
  return (
    <div className="header container">
      <div className="row">
        <h2  ref={text1}>
          H<i>oss</i>ain
        </h2>
        <h2 ref={text2}>
          A<i>h</i>me<i>d</i>
        </h2>
      </div>
      <hr ref={hrRef1}/>
      <div className="row">
        <span ref={link1}> react js developer</span>
        <a ref={link2} href="https://www.google.com" target="_blank" rel="noreferrer">
          vew Rusume
        </a>
        <a ref={link3}
          href="mailto:mrhossainahmed7@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send email
        </a>
        <Link ref={link4} to="/contact">Contact</Link>
      </div>

      <div className="row">
        <Link to='/about' className="about box" ref={box1}>
          <span>About</span>
          <span><BsArrowUpRightCircle/></span>
        </Link>
        <h2 ref={text3}>Aspiring </h2>
        <Link to='/project' className="projects box"  ref={box2}>
          <span>projects</span>
          <span><BsArrowUpRightCircle/></span>
        </Link>
      </div>
      <hr ref={hrRef2}/>
      <div className="row">
        <h2 ref={text4}><i> react</i> js deve<i>l</i>ope<i>r</i> </h2>
      </div>
      <hr ref={hrRef3}/>
      <div className="row">
        <h2 ref={text5}>based</h2>
        <Link to='/skills' className="skills box" ref={box3}>
          <span>Skills</span>
          <span><BsArrowUpRightCircle/></span>
        </Link>
        <h2 ref={text6}>in Saudi arabia</h2>
      </div>
      <hr ref={hrRef4}/>
    </div>
  );
};

export default Header