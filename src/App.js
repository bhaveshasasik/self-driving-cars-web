import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import "./Global.css";


export default function Home() {
  const [isContextPopupOpen, setIsContextPopupOpen] = useState(false);
  const [isWhyPopupOpen, setIsWhyPopupOpen] = useState(false);
  const [isTest1PopupOpen, setIsTest1PopupOpen] = useState(false);
  const [isTest2PopupOpen, setIsTest2PopupOpen] = useState(false);
  const [isTest3PopupOpen, setIsTest3PopupOpen] = useState(false);
  const [isTest4PopupOpen, setIsTest4PopupOpen] = useState(false);
  const [isTest5PopupOpen, setIsTest5PopupOpen] = useState(false);
  const [isTest6PopupOpen, setIsTest6PopupOpen] = useState(false);
  const [isTest7PopupOpen, setIsTest7PopupOpen] = useState(false);
  const [isTest8PopupOpen, setIsTest8PopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsContextPopupOpen(false);
      setIsWhyPopupOpen(false);
      setIsTest1PopupOpen(false);
      setIsTest2PopupOpen(false);
      setIsTest3PopupOpen(false);
      setIsTest4PopupOpen(false);
      setIsTest5PopupOpen(false);
      setIsTest6PopupOpen(false);
      setIsTest7PopupOpen(false);
      setIsTest8PopupOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    //Title Slide
    <main className="w-full h-full">
      <div className='bg-tesla-background bg-cover bg-center h-screen'>
        <h1 className="font-Tesla text-xl mx-3">FESLA</h1>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-[#171A20] mt-40">Self Driving Cars</h1>
      </div>

      <div className='bg-garage-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-white p-10 md:p-20 lg:p-32 xl:p-40">Context Behind Self-Driving Automobiles</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Context </button>} 
            modal 
            nested
            open={isContextPopupOpen}
            onClose={() => setIsContextPopupOpen(false)}
            onOpen={() => setIsContextPopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3 shadow-lg'>What is a Self-Driving Car?</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  Self-Driving Cars are revolutionizing the way we think about transportation. 
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
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3 shadow-lg'>Why Self-Driving Cars?</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  <ul className="space-y-4">
                    <li>Safety: Higher risk of an accident caused by human error</li>

                    <li>Efficiency: Less fuel consumption and smoother transportations</li>

                    <li>Accessibility: Better mobility for all types of people, including the elderly and disabled</li>
                  </ul> 
                </p>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className='bg-forest-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-white p-10 md:p-20 lg:p-32 xl:p-40">Where do the issues of automobiles and the transportation system stem from?</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm">The Transition</button>} 
            modal 
            nested
            open={isTest1PopupOpen}
            onClose={() => setIsTest1PopupOpen(false)}
            onOpen={() => setIsTest1PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>The Transition to Automobiles</h1>
                <div className="w-full flex justify-center">
                  <div className="w-full">
                    <img src="/timeline.svg" alt="timeline" className="w-auto h-auto scale-150"/>
                  </div>
                </div>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]">The Impacts</button>} 
            modal 
            nested
            open={isTest2PopupOpen}
            onClose={() => setIsTest2PopupOpen(false)}
            onOpen={() => setIsTest2PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>How have automobiles impacted society?</h1>
                <div className='space-y-4'>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                    In order for automobiles to be an efficient way of traveling, cities and transport networks had to be remade. It required major programs of 
                    infastructure for roads and suburban housing. As automobiles became faster and more accessible, cities started to become more spread out. The suburban
                    neighborhoods started to be built. The construction of roads, highways, and suburban communities in the Interstate Highway system created
                    a new economic boom. The government started to promote a car-centric society. They started to use zoning policies to exclude undesirable people
                    from certain neighborhoods. Spreading out the city made it harder for people who couldn't afford a car to reach destinations that used to be within a walking distance.
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                    Negatively, 1.3 million people are killed every year in road traffic crashes and the air pollution caused by the automobiles is responsible for 
                    53,000 deaths. The new technologies in modern cars such as lane-keeping or emergency braking are countered by larger automobiles making it 
                    3x more likely to kill pedestrians. 
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                    Currently, there seems to be a perpetual cycle put in place. In order to solve issues caused by automobiles, drivers turn back to other 
                    automobiles as a solution. Drivers buy larger, more powerful looking vehicles as a reaction.
                  </p>
                </div>
                
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className='bg-self-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-white p-10 md:p-20 lg:p-32 xl:p-40">Current flaws about Self-Driving Cars and Automobiles in Society</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> **BUTTON NAME** </button>} 
            modal 
            nested
            open={isTest3PopupOpen}
            onClose={() => setIsTest3PopupOpen(false)}
            onOpen={() => setIsTest3PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>**TITLE HERE**</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  **INPUT INFORMATION HERE **
                </p>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> **BUTTON NAME** </button>} 
            modal 
            nested
            open={isTest4PopupOpen}
            onClose={() => setIsTest4PopupOpen(false)}
            onOpen={() => setIsTest4PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>**TITLE HERE**</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  **INPUT INFORMATION HERE **
                </p>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className='bg-grass-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-white p-10 md:p-20 lg:p-32 xl:p-40">The Environmental Impacts of Self-Driving Cars</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Environmental Impacts </button>} 
            modal 
            nested
            open={isTest5PopupOpen}
            onClose={() => setIsTest5PopupOpen(false)}
            onOpen={() => setIsTest5PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='flex w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>What are the Environmental Impacts of Self-Driving Cars?</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  The production of advanced sensors and batteries involves energy intensive processes and raw materials, leading to environmental
                  impacts. Majority of self-driving vehicles are EVs. Demand for lithium and nickle to manufacture EV batteries will increase by 4000%
                  between 2020 - 2024 if we continue to go down the privatization of vehicles path. The emissions to manufacture self-driving cars will sky rocket by the year of 2050 according to
                  a study done by UCD. In the pie chart below, we can see the how the US gets their elecricity. 58% still make a lot of emissions and this doesn't even account for the 
                  emissions emitted when mining for precious materials that are within the Self-Driving Cars. 
                </p>
                <img src="/nationalAvg.png" alt="National Average" width={"fit"} height={"fit"}/>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> **BUTTON NAME** </button>} 
            modal 
            nested
            open={isTest6PopupOpen}
            onClose={() => setIsTest6PopupOpen(false)}
            onOpen={() => setIsTest6PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>**TITLE HERE**</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  **INPUT INFORMATION HERE **
                </p>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className='bg-dirt-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-white p-10 md:p-20 lg:p-32 xl:p-40">Why do Corporations invest so much money into Self-Driving Cars?</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> **BUTTON NAME** </button>} 
            modal 
            nested
            open={isTest7PopupOpen}
            onClose={() => setIsTest7PopupOpen(false)}
            onOpen={() => setIsTest7PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>**TITLE HERE**</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  **INPUT INFORMATION HERE **
                </p>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-white w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> **BUTTON NAME** </button>} 
            modal 
            nested
            open={isTest8PopupOpen}
            onClose={() => setIsTest8PopupOpen(false)}
            onOpen={() => setIsTest8PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '80vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-white text-2xl md:text-3xl lg:text-4xl font-bold my-3'>**TITLE HERE**</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-white'>
                  **INPUT INFORMATION HERE **
                </p>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className="w-full h-auto bg-black p-3">
          <h1 className="font-DMSans text-sm font-light text-white text-center">Footer</h1>
      </div>
      
    </main>
  );
}
