function Nav() {
  return (
    <div className="bg-slate-700 px-4 mb-4">
      <div className="flex p-4 space-x-4 text-white">
        <h2 className=" text-lg md:text-2xl pt-1">AMusicSite</h2>
        <div className="flex items-center space-x-1 md:space-x-6">
          <a
            className="hover:bg-slate-400 rounded-xl p-2"
            href="https://michaelztam.com"
          >
            Link
          </a>
          <a
            className="hover:bg-slate-400 rounded-xl p-2"
            href="https://michaelztam.com"
          >
            Link
          </a>
          <a
            className="hover:bg-slate-400 rounded-xl p-2"
            href="https://michaelztam.com"
          >
            Link
          </a>
        </div>
        <div className="flex justify-around">
          <button className="bg-slate-500 rounded-xl p-2 md:p-2 hover:bg-slate-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
