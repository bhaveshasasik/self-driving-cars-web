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
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-yellow-50 p-10 md:p-20 lg:p-32 xl:p-40">Context Behind Self-Driving Automobiles</h1>
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3 shadow-lg'>What is a Self-Driving Car?</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  Self-Driving Cars are revolutionizing the way we think about transportation. 
                  These vehicles are built to navigate and drive without human intervention, 
                  using advanced technologies like sensors, cameras, and artificial intelligence.
                </p>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-yellow-50 w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> Why?</button>} 
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3 shadow-lg'>Why Self-Driving Cars?</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
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
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-yellow-50 p-10 md:p-20 lg:p-32 xl:p-40">Where do the issues of automobiles and the transportation system stem from?</h1>
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'>The Transition to Automobiles</h1>
                <div className="w-full flex justify-center">
                    <img src="/timeline.svg" alt="timeline" className="w-full h-auto"/>
                </div>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-yellow-50 w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]">The Impacts</button>} 
            modal 
            nested
            open={isTest2PopupOpen}
            onClose={() => setIsTest2PopupOpen(false)}
            onOpen={() => setIsTest2PopupOpen(true)}
            contentStyle={{ border: 'none', borderRadius: '10px', padding: '20px', maxHeight: '90vh', overflow: 'auto' }}
            overlayStyle={{ background: 'rgba(0, 0, 0, 0.85)' }}
          >
            {close => (
              <div className="w-full h-auto max-w-5xl p-10 mx-auto">
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'>How have automobiles impacted society?</h1>
                <div className='space-y-4'>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                    In order for automobiles to be an efficient method of traveling, cities and transport networks had to be redesigned. It required major programs of 
                    infastructure for roads and suburban housing. As automobiles became faster and more accessible, there was an increase in the amount of people that moved out of the cities and into suburbs.
                    The construction of roads, highways, and suburban communities in the Interstate Highway system created
                    a new economic boom, which perfectly aligned with the interests of the auto industry--to create a car centric society. This also gave the government an excuse to create zoning policies which they used to segregate people
                    from certain neighborhoods. Cities broke into pieces, severing social and community bonds and making it difficult for people who couldn't afford a car to reach previously walkable destinations.
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                    Tragically, in current day, 1.3 million deaths are recorded every year due to road traffic crashes and 53,000 more are recorded due to the air pollution caused by automobiles. The new technologies in modern cars such as lane-keeping or emergency braking are countered by larger, heavier automobiles that are 
                    3x more likely to kill pedestrians. 
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                    Currently, there is also a cycle that seems to perpetuate the dependency on automobiles. For example, in response to the traffic congestion caused by automobiles, drivers turn to more
                    automobiles as a solution. To combat the struggle for space, drivers will buy larger, more intimidating cars, making driving even more dangerous and competitive. 
                  </p>
                </div>
                
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className='bg-self-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-yellow-50 p-10 md:p-20 lg:p-32 xl:p-40">Why don’t Self-Driving Cars Solve Safety Issues?</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Technical Concerns </button>} 
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'>What are Technical Concerns With Self-Driving Cars?</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  <ul class="list-disc space-y-4">
                    <li>Weather Sensitivity: Struggles in heavy rain, show, or fog</li>
                    <li>Complex Environments: Difficulty in navigating busy, unpredictable urban areas</li>
                    <li>Unexpected Situations: Challenges in handling rare or unusual road scenarios</li>
                    <li>System Failures: Prone to software bugs and sensor malfunctions</li>
                    <li>Laws and Policies: A lack of comprehensive regulations for autonomous vehicles</li>
                  </ul>
                </p>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-yellow-50 w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> Safety Concerns </button>} 
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'>What don't Self-Driving Cars Address Safety Concerns?</h1>
                <div class="space-y-5">
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  From the beginning, the production of cars prioritized marketability and profits over safety. 
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  The supposed safety benefits of self-driving cars are only available to those wealthy enough to afford it. The poor and people of color are at a greater risk to be killed by automobiles than other road users, and living in an area of poverty increases one's risk of dying in a crash. However, it is difficult for those who are the most exposed to the dangers of automobiles to afford a self-driving car and take advantage of the safety features. 
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  The creation of electrical vehicles requires opening new mines--with the opening of mines comes the destruction of habitats, native lands, and the health of locals around the site. Cobalt, a key component in a self driving car’s lithium-ion batteries is harvested in the Democratic Republic of Congo (DRC). The mining area in the DRC is among the top ten most polluted areas in the world, leading to contaminated water and high birth defects rates in the local population. Furthermore, around 40,000 children under the age of 15 work at the mine, where there are high death and injury rates.
                  </p>
                </div>
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
                <h1 className='flex w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'>What are the Environmental Impacts of Self-Driving Cars?</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  The production of advanced sensors and batteries involves energy intensive processes and raw materials, leading to environmental
                  impacts. Majority of self-driving vehicles are EVs. Demand for lithium and nickle to manufacture EV batteries will increase by 4000%
                  between 2020 - 2024 if we continue to go down the path of privatization of vehicles. The emissions to manufacture self-driving cars will sky rocket by the year of 2050 according to
                  a study done by UCD. In the pie chart below, we can see the how the US gets their elecricity. 58% still make a lot of emissions and this doesn't even account for the 
                  emissions emitted when mining for precious materials that are within the Self-Driving Cars. 
                </p>
                <img src="/nationalAvg.png" alt="National Average" width={"fit"} height={"fit"}/>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-yellow-50 w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> **BUTTON NAME** </button>} 
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'>**TITLE HERE**</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  **INPUT INFORMATION HERE **
                </p>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className='bg-dirt-background bg-cover bg-center h-screen relative'>
        <h1 className="font-DMSans font-medium text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center text-yellow-50 p-10 md:p-20 lg:p-32 xl:p-40">Why Don’t Self Driving Cars Solve Accessibility and Inclusivity Issues?
