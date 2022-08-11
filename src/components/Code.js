import React from 'react';
import blobs from '../assets/img/blobs.svg';
import code from '../assets/img/code.png';

export default function Code() {
  const copy = async () => {
    await navigator.clipboard.writeText('110137536');
    alert('Text copied');
  };
  return (
    <div className="relative mt-12 xl:mt-0">
      <img
        src={blobs}
        alt=""
        className="hidden xl:block absolute right-0 top-0 -z-10 max-w-none"
      />
      <div className="xl:absolute xl:right-48 xl:top-48">
        <img src={code} alt="" className="max-w-none z-50" />
        <div className="bg-slate-900 flex justify-between items-center p-2 rounded-lg mt-4">
          <p className="font-bold text-2xl">
            Barol
            <span className="text-yellow-100  font-medium"> (110137536)</span>
          </p>
          <button
            onClick={copy}
            className="bg-yellow-300 text-slate-900 rounded-lg py-2 px-6 font-[500]">
            Copy!
          </button>
        </div>
      </div>
    </div>
  );
}
