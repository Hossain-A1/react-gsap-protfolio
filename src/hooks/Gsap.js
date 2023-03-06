import gsap from "gsap";
import { useEffect } from "react";

export const useLinkFallDown = (arr)=>{
  useEffect(()=>{
    const el = arr.map((item)=> item.current);

    gsap.fromTo(el ,{
      y:-500
    },{
      y:0,
      duration:1,
      ease:"power3",
      stagger: 0.3
    })


  },[arr])
}
// ------------------------------------------//
export const useHrForword = (arr)=>{
  useEffect(()=>{
    const el = arr.map((item)=> item.current)
    gsap.fromTo(el,{
      width: 0
    },{
      width:"100%",
      duration:1.5,
      delay:1,
      ease: "steps(12)",
      stagger: 0.3
    })
  },[arr])
}
// --------------------------//

export const useTextUpper = (arr)=>{
  useEffect(()=>{
    const el = arr.map((item)=> item.current)

    gsap.fromTo(el,{
      y:500
    },{
      y:0,
      duration:2.5,
      ease:"power4",
      delay:1.3,
      stagger:0.2
    })
  },[arr])
}
// ------------------------------------------------//
export const useBoxBright = (arr)=>{
  useEffect(()=>{
    const el = arr.map((item)=> item.current)

    gsap.fromTo(el,{
      scale: 0
    },{
      scale:1,
      duration: 2,
      delay:3.2

    })
  },[arr])
}