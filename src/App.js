import Nav from './Nav';
import Gallery from './Gallery';
import Features from './Features';
import './App.css';

function App() {
  return (
    <div className="bg-white dark:bg-grey-900 pt-5 px-4 dark:bg-slate-800 ">
      <Nav />
      <div className="text-center dark:text-white">
        <h1 className="text-6xl md:text-7xl text-purple-500 font-bold">
          Hello World
        </h1>
        <h3 className="text-4xl text-purple-500 font-semibold">
          Build Your Playlist
        </h3>
        <p className="text-lg mt-4 font-light">
          <span className="text-purple-500">You,</span>{' '}
          <span className="text-purple-500">the user</span>, control what you
          want to hear.
        </p>
      </div>
      <div className="flex justify-center align-middle space-x-4 mt-4 mb-4">
        <div className="rounded-xl bg-lime-400 p-4 hover:bg-lime-500 cursor-pointer">
          Learn More
        </div>
        <div className="rounded-xl bg-gray-800 p-4 hover:bg-gray-700 cursor-pointer text-white dark:bg-slate-400">
          Get Started
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <img
          src="https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80"
          alt=""
          className="mt-4 md:h-1/2 md:w-1/2 border-4 border-black dark:border-white rounded-xl"
        ></img>
      </div>

      <Gallery />

      <div className="mt-8 text-center md:px-24 py-24 dark:text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Sometimes, you don't know what you want
        </h3>
        <p className="font-light max-w-2xl mx-auto mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
          eleifend massa et bibendum. Vestibulum a enim sit amet lectus
          ullamcorper iaculis vitae vel turpis.
        </p>
        <p>-Bob D. Musichead</p>
        <p className="font-light">Director</p>
      </div>

      <Features />
    </div>
  );
}

export default App;
