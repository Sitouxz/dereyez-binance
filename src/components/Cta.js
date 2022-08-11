import React from 'react';

export default function Cta() {
  return (
    <div className="lg:mt-20">
      <h1 className="font-bold text-7xl mb-8 text-center lg:text-start">
        Lorem ipsum <br /> dolor sit amet.
      </h1>
      <p className="text-2xl mb-8 text-center lg:text-start">
        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nihil,
        deserunt?
      </p>
      <div className="flex justify-center xl:justify-start items-center">
        <button className="bg-yellow-300 text-slate-900 rounded-lg py-2 px-20 font-[500]">
          Profile
        </button>
      </div>
    </div>
  );
}