</h1>
        <div className="flex space-x-5 absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-white w-[264px] h-[40px] rounded-md shadow-sm"> Why are they not Inclusive </button>} 
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'> Why are Self-Driving Cars not as Inclusive as Advertised? </h1>
                <div className="space-y-4">
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  Self-Driving cars don’t benefit the communities that automobiles initially disturbed. In 1934, the government implemented the Federal Housing Administartion (FHA), a program that gave many Americans access to cheap mortgages, but also promoted suburban, car-oriented societies. The FHA practiced “redlining”, giving priority to white communities and excluding Black communities. As white people escaped unfavorable city conditions for the suburban life, Black people were left behind, without the financial advantage of home ownership. Zoning policies furthered this separation, restricting the areas marginalized communities were allowed in. In today’s time, it is difficult for these communities to afford a gas vehicle, let alone an electric vehicle or even autonomous vehicle.
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  Less than 15% of US Drivers can afford an electric vehicle, even less can afford an autonomous vehicle.
                  </p>
                  <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  Due to biases and ableism in society, there is also a possibility that self-driving algorithms may not be accurate and will put disabled groups in danger. Sensors in self-driving cars may be accurate when it comes to detecting a walking pedestrian, but the same cannot be said for, say a pedestrian in a wheelchair.
                  </p>
                </div>
              </div>
            )}
          </Popup>

          <Popup 
            trigger={<button type="button" className="font-DMSans text-center font-semibold bg-[#171A20] text-yellow-50 w-[264px] h-[40px] rounded-md shadow-sm transition hover:bg-[#393c41]"> Who it Benefits </button>} 
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
                <h1 className='w-full font-DMSans text-yellow-50 text-2xl md:text-3xl lg:text-4xl font-bold my-3'>**TITLE HERE**</h1>
                <p className='font-DMSans text-xl md:text-2xl lg:text-3xl text-yellow-50'>
                  **INPUT INFORMATION HERE **
                </p>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className="w-full h-auto bg-black p-3">
          <h1 className="font-DMSans text-sm font-light text-yellow-50 text-center">Footer</h1>
      </div>
      
    </main>
  );
}
