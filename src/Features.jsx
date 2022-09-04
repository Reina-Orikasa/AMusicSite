import React, { useState } from 'react';
import Design from './Design';

function Features() {
  const [mood, updateMood] = useState();
  console.log(mood);
  return (
    <div className="md:pl-24 text-center md:text-left pb-24">
      <div className="dark:text-white">
        <h3 className="text-4xl font-bold mb-4">Design Your Own</h3>
        <p className="md:w-1/2 font-light mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aut perferendis ex eum vel qui consectetur officiis voluptatum
          mollitia odit reiciendis sequi numquam accusantium, nam cum libero
          officia dolore.
        </p>

        <h4 className="text-2xl font-semibold mb-4">Pick Your Theme</h4>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 px-8 text-center">
        <figure className="rounded-xl bg-amber-200 p-4 space-y-4">
          <img
            src="https://images.unsplash.com/photo-1639218690253-f2f69df61251?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="relaxing"
          ></img>
          <figcaption>Relaxing</figcaption>
          <button
            className="border-2 bg-fuchsia-100 rounded-full px-3 py-2 mt-6 hover:bg-fuchsia-400 font-semibold"
            onClick={() => updateMood('Relaxing')}
          >
            Select
          </button>
        </figure>

        <figure className="rounded-xl bg-pink-200 p-4 space-y-4">
          <img
            src="https://images.unsplash.com/photo-1639171430793-544183b40ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt="creativity"
          ></img>
          <figcaption>Creative</figcaption>
          <button
            className="border-2 bg-fuchsia-100 rounded-full px-3 py-2 mt-6 hover:bg-fuchsia-400 font-semibold"
            onClick={() => updateMood('Creative')}
          >
            Select
          </button>
        </figure>

        <figure className="rounded-xl bg-slate-200 p-4 space-y-4">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Studying"
          ></img>
          <figcaption>Study</figcaption>
          <button
            className="border-2 bg-emerald-200 rounded-full px-3 py-2 mt-6 hover:bg-emerald-400 font-semibold"
            onClick={() => updateMood('Study')}
          >
            Select
          </button>
        </figure>
      </div>
      {mood !== undefined ? (
        <p class="text-xl mt-4 font-semibold dark:text-white">
          Your theme is {mood}
        </p>
      ) : (
        ''
      )}
      {mood === undefined ? '' : <Design mood={mood} />}
    </div>
  );
}

export default Features;
