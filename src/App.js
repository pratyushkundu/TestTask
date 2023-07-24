import logo from './logo.svg';
import './App.css';
import img1 from './images/Group 160821.png'
import img2 from './images/Group 161165.png'
import img3 from './images/Group 160825.png'
import img4 from './images/Group 161182.png'
import img5 from './images/pngegg 1.png'
import img6 from './images/pngegg 2.png'
import img7 from './images/a.png'
import img8 from './images/a (1).png'
import img9 from './images/a (2).png'
import img10 from './images/a (3).png'
import img11 from './images/a (4).png'
import img12 from './images/Group 161183.png'
import img13 from './images/Vector.png'
import img14 from './images/Group 160946.png'
import img15 from './images/Group 160946 (1).png'
import img16 from './images/Group 160946 (2).png'
import img17 from './images/Group 160946 (3).png'
import img18 from './images/d.png'
import img19 from './images/OBJECTS.png'
import img20 from './images/Group 160921.png'
import img21 from './images/Group (1).png'
import img22 from './images/Group 160921 (1).png'
import img23 from './images/OBJECTS (1).png'
import img24 from './images/OBJECTS (2).png'
import img25 from './images/Group 160937.png'
import img26 from './images/Group 160874.png'
import img27 from './images/Button (1).png'
import img28 from './images/Button.png'
import img29 from './images/Button (3).png'
import img30 from './images/Component 14.png'
import img31 from './images/Group (2).png'
import img32 from './images/Vector 13.png'
function App() {
  return (
    <body class="font-Outfit scroll-smooth w-full h-full " >

      <nav class="w-full h-auto z-[12] bg-white fixed  py-6 px-32">
        <div class="flex justify-between">
          <div class="">
            <img src={img1} alt="" />
          </div>
          <div class="flex items-center">
            <ul class="flex justify-between mx-10 text-lg">
              <li class="mx-5 cursor pointer text-[#073B41] font-medium ">Home</li>
              <li class="mx-5 cursor pointer text-[#475D5B]">How it works</li>
              <li class="mx-5 cursor pointer text-[#475D5B]">Features</li>
              <li class="mx-5 cursor pointer text-[#475D5B]">Pricing</li>
            </ul>
            <button class="px-6 py-2 rounded-xl bg-[#FFB800] text-white">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      <div class="w-full flex justify-between px-32">
        <div class="w-1/2 flex flex-col">
          <p class="text-[42px] mb-2 pt-64 font-Poppins" >Get your own <span class="text-yellow-500">AI voice </span>Avatar</p>
          <p class="text-lg my-2 pr-2 text-[#475D5B] font-medium" >Are you ready to experience the revolutionary power of AI voice cloning? With Recreate, you can now have an incredibly lifelike clone of your own voice or that of your loved ones. Our cutting-edge technology utilizes artificial intelligence to capture the essence of your voice, enabling you to interact with your very own AI voice avatar like never before.</p>
          <div class="flex my-2">
            <img src={img5} />
            <img src={img6} />
          </div>
        </div>
        <div class="w-1/2 pt-40 pl-5 z-10">
          <div class="bg-no-repeat bg-hero-pattern bg-cover">
            <div class="pl-14 pt-10">
              <img src={img2} alt="" />
            </div>

          </div>
        </div>
      </div>
      <div class="w-full mt-[-200px] z-[-10]">
        <div class="bg-hero-mask bg-cover bg-no-repeat w-full h-auto flex flex-col items-center px-32 py-64">
          <div >
            <p class="font-black text-5xl">How it <span class="text-[#FFB800]">Works</span></p>
          </div>
          {/* <div class="bg-line bg-no-repeat bg-top"> */}
          <div class="bg-line bg-no-repeat bg-topz border-borderz" >
            <div class="w-full flex pt-10 px-48">
              <div class=" w-[45%] flex items-center text-end flex-col pt-2">
                <p class="text-sm text-[#475D5B] ">Browse through our diverse collection of preset voice avatars, each with its own unique personality and style. Choose the one that resonates with you, and your AI voice avatar will be ready to engage in delightful conversations right away!</p>
                <div class="">
                  <div class="">
                    <img src={img18} class="object-cover" />
                  </div>
                </div>
              </div>

              <div class="w-[10%] px-6 pt-4 flex flex-col">
                <div class="rounded-full w-[44px] h-[44px] bg-[#073B41] flex justify-center items-center">
                  <p class="text-white">1</p>
                </div>
                {/* <div class="ml-[-30px] mt-[-20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="304" viewBox="0 0 59 304" fill="none">
                    <path d="M40.9997 1C8.99973 49.6667 -37.1999 169.4 58.0001 303" stroke="url(#paint0_linear_1944_20500)" stroke-width="2" stroke-dasharray="2 2" />
                    <defs>
                      <linearGradient id="paint0_linear_1944_20500" x1="29.5992" y1="1" x2="29.5992" y2="303" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#073B41" />
                        <stop offset="0.473958" stop-color="#475D5B" />
                        <stop offset="1" stop-color="#FFB800" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div> */}
              </div>

              <div class="w-[45%]">
                <div class="pt-4">
                  <p class="font-medium text-base">Step </p>
                  <p class="text-[#073B41] font-bold text-base">Let’s Setup Your Voice Avatar</p>
                  <div class="bg-white w-[80%] flex items-center border-border border-[2px] rounded-xl p-4 mt-4">
                    <img src={img19} />
                    <p class="w-40 pl-2">Choose Pre-set Voice Avatar</p>
                  </div>
                  <div class="bg-white w-[80%] flex items-center border-border border-[2px] rounded-xl p-4 mt-1">
                    <img src={img20} />
                    <p class="w-40 pl-2">Choose Pre-set Voice Avatar</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full bg-hero bg-no-repeat bg-top mt-[-10px]">
              <div class="w-full flex flex-row-reverse pt-10 px-48">
                <div class="flex items-end text-start flex-col w-[45%] pt-2">
                  <p class="text-sm text-[#475D5B]">Simply record your voice or upload an existing audio file of the desired voice sample. It could be yours, a friend's, or a family member's - the choice is yours!</p>
                  <div class="pt-16">
                    <div class="">
                      <img src={img21} class="object-cover" />
                    </div>
                  </div>

                </div>

                <div class="w-[10%] px-6 pt-4">
                  <div class="rounded-full w-[44px] h-[44px] bg-[#FFB800] flex justify-center items-center">
                    <p class="text-white">2</p>
                  </div>
                </div>
                <div class="w-[45%]">
                  <div class="flex flex-col items-end pt-5">
                    <p class="font-medium text-base">Step </p>
                    <p class="text-[#073B41] font-bold text-base">Let’s Setup Your Voice Avatar</p>
                    <div class="bg-white w-[80%] flex items-center border-border border-[2px] rounded-xl p-4 mt-4">
                      <img src={img22} />
                      <p class="w-40 pl-2">Your Own Voice</p>
                    </div>
                    <div class="bg-white w-[80%] flex items-center border-border border-[2px] rounded-xl p-4 mt-1">
                      <img src={img23} />
                      <p class="w-40 pl-2">Someone Else</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full flex pt-10 px-48">
                <div class="flex items-center text-end  flex-col w-[45%] pt-2">
                  <p class="text-sm text-[#475D5B] ">Our advanced AI algorithms get to work, analyzing the nuances and unique characteristics of the voice sample you provided.</p>
                  <div class="pt-16">
                    <div class="">
                      <img src={img25} class="object-cover" />
                    </div>
                  </div>
                </div>

                <div class="w-[10%] px-6 pt-4">
                  <div class="rounded-full w-[44px] h-[44px] bg-white flex justify-center items-center">
                    <p class="text-[#475D5B]">3</p>
                  </div>
                </div>
                <div class="w-[45%]">
                  <div class="pt-4">
                    <p class="font-medium text-base">Step </p>
                    <p class="text-[#073B41] font-bold text-base">Let’s Setup Your Voice Avatar</p>
                    <div class="bg-white w-[80%] flex items-center border-border border-[2px] rounded-xl p-4 mt-4">
                      <img src={img23} />
                      <p class="w-40 pl-2">Choose Pre-set Voice Avatar</p>
                    </div>
                    <div class="bg-white w-[80%] flex items-center border-border border-[2px] rounded-xl p-4 mt-1">
                      <img src={img24} />
                      <p class="w-40 pl-2">Choose Pre-set Voice Avatar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex flex-row-reverse pt-10 px-48">
              <div class="flex items-center text-start flex-col w-[45%] pt-2">
                <p class="text-sm text-[#475D5B] ">In just a few moments, your AI voice avatar is ready! Interact, chat, or even narrate stories with your personalized clone - the possibilities are endless.</p>
                <div class="pt-44">
                  <div class="">
                    <img src={img31} class="object-cover" />
                  </div>
                </div>

              </div>

              <div class="w-[10%] px-6 pt-4">
                <div class="rounded-full w-[44px] h-[44px] bg-white flex justify-center items-center">
                  <p class="text-[#475D5B]">4</p>
                </div>
              </div>
              <div class="w-[45%] ">
                <div class="flex flex-col items-end pt-5 ">
                  <p class="font-medium text-base">Step </p>
                  <p class="text-[#073B41] font-bold text-base">Test Your Avatar</p>
                  <div class="w-[75%] flex flex-col items-center bg-white border-border border-[2px] rounded-xl p-4 mt-4">
                    <img src={img26} />
                    <div class="py-4"><img src={img30} /></div>
                    <button><img src={img27} /></button>
                    <button class="py-2"><img src={img28} /></button>
                    <button><img src={img29} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row-reverse justify-between  pt-24 px-32">
        <div class="w-1/2 flex flex-col pl-2">
          <p class="text-[42px] mb-2 pt-40 font-Poppins">Pitch Perfect <span class="text-[#FFB800]">Voice Clones</span></p>
          <p class="text-lg my-2 text-[#475D5B] font-medium pr-8">Are you ready to experience the revolutionary power of AI voice cloning? With Recreate, you can now have an incredibly lifelike clone of your own voice or that of your loved ones. Our cutting-edge technology utilizes artificial intelligence to capture the essence of your voice, enabling you to interact with your very own AI voice avatar like never before.</p>
          <div class="flex my-4">
            <button class="px-6 py-2 rounded-xl bg-[#FFB800] text-white">
              Join Waitlist
            </button>
          </div>
        </div>
        <div class="w-1/2 pt-10">
          <div class="bg-no-repeat bg-hero">
            <div class="pl-12 pt-14">
              <img src={img4} alt="" />
            </div>

          </div>
        </div>
      </div>

      <div class="w-full  h-auto flex flex-col items-center mb-20 px-32">
        <div >
          <p class="text-[40px] pt-40 pb-12 font-Poppins">
            Features
          </p>
        </div>
        <div class="w-full h-auto flex justify-between py-10">
          <div class="flex flex-col items-center w-1/4 h-auto">
            <img src={img9} />
            <p class="font-semibold text-xl">Personalized Voice Avatar</p>
            <p class="text-[#475D5B] text-base text-center py-2 px-8">Setup AI Voice Avatar in your own or someone else's voice.</p>
          </div>
          <div class="flex flex-col items-center pt-40 w-1/4 h-auto">
            <img src={img7} />
            <p class="font-semibold text-xl">Speak It Mode</p>
            <p class="text-[#475D5B] text-base text-center py-2 px-8">Give any text to the AI Voice Avatar to speak it out for you.</p>
          </div>
          <div class="flex flex-col items-center  w-1/4 h-auto">
            <img src={img8} />
            <p class="font-semibold text-xl">Conversation Mode</p>
            <p class="text-[#475D5B] text-base text-center py-2 px-6">Ask any questions to the Recreate Engine powered by Chat GPT, and your AI Voice Avatar will read out the answer for you.</p>
          </div>
          <div class="flex flex-col items-center pt-40 w-1/4 h-auto">
            <img src={img10} />
            <p class="font-semibold text-xl">Text Message AI Reading</p>
            <p class="text-[475D5B]  text-base text-center py-2 px-6">Make two AI Avatars read out any text message conversation in your phone.</p>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="bg-mask2 bg-cover bg-no-repeat flex flex-col items-center mb-20 px-32 py-52">
          <div class="pb-14">
            <p class="text-[40px] font-Poppins">
              Pricing
            </p>
          </div>
          <div class="flex">
            <div class="pt-16 mr-[-10px]">
              <div class="bg-white shadow-shade border-2 rounded-lg px-5 pt-4 pb-6">
                <div class="flex flex-col items-center text-center">
                  <div>
                    <p style={{ opacity: 0.3 }} class="text-[#475d5b] font-semibold text-3xl">Free</p>
                  </div>
                  <div class="w-64 h-px rounded-lg border-b-2 mt-3 border-[#475D5B] " style={{ opacity: 0.1 }}>

                  </div>
                  <div class="py-7">
                    <p class="text-[55px] font-semibold">$0</p>
                    <p class="text-lg text-[#FFB800] mt-[-16px]">Month</p>
                  </div>
                  <div class="pb-12">
                    <p class="font-semibold text-2xl">200 Credits</p>
                    <p class="text-sm">1 Personalised Voice Avatar</p>
                  </div>

                  <button class="px-[105px] py-3 rounded-[4px] font-semibold text-base bg-[#073B41] text-white">
                    On signup
                  </button>
                </div>
              </div>
            </div>
            <div class="z-10 bg-[#073B41] shadow-shade border-2 rounded-lg px-11 py-9">
              <div class="flex flex-col items-center text-center">
                <div class="flex items-center ">
                  <div class="mr-2">
                    <img src={img11} />
                  </div>

                  <p class="text-white font-semibold text-3xl">Premium</p>
                </div>
                <div class="w-80 h-1 rounded-lg border-b-2 mt-8 border-[#475D5B] " style={{ opacity: 0.5 }}>

                </div>
                <div class="pt-12 pb-8 px-28">
                  <p class="text-[55px] font-semibold text-7xl text-white">$8</p>
                  <p class="text-2xl font-normal text-white ">Month</p>
                </div>
                <div class="pb-20">
                  <p class="font-semibold text-3xl text-[#FFB800]">500 Credits</p>
                  <p class=" text-white pt-3 text-lg ">2 Personalised Voice Avatar</p>
                </div>

                <button class="px-32 py-3 rounded-[4px] font-semibold text-base bg-[#FFB800] text-white">
                  Get Started
                </button>
              </div>
            </div>
            <div class="pt-16 ml-[-10px]  ">
              <div class="bg-white shadow-shade border-2 rounded-lg px-5 pt-4 pb-6">
                <div class="flex flex-col items-center text-center">

                  <div class="pt-[120px] pb-[110px] w-40">
                    <p class="font-semibold text-3xl">Need more Avatars?</p>
                  </div>

                  <button class="px-[105px] py-3 rounded-[4px] font-semibold text-base bg-[#073B41] text-white">
                    Talk to Us
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="w-full flex flex-col items-center text-center px-32 pt-14 pb-40">
        <img src={img1} />
        <p class="w-[48%] text-base pt-5">Take the first step towards a new realm of vocal creativity. Join the early bird waitlist and get a chance to win Free Voice Avatar Credits!</p>
        <div class="flex items-center justify-around pt-7 pb-10">
          <div>  <img src={img12} class="object-cover mr-4" /></div>
          <p class="text-5xl font-black">Join Waitlist</p>
        </div>
        <div class="w-[40%]">
        <form class="relative">
          <input type="text" placeholder='Your email address' class="w-[100%] h-[100%] block p-4 text-base ml-6  rounded-lg border-[1px] border-[#475D5B] ">

          </input>
          <button class="top-4 right-0 absolute">
            <img src={img13} />
          </button>

        </form>
        </div>
      </div>
      <div class=" border-t-[1px] border-[#475D5B]" style={{ opacity: 0.1 }}></div>
      <footer class=" w-full h-auto py-6 bg-White px-32">
        <div class="flex justify-between items-center">
          <p>© 2023 recreate. | All Rights Reserved</p>
          <ul class="flex  text-[#475D5B]">
            <li class="mx-2 cursor pointer">Pricing</li>
            <li style={{ opacity: 0.3 }}>|</li>
            <li class="mx-2 cursor pointer">How it works</li>
            <li style={{ opacity: 0.3 }}>|</li>
            <li class="mx-2 cursor pointer">Privacy Policy</li>
            <li style={{ opacity: 0.3 }}>|</li>
            <li class="mx-2 cursor pointer">Terms of Services</li>
            <li style={{ opacity: 0.3 }}>|</li>
            <li class="mx-2 cursor pointer">hello@gorecreate.ai</li>

          </ul>
        </div>
      </footer>
    </body>
  );
}

export default App;
