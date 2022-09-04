import React, { useState } from 'react';
import { useEffect } from 'react';

function Design(props) {
  const [musicList, setMusicList] = useState([]);
  console.log(musicList);
  let theme = '';
  console.log(props.child);
  if (props.mood === 'Relaxing') {
    theme = 'bg-amber-200';
  } else if (props.mood === 'Creative') {
    theme = 'bg-pink-200';
  } else {
    theme = 'bg-slate-200';
  }
  const handleClick = (e) => {
    const value = e.target.value;
    setMusicList((prev) => [...prev, value]);
  };

  useEffect(() => {
    setMusicList([]);
  }, [props.mood]);

  const musicItems = musicList.map((song) => {
    return <li>{song}</li>;
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-8 dark:text-white text-center mb-4">
        Next, add your music
      </h1>
      <div className="flex justify-center align-middle space-x-2">
        <button
          onClick={handleClick}
          value={'lorem'}
          className={theme + ' rounded-full px-2 py-1'}
        >
          lorem
        </button>
        <button
          onClick={handleClick}
          value={'ipsum'}
          className={theme + ' rounded-full px-2 py-1'}
        >
          ipsum
        </button>
        <button
          onClick={handleClick}
          value={'dolor'}
          className={theme + ' rounded-full px-2 py-1'}
        >
          dolor
        </button>
      </div>
      {musicList.length !== 0 ? (
        <div>
          <h1 className="text-2xl font-semibold mt-8 mb-4 dark:text-white text-center">
            Your List
          </h1>
        </div>
      ) : (
        ''
      )}
      {musicList.length !== 0 ? (
        <div className="flex justify-center align-middle">
          <div className={theme + ' rounded-xl p-4 text-center'}>
            <figure>
              <img
                src="https://source.unsplash.com/random/400x300"
                alt="street theme"
                className="rounded-md"
              />
              <figcaption className="font-light mb-4">
                {props.mood} Theme
              </figcaption>
            </figure>
            <ul>{musicItems}</ul>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Design;
