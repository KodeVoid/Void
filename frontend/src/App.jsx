import { useState } from 'react';
import './App.css';
import Window from './components/terminal';
import EasterEgg from './components/EasterEgg';

import { ExampleApp } from './components/Example';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black/10 text-green-400 font-mono px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-[40px] md:text-[50px] font-bold text-green-400 backdrop-blur-sm bg-black/30 border border-white/10 px-6 py-2 rounded-2xl shadow-md shadow-green-500/20">
          WELCOME TO THE VOID
        </h1>
      </div>
      {/* <Window /> */}
      <div className='bg-white'>
        <ExampleApp/>
      </div>
    </div>
  );
}

export default App;
