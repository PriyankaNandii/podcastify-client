import LeftNavbar from "../../components/dashboard-component/LeftNavbar";
import MiddleNavbar from "../../components/dashboard-component/MiddleNavbar";

export default function Dashboard() {
  return (
    <div>
      <section className="grid grid-cols-4">
        <div className="border-2 border-black">
          <LeftNavbar />
        </div>
        <div className="border-2 border-black p-5 col-span-2 bg-[#18181F]">
          <MiddleNavbar />
        </div>
        <div className="border-2 border-black"></div>
      </section>
    </div>
  );
}
