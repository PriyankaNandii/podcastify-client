import LeftNavbar from "../../components/dashboard-component/LeftNavbar";

export default function Dashboard() {
  return (
    <div>
      <section className="flex items-center justify-center">
        <div className="w-1/4 border-2 border-black">
          <LeftNavbar />
        </div>
        <div className="w-1/2 border-2 border-black"></div>
        <div className="w-1/4 border-2 border-black"></div>
      </section>
    </div>
  );
}
