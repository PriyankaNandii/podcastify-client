import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export default function PreventUnauthorizedPerson() {
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
    <div className="space-y-5 py-5 flex items-center justify-center flex-col bg-gradient-to-l  from-[#2a3d53] from-15% via-[#2f2a61] via-50% to-[#2a3d53] to-80% text-white h-full lg:min-h-screen">
      <h1 className="text-xl">Excuse me Mr.</h1>
      <h1>We have notice that you are trying to access illegally</h1>
      <h1>Please return home safely before take action for you</h1>
      <Link to="/" className="btn btn-warning" onClick={() => logOut()}>
        Return Home
      </Link>
      <div className="h-[500px]" ref={container}>
        <div className="box size-28 bg-gradient-to-l  from-[#2a3d53] from-15% via-[#2f2a61] via-50% to-[#e69833] to-70% text-white bg-slate-700 p-2 mg:p-8 flex items-center justify-center jt rounded-xl">
          Warning 1
        </div>
        <div className="box size-28 bg-gradient-to-l  from-[#2a3d53] from-15% via-[#2f2a61] via-50% to-[#ec714b] to-80% text-white bg-slate-700 p-2 mg:p-8 flex items-center justify-center jt rounded-xl">
          Warning 2
        </div>
        <div className="box size-28 bg-gradient-to-l  from-[#2a3d53] from-15% via-[#2f2a61] via-50% to-[#f34906] to-80% text-white bg-slate-700 p-2 mg:p-8 flex items-center justify-center jt rounded-xl">
          Warning 3
        </div>
      </div>
    </div>
  );
}
