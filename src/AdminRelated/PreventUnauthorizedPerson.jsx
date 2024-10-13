import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export default function PreventUnauthorizedPerson({ email, name }) {
  const { logOut } = useAuth();
  const container = useRef();
  const tl = useRef();

  useEffect(() => {
    toggleTimeline();
  }, []);
  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, "<")
        .to(boxes[2], { y: -166 })
        .reverse();
    },
    { scope: container }
  );
  return (
    <div className="space-y-5 py-5 flex items-center justify-center flex-col">
      <h1 className="text-xl">Excuse me Mr. {name}</h1>
      <h1>We have notice that you are trying to access illegally</h1>
      <h1>Please return home safely before take action for you</h1>
      <Link to="/" className="btn btn-outline" onClick={() => logOut()}>
        Return Home
      </Link>
      <div className="h-[500px]" ref={container}>
        <div className="box h-28 w-28 bg-slate-700 p-2 mg:p-8 flex items-center justify-center jt rounded-xl">
          Warning 1
        </div>
        <div className="box h-28 w-28 bg-slate-700 p-2 mg:p-8 flex items-center justify-center jt rounded-xl">
          Warning 2
        </div>
        <div className="box h-28 w-28 bg-slate-700 p-2 mg:p-8 flex items-center justify-center jt rounded-xl">
          Warning 3
        </div>
      </div>
    </div>
  );
}
