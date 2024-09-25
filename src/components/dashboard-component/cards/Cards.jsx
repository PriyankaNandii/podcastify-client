import mike from "/music.jpg";
export default function Cards() {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <div className="w-56 rounded-3xl relative">
        <img src={mike} alt="" className="rounded-t-3xl" />
        <div className="h-14 rounded-b-3xl border-2 bg-slate-400 w-full blur-sm mt-1"></div>
        <div className="text-center w-full absolute bottom-5 left-1/2 -translate-x-1/2 font-bold">
          Monir khan
        </div>
      </div>
      <div className="w-56 rounded-3xl relative">
        <img src={mike} alt="" className="rounded-t-3xl" />
        <div className="h-14 rounded-b-3xl border-2 bg-slate-400 w-full blur-sm mt-1"></div>
        <h1 className="text-center w-full absolute bottom-5 left-1/2 -translate-x-1/2 font-bold">
          Resel Gong
        </h1>
      </div>
      <div className="w-56 rounded-3xl relative">
        <img src={mike} alt="" className="rounded-t-3xl" />
        <div className="h-14 rounded-b-3xl border-2 bg-slate-400 w-full blur-sm mt-1"></div>
        <h1 className="text-center w-full absolute bottom-5 left-1/2 -translate-x-1/2 font-bold">
          Altaf Mahmud
        </h1>
      </div>
      <div className="w-56 rounded-3xl relative shadow-white">
        <img src={mike} alt="" className="rounded-t-3xl" />
        <div className="h-14 rounded-b-3xl border-2 bg-slate-400 w-full blur-sm mt-1"></div>
        <h1 className="text-center w-full absolute bottom-5 left-1/2 -translate-x-1/2 font-bold">
          Asif Mahmud
        </h1>
      </div>
    </div>
  );
}
