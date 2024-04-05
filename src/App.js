import imageUrl from "./statics/photo-1499951360447-b19be8fe80f5.avif";
import computerText from "./statics/computerWithText.PNG";
import magnifier from "./statics/magnifier.PNG";
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col w-ful">
      <div className="flex justify-between bg-purple-800">
        <div className="w-auto hover:cursor-pointer">
        <svg className="ml-7 h-10 w-[130px]" viewBox="0 0 239 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3404 0.888889H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888889ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z" fill="white"/>
        <path d="M65.0253 36.515H60.3654L70.7722 12.0069H75.6576L86.2842 36.515H81.3987L78.6293 29.8257H70.46L72.021 25.8884H76.9527L73.1022 16.6842L65.0253 36.515Z" fill="white"/>
        <path d="M102.733 12.0069V15.921H95.7023V36.515H91.1638V15.921H84.1334V12.0069H102.733Z" fill="white"/>
        <path d="M113.012 36.515V12.0069H122.61C130.704 12.0069 134.761 15.8612 134.78 23.57C134.78 32.1923 130.723 36.5015 122.61 36.4976L113.012 36.515ZM122.61 32.5719C127.698 32.5719 130.24 29.5771 130.236 23.5874C130.236 18.4764 127.694 15.921 122.61 15.921H117.557V32.5719H122.61Z" fill="white"/>
        <path d="M143.175 12.0069V36.515H138.636V12.0069H143.175Z" fill="white"/>
        <path d="M167.856 35.3818C165.497 36.3201 162.971 36.763 160.433 36.6826C151.784 36.6826 147.459 32.4274 147.459 23.9169C147.459 15.8651 151.859 11.8373 160.658 11.8334C163.111 11.7913 165.55 12.1969 167.856 13.0302V17.1409C165.69 16.2169 163.355 15.7504 161 15.7707C155.114 15.7707 152.171 18.4841 152.171 23.9111C152.171 29.7968 154.948 32.7377 160.502 32.7338C161.453 32.7175 162.397 32.5795 163.312 32.3233V25.2004H167.856V35.3818Z" fill="white"/>
        <path d="M176.679 12.0069V36.515H172.141V12.0069H176.679Z" fill="white"/>
        <path d="M197.845 12.0069V15.921H190.821V36.515H186.277V15.921H179.229V12.0069H197.845Z" fill="white"/>
        <path d="M200.366 36.515H195.706L206.113 12.0069H210.999L221.619 36.515H216.74L213.918 29.8257H205.824L207.385 25.8884H212.323L208.466 16.6842L200.366 36.515Z" fill="white"/>
        <path d="M229.158 12.0069V32.5719H238.889V36.515H224.614V12.0069H229.158Z" fill="white"/>
        </svg>        
        </div>
        <div className="hidden md:flex py-2 text-white">
              <div className="mr-7 hover:cursor-pointer">
                SERVICES
              </div>
              <div className="mr-7 hover:cursor-pointer">
                ABOUT US
              </div>
              <div className="mr-7 hover:cursor-pointer">
                CONTACT US
              </div>
              <div className="mr-7 hover:cursor-pointer">
                CAREERS
              </div>
          </div> 
          <div className="text-end md:hidden relative">
            <div className="py-2 mr-10 text-white" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            </div>     
            {menuOpen && (
              <div className="absolute right-5 text-center text-sm h-[250px] bg-white shadow-lg rounded-md text-gray-700 py-2 px-8">
                <div className="m-7  hover:cursor-pointer">
                  SERVICES
                </div>
                <div className="m-7 hover:cursor-pointer">
                  ABOUTUS
                </div>
                <div className="m-7 hover:cursor-pointer">
                  CONTACTUS
                </div>
                <div className="m-7 hover:cursor-pointer">
                  CAREERS
                </div>
              </div>
            )}
          </div>    
          </div> 
          <div>
          <div className="md:relative">
            <img src={imageUrl} alt="computer" className="w-full h-[463px] md:h-[763px]" />
            <div className="md:absolute bottom-5 bg-gradient-to-br from-green-400 to-blue-500 left-10 bg- bg-opacity-70 p-4">
            <div className="h-[200px] w-[400px] p-6  px-2 py-2">
            <p className="text-3xl text-white font-bold">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
            <button className="bg-orange-400 px-5 mt-2 py-2 text-white rounded">GET FREE CONSULTANT </button>
            </div>
            </div>
          </div>
          </div>
          <div className="py-2">
            <div className="md:flex justify-center py-3">
              <div className="text-center">
                <div className="w-[200px] md:w-[800px]">
                  <div className="md:flex">
                  <div className="hidden md:block w-full text-start mt-10">
                      <h1 className="text-2xl text-purple-700 py-3">Web & Mobile App Development</h1>
                      <p className="">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                      <button className="bg-orange-400 px-5 mt-2 py-2 text-white rounded"> LEARN MORE </button>
                  </div>
                  <img src={computerText} alt="computer" className="w-auto mx-20 md:mx-0" />
                  <div className="md:hidden w-full text-center mt-10 mx-20">
                      <h1 className="text-2xl text-purple-700 py-3">Web & Mobile App Development</h1>
                      <p className="">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                      <button className="bg-orange-400 px-5 mt-2 py-2 text-white rounded"> LEARN MORE </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex justify-center py-3">
              <div className="text-center">
                <div className="w-[200px] md:w-[800px]">
                  <div className="md:flex">
                  <img src={magnifier} alt="magnifier" className="w-auto md:w-[300px] mx-20 md:mx-0" />
                  <div className="w-full text-center md:text-start mt-10 mx-20 md:mx-0 md:ml-6">
                      <h1 className="text-2xl text-purple-700 py-3">Digital Strategy Consulting</h1>
                      <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                      <button className="bg-orange-400 px-5 mt-2 py-2 text-white rounded"> LEARN MORE </button>     
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start md:justify-center mt-10">
              <div className="">
                <div className="text-start md:text-center mx-12 md:mx-0">
                  <h1 className="text-2xl text-purple-700 py-6">Frequently asked questions</h1>
                </div>
                <div className="bg-purple-100 w-[400px] md:w-[800px] px-4">
                  <div className="flex p-2">
                  <p className="w-full text-start text-purple-700 text-xl">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 text-purple-700">
                    <path d="M19 13H5v-2h14v2z" fill="currentColor"/>
                  </svg>
                  </div>
                  <div>
                    <p className="text-start text-gray-500 p-2">Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                  </div>
                </div>
                <div className="bg-purple-100 w-[400px] md:w-[800px] px-4 mt-3">
                  <div className="flex ">
                  <p className="w-full text-start  text-xl p-3">Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 mt-3">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </div>
                </div>
                <div className="bg-purple-100 w-[400px] md:w-[800px] px-4 mt-3">
                  <div className="flex ">
                  <p className="w-full text-start text-xl p-3">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 mt-3">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-800 mt-20">
              <div className="flex px-5 mt-10">
                <div className="flex flex-col w-1/3">
                  <div className="w-auto hover:cursor-pointer">
                    <svg className="h-10 w-[100px] md:w-[130px]" viewBox="0 0 239 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.3404 0.888889H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888889ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z" fill="white"/>
                    <path d="M65.0253 36.515H60.3654L70.7722 12.0069H75.6576L86.2842 36.515H81.3987L78.6293 29.8257H70.46L72.021 25.8884H76.9527L73.1022 16.6842L65.0253 36.515Z" fill="white"/>
                    <path d="M102.733 12.0069V15.921H95.7023V36.515H91.1638V15.921H84.1334V12.0069H102.733Z" fill="white"/>
                    <path d="M113.012 36.515V12.0069H122.61C130.704 12.0069 134.761 15.8612 134.78 23.57C134.78 32.1923 130.723 36.5015 122.61 36.4976L113.012 36.515ZM122.61 32.5719C127.698 32.5719 130.24 29.5771 130.236 23.5874C130.236 18.4764 127.694 15.921 122.61 15.921H117.557V32.5719H122.61Z" fill="white"/>
                    <path d="M143.175 12.0069V36.515H138.636V12.0069H143.175Z" fill="white"/>
                    <path d="M167.856 35.3818C165.497 36.3201 162.971 36.763 160.433 36.6826C151.784 36.6826 147.459 32.4274 147.459 23.9169C147.459 15.8651 151.859 11.8373 160.658 11.8334C163.111 11.7913 165.55 12.1969 167.856 13.0302V17.1409C165.69 16.2169 163.355 15.7504 161 15.7707C155.114 15.7707 152.171 18.4841 152.171 23.9111C152.171 29.7968 154.948 32.7377 160.502 32.7338C161.453 32.7175 162.397 32.5795 163.312 32.3233V25.2004H167.856V35.3818Z" fill="white"/>
                    <path d="M176.679 12.0069V36.515H172.141V12.0069H176.679Z" fill="white"/>
                    <path d="M197.845 12.0069V15.921H190.821V36.515H186.277V15.921H179.229V12.0069H197.845Z" fill="white"/>
                    <path d="M200.366 36.515H195.706L206.113 12.0069H210.999L221.619 36.515H216.74L213.918 29.8257H205.824L207.385 25.8884H212.323L208.466 16.6842L200.366 36.515Z" fill="white"/>
                    <path d="M229.158 12.0069V32.5719H238.889V36.515H224.614V12.0069H229.158Z" fill="white"/>
                    </svg>        
                    </div>
                  <p className="text-white text-sm md:text-md mt-3">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
                <div className="w-1/3 flex flex-col text-white text-center mt-3 md:mt-0">
                  <h1 className="text-sm md:text-xl font-semibold">Our Technologies</h1>
                  <span className="mt-5 md:mt-3 text-sm md:text-md">
                  <p>ReactJS</p>
                  <p>Gatsby</p>
                  <p>NextJS</p>
                  <p>NodeJS</p>
                  </span>
                </div>
                <div className="w-1/3 flex flex-col text-white text-center mt-3 md:mt-0">
                  <h1 className="text-sm md:text-xl font-semibold">Our Services</h1>
                  <span className="mt-5 md:mt-3 text-sm md:text-md ">
                  <p>Social media Marketing</p>
                  <p>Web & Mobile App Development</p>
                  <p>Data & Analytics</p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-white mt-20">
                <div className="flex justify-center">
                  <div className="w-1/3">
                    <u className="block w-full border-b border-gray-300"></u>
                  </div>
                </div>
                <span className="flex p-3 text-sm md:text-md justify-center">
                  <p className="mr-2">Privacy Policy</p>
                  <p>|</p>
                  <p className="ml-2">Terms & Conditions</p>
                </span>
              </div>
          </div>
    </div>
  );
}

export default App;
