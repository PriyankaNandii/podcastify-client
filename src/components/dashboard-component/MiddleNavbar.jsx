import { useState } from "react";
import RightNavbar from "./RightNavbar";
import Cards from "./cards/Cards";
import Music from "./cards/Music";
import MusicPlayer from "./cards/MusicPlayer";
import mike from "/music.jpg";
import useOnlyAdmin from "../../Hooks/useOnlyAdmin";
import Statistics from "./Statistics/Statistics";
import useCheckUserRole from "../../Hooks/useCheckUserRole";
export default function MiddleNavbar() {
  const { isAdmin, loading } = useOnlyAdmin();
  const { role } = useCheckUserRole();
  return (
    <>
      {loading ? (
        <h1 className="text-center text-lg">Please wait...</h1>
      ) : (
        <>
          {role === "admin" && (
            <>
              <Statistics />
            </>
          )}
          {(role === "podcaster" || role === "user") && (
            <div className="p-2 md:p-5 bg-[#18181F] flex items-start flex-col-reverse lg:flex-row justify-center relative">
              {/* discover section */}
              <div className="p-2">
                <section className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-white p-4">
                  <h1 className="lg:text-2xl font-semibold">Discover</h1>
                  <div className="flex items-center justify-center gap-3">
                    <div className="relative bg-[#616166] rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 absolute left-1 top-1/2 -translate-y-1/2">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                      <input
                        type="text"
                        name="searchBox"
                        id=""
                        placeholder="Songs, artist or podcasts"
                        className="input input-md appearance-none ml-4 bg-[#616166] border-none"
                      />
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-10 bg-[#23232A] p-2 rounded-md text-white cursor-pointer">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                      />
                    </svg>
                  </div>
                </section>
                {/* Melody section */}

                <section className="flex flex-col lg:flex-row items-center justify-center gap-4 p-2 md:p-5 mt-4 border rounded-3xl bg-[#232329]">
                  <div className="space-y-3 col-span-3 text-white">
                    <h1>MELODY</h1>
                    <h1 className="lg:text-2xl font-semibold">
                      Listen to music premium
                    </h1>
                    <p className="text-[#616166]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem blanditiis nulla accusantium neque beatae cupiditate
                      fuga nobis expedita quidem, veritatis dignissimos saepe
                      similique minus fugiat eveniet ullam ratione maxime in?
                    </p>
                    <button className="btn bg-red-800 text-white border-none">
                      Explore Now
                    </button>
                  </div>
                  <aside>
                    <img src={mike} alt="" className="w-40 md:w-96 h-40" />
                  </aside>
                </section>

                {/* Top Artist section */}
                <section className="mt-14 py-2 text-white">
                  <div className="flex items-center justify-between">
                    <h1 className="lg:text-2xl font-semibold">Top Artist</h1>
                    <button>See all</button>
                  </div>
                  <div className="mt-4">
                    <Cards />
                  </div>
                </section>
                {/* Popular section */}
                <section className="mt-14 py-2 text-white">
                  <div className="flex items-center justify-between">
                    <h1 className="lg:text-2xl font-semibold">Popular</h1>
                    <button>See all</button>
                  </div>
                  <div className="space-y-4 py-4">
                    <Music />
                  </div>
                </section>
              </div>
              {role !== "user" && (
                <div className="w-full lg:w-[800px] justify-center items-center flex">
                  <RightNavbar />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
