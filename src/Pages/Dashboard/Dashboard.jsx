import LeftNavbar from "../../components/dashboard-component/LeftNavbar";
import MiddleNavbar from "../../components/dashboard-component/MiddleNavbar";
import RightNavbar from "../../components/dashboard-component/RightNavbar";

export default function Dashboard() {
  return (
    <>
      <section className="grid grid-cols-4">
        <div className="">
          <LeftNavbar />
        </div>
        <div className="p-5 col-span-2 bg-[#18181F]">
          <MiddleNavbar />
        </div>
        <div className="p-5 bg-[#18181F]">
          <RightNavbar />
        </div>
      </section>
    </>
  );
}
