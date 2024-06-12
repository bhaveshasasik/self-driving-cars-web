import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import "./Global.css";

export default function Home() {
  const [isContextPopupOpen, setIsContextPopupOpen] = useState(false);
  const [isWhyPopupOpen, setIsWhyPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsContextPopupOpen(false);
      setIsWhyPopupOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="w-full h-full">
      <div className='bg-tesla-background bg-cover bg-center h-screen'>
        <h1 className="font-Tesla text-xl mx-3">FESLA</h1>
        <h1 className="font-DMSans font-medium text-8xl text-center text-[#171A20] mt-40">Self Driving Cars</h1>
      </div>

      <div className='bg-garage-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-8xl text-center text-white p-[350px]">Context Behind Self-Driving Automobiles</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Context </button>} 
            modal 
            nested
            open={isContextPopupOpen}
            onClose={() => setIsContextPopupOpen(false)}
            onOpen={() => setIsContextPopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.7)' }}
          >
            {close => (
              <div className="w-[2000px] h-auto">
                <h1 className='w-full font-DMSans text-white text-4xl font-bold my-3 shadow-lg'>What is a Self-Driving Car?</h1>
                <p className='font-DMSans text-3xl text-white'>
                  Self Driving Cars are revolutionizing the way we think about transportation. 
                  These vehicles are built to navigate and drive without human intervention, 
                  using advanced technologies like sensors, cameras, and artificial intelligence.
                </p>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> Why?</button>} 
            modal 
            nested
            open={isWhyPopupOpen}
            onClose={() => setIsWhyPopupOpen(false)}
            onOpen={() => setIsWhyPopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.7)' }}
          >
            {close => (
              <div className="w-[1000px] h-auto">
                <h1 className='w-full font-DMSans text-white text-4xl font-bold my-3 shadow-lg'>Why Self-Driving Cars?</h1>
                <p className='font-DMSans text-3xl text-white'>
                  <ul>
                    <li>Safety: Higher risk of an accident caused by human error</li>
                    <li>Efficiency: Less fuel consumption and smoother transportations</li>
                    <li>Accessibility: Better mobility for all types of people, which include the elderly and disabled</li>
                  </ul>
                </p>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className='bg-forest-background bg-cover bg-center h-screen relative'>
      <h1 className="font-DMSans font-medium text-8xl text-center text-white p-[350px]">Where do the issues of automobiles and the transporation system stem from?</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
          <button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Test </button>
          <button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> Test</button>
        </div>
      </div>
      <div className='bg-self-background bg-cover bg-center h-screen relative'>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
          <button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Test </button>
          <button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> Test</button>
        </div>
      </div>
      <div className='bg-conclusion-background bg-cover bg-center h-screen relative'>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2 ">
          <button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Test </button>
          <button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> Test</button>
        </div>
      </div>
    </main>
  );
}
