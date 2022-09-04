function Gallery() {
  return (
    <div className="text-center mt-8 md:mt-32 px-8">
      <h3 className="text-3xl font-bold mb-8 dark:text-white">
        What some of our users have made.
      </h3>
      <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
        <figure className="rounded-xl bg-gray-200 p-4 space-y-4">
          <img
            src="https://images.unsplash.com/photo-1637580980556-085dee659c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt="example"
          ></img>
          <figcaption>Adventure Theme by user Bikey.</figcaption>
          <button className="border-2 border-black rounded-full px-3">
            Explore
          </button>
        </figure>
        <figure className="rounded-xl bg-gray-200 p-4 space-y-4">
          <img
            src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
            alt="example"
          ></img>
          <figcaption>Chill Playlist by user Dyr</figcaption>
          <button className="border-2 border-black rounded-full mt-3 px-3">
            Explore
          </button>
        </figure>
        <figure className="rounded-xl bg-gray-200 p-4 space-y-4">
          <img
            src="https://images.unsplash.com/photo-1637756856486-9d0cbe42a560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="example"
          ></img>
          <figcaption>Passing Time by user Fish</figcaption>
          <button className="border-2 border-black rounded-full mt-3 px-3">
            Explore
          </button>
        </figure>
      </div>
      <button className="border-2 bg-fuchsia-100 rounded-full px-3 py-2 mt-6 hover:bg-fuchsia-400 font-semibold">
        Explore More
      </button>
    </div>
  );
}

export default Gallery;
