import MusicPlayer from "./cards/MusicPlayer";

export default function RightNavbar() {
  return (
    <section className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="lg:text-2xl font-semibold text-white">
          Friend Activity
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 bg-[#23232A] p-1 rounded-md text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
          />
        </svg>
      </div>
      <div className="mt-10">
        <MusicPlayer />
      </div>
    </section>
  );
}
