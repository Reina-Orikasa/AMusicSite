function Nav() {
  return (
    <div>
      <div className="flex p-4 space-x-4 dark:text-white">
        <h2 className="text-2xl pt-1">AMusicSite</h2>
        <div className="flex items-center space-x-6">
          <a
            className="hover:bg-slate-400 rounded-xl p-2"
            href="https://michaelztam.com"
          >
            Link 1
          </a>
          <a
            className="hover:bg-slate-400 rounded-xl p-2"
            href="https://michaelztam.com"
          >
            Link 2
          </a>
          <a
            className="hover:bg-slate-400 rounded-xl p-2"
            href="https://michaelztam.com"
          >
            Link 3
          </a>
        </div>
        <div className="flex justify-around">
          <button className="bg-slate-500 rounded-xl p-2 hover:bg-slate-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
