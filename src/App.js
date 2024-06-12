import React from 'react';
import Popup from 'reactjs-popup';
import "./Global.css";

export default function Home() {
  return(
    <main className="w-full h-full">
        <div className='bg-tesla-background bg-cover bg-center h-screen'>
          <h1 className="font-Tesla text-xl mx-3">FESLA</h1>
          <h1 className="font-DMSans font-medium text-5xl text-center text-[#171A20] mt-40">Self Driving Cars</h1>
        </div>
        <div className='bg-garage-background bg-cover bg-center h-screen relative'>
          <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
          <Popup trigger={<button type="button" className="font-DMSans text-center bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Test </button>} 
          modal nested>
            <div className='popup-content animate-anvil bg-white p-10'>
              <h1 className='font-DMSans'>Hello World!</h1>
            </div>
          </Popup>
            <button type="button" className="font-DMSans text-center bg-[#171A20] text-white w-[264px] h-[40x] rounded-md shadow-sm"> Test</button>
          </div>
        </div>
        <div className='bg-forest-background bg-cover bg-center h-screen relative'>
          <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
            <button type="button" className="font-DMSans text-center bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Test </button>
            <button type="button" className="font-DMSans text-center bg-[#171A20] text-white w-[264px] h-[40x] rounded-md shadow-sm"> Test</button>
          </div>
        </div>
        <div className='bg-self-background bg-cover bg-center h-screen relative'>
          <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
            <button type="button" className="font-DMSans text-center bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Test </button>
            <button type="button" className="font-DMSans text-center bg-[#171A20] text-white w-[264px] h-[40x] rounded-md shadow-sm"> Test</button>
          </div>
        </div>
        <div className='bg-conclusion-background bg-cover bg-center h-screen relative'>
          <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
            <button type="button" className="font-DMSans text-center bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Test </button>
            <button type="button" className="font-DMSans text-center bg-[#171A20] text-white w-[264px] h-[40x] rounded-md shadow-sm"> Test</button>
          </div>
        </div>
    </main>
    
  );
}
