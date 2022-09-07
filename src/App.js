import Nav from "./Nav";
import Gallery from "./Gallery";
import Features from "./Features";
import "./App.css";
import musicShelf200 from "./music-shelf/200.avif";
import musicShelf767 from "./music-shelf/700.avif";

function App() {
  return (
    <div className="bg-white dark:bg-grey-900 dark:bg-slate-800 ">
      <Nav />
      <div className="px-4">
        <div className="text-center dark:text-white">
          <h1 className="text-6xl md:text-7xl text-purple-500 font-bold">
            Hello World
          </h1>
          <h2 className="text-4xl text-purple-500 font-semibold">
            Build Your Playlist
          </h2>
          <p className="text-lg mt-4">
            <span className="bg-purple-600 font-bold">You, the user,</span>{" "}
            control what you want to hear.
          </p>
        </div>
        <div className="flex justify-center align-middle space-x-4 mt-4 mb-4">
          <div className="rounded-xl bg-lime-400 p-4 hover:bg-lime-500 cursor-pointer">
            Learn More
          </div>
          <div className="rounded-xl bg-slate-300 hover:bg-slate-400 p-4 dark:hover:bg-gray-700 cursor-pointer dark:bg-slate-400">
            Get Started
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <img
            className="mt-4 md:h-1/2 md:w-1/2 border-4 border-black dark:border-white rounded-xl"
            alt="music shelf"
            srcSet={musicShelf200 + ' 500w,' + musicShelf767 + ' 700w'}
          >
          </img>
        </div>

        <Gallery />

        <div className="mt-8 text-center md:px-24 py-24 dark:text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Sometimes, you don't know what you want
          </h3>
          <p className="font-light max-w-2xl mx-auto mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            gravida eleifend massa et bibendum. Vestibulum a enim sit amet
            lectus ullamcorper iaculis vitae vel turpis.
          </p>
          <p>-Bob D. Musichead</p>
          <p className="font-light">Director</p>
        </div>

        <Features />
      </div>
    </div>
  );
}

export default App;
