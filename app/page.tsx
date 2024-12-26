'use client'
import type { NextPage } from 'next';
import Image from "next/image";
import Lottie from 'react-lottie';
import { motion } from "motion/react"
import animationData from '@/app/animate.json';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(106.94deg,_#fff,_#fafaff)]  overflow-hidden text-center text-base text-brand-purple-primary-800 font-poppins">
      {/* //navbar */}
      <div className="fixed md:top-[35px] max-w-[1200px] w-full left-0 right-0 [backdrop-filter:blur(40px)] [background:linear-gradient(90.38deg,_rgba(247,_252,_255,_0.3),_rgba(244,_238,_251,_0.3))] border-lavender-100 border-[1px] border-solid flex flex-row items-center justify-between py-[7px] md:rounded-full px-10 z-[999] text-gray-800 mx-auto">
        <Image className="w-[65.7px] relative h-14" width={66} height={56} alt="" src="/assets/Group18.svg" />
        <div className="font-medium md:text-[40px] text-[20px] text-darkorchid opacity-90 tracking-lighter">DATAGRIND</div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link href={'#contact'} className="relative hover:scale(101) transition-all leading-[16px] [background:linear-gradient(167.14deg,_#5a7dfb,_#9613d4)] px-5 py-3 rounded-full text-white">Contact Us</Link>
        </motion.div>
      </div>
      {/* hero */}
      <div className=" rounded-t-none rounded-b-31xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0)_40.53%,_rgba(255,_255,_255,_0.05)_73.47%,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_linear-gradient(90deg,_#8831fa,_rgba(170,_127,_227,_0)_25.02%,_rgba(204,_204,_204,_0)_49.96%,_rgba(170,_126,_227,_0)_75%,_#8831fa)] pt-[200px]">
        <div className="text-45xl text-brand-purple-primary-500 text-[60px] font-semibold w-full [line-height:60px]">Tech Made Simple</div>
        <div className="mt-[30px] h-[54px] text-brand-purple-primary-500 flex gap-3 justify-center text-[25px]">
          <div className=" top-[0px] left-[0px] ">#API</div>
          <div className=" top-[0px] left-[287px]">#Data</div>
          <div className=" top-[0px] left-[104px]">#System</div>
        </div>
        <div className=" relative h-[200px] text-zinc-700">
          <div className=" text-[30px] font-medium mt-[30px]">Bring Idea to life</div>
          <div className=" text-base font-medium mt-[20px]">
            <p className="m-0">{`From tasks and workflows to apps and systems, `}</p>
            <p className="m-0">build and automate anything in one powerful platform.</p>
          </div>
          <div className=" flex flex-row items-center justify-center p-4 gap-2">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link href={'#contact'} className="relative transition-all leading-[16px] [background:linear-gradient(167.14deg,_#5a7dfb,_#9613d4)] px-5 py-3 rounded-full text-white">Contact Us</Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <button className="relative px-5 py-3 bg-secondary border-[0.1rem] border-zinc-700 rounded-full leading-[16px]">Learn More</button>
            </motion.div>
          </div>
        </div>
        <DotLottieReact
          className='mb-20 md:h-auto md:w-auto w-full'
          src="/assets/animate.lottie"
          loop
          autoplay
        />
      </div>
      <div className="max-w-[1000px] mb-5 mx-auto w-full grid md:grid-cols-5 sm:grid-cols-2 grid-cols-2 items-center justify-center flex-wrap content-center gap-10 text-brand-purple-secondary-900 mt-10 px-4">
        <div className='flex flex-col gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-xl'>
          <Image src={'/assets/Group67.png'} width={80} height={80} alt='' />
          <span className='text-zinc-600'>Data locked? Apis unlock</span>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-xl'>
          <Image src={'/assets/Group70.png'} width={80} height={80} alt='' />
          <span className='text-zinc-600'>User Analytics at the core</span>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-xl'>
          <Image src={'/assets/Group66.png'} width={80} height={80} alt='' />
          <span className='text-zinc-600'>Out-of-the-box UI options
          </span>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-xl'>
          <Image src={'/assets/Group64.png'} width={80} height={80} alt='' />
          <span className='text-zinc-600'>Light apps thanks to GraphDB</span>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center bg-white p-2 rounded-2xl shadow-xl'>
          <Image src={'/assets/Group63.png'} width={80} height={80} alt='' />
          <span className='text-zinc-600'>Deep customer engagement</span>
        </div>
      </div>
      <div className="max-w-[1000px]  px-5 mx-auto w-full pt-5 flex flex-row items-center justify-between flex-wrap content-center text-21xl">
        <Image className="md:w-[35%] relative h-[302.5px] object-cover" width={332} height={303} alt="" src="/assets/Group71.png" />
        <div className="flex md:w-[65%] flex-col items-start justify-start gap-2">
          <div className="relative font-medium b2">Understanding of data</div>
          <div className="mt-5 relative  text-black text-left ">Data isn’t just numbers or charts; it’s the key to unlocking untapped potential. It holds the power to predict trends, innovate solutions, and transform lives. When harnessed effectively, data transcends complexity, becoming a tool for clarity, insight, and impactful decision-making. Imagine a world where professionals like doctors, lawyers, and business owners can effortlessly utilize data to solve problems and elevate their services. That’s the kind of transformation Datagrind empowers—a future where data bridges the gap between potential and progress, driving innovation that changes everything.
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mt-10 px-5 mx-auto w-full pt-5 flex flex-row items-center justify-between flex-wrap content-center text-21xl">
        <div className="flex md:w-[65%] flex-col items-start justify-start gap-2">
          <div className="relative font-medium b2">Fast App Building</div>
          <div className="mt-5 relative text-base text-black text-left ">Datagrind revolutionizes app creation by merging simplicity with innovation. Its no-code platform eliminates the need for traditional development, enabling anyone to design and deploy custom applications in minutes. Powered by a graph database, it ensures ultra-lightweight performance and real-time responsiveness. Whether you’re managing patients, organizing legal cases, or running a salon, Datagrind provides tailored solutions without the wait or complexity of conventional processes. With Datagrind, you’re not just building apps—you’re accelerating ideas into reality effortlessly.</div>
        </div>
        <Image className="md:w-[35%] relative h-[302.5px] object-contain" width={332} height={303} alt="" src="/assets/Group73.png" />
      </div>
      <div className="max-w-[1000px] mt-10 px-5 mx-auto w-full pt-5 flex flex-row items-center justify-between flex-wrap content-center text-21xl">
        <Image className="md:w-[30%] relative h-[302.5px] object-contain " width={332} height={303} alt="" src="/assets/Group74.png" />
        <div className="flex md:w-[70%] flex-col items-start justify-start gap-2">
          <div className="relative font-medium ps-4 b2">In-depth business analysis</div>
          <div className="mt-5 relative text-base ps-3 text-black text-left ">Deep data analysis unlocks the true potential of business processes, revealing insights that surface-level reviews often miss. It uncovers inefficiencies, identifies opportunities, and sharpens strategies. By truly understanding data, businesses can deliver personalized, precise, and efficient services, fostering customer loyalty and satisfaction. This proactive approach empowers decision-makers to anticipate challenges and adapt quickly. With Datagrind, businesses move beyond guesswork, achieving a deeper connection with their customers and redefining operational excellence.
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-start text-45xl">
        <div className="w-[1534px] relative rounded-t-none rounded-b-[100px] [background:linear-gradient(-7.85deg,_rgba(136,_49,_250,_0.25),_rgba(136,_49,_250,_0)_67.1%)] h-[349px] overflow-hidden shrink-0" />
        <div className="w-[1073px] relative rounded-[50px] h-[400px] overflow-hidden shrink-0 mt-[-200px]">
          <Image className="absolute top-[79px] left-[836px] w-[519px] h-[519px]" width={519} height={519} alt="" src="/assets/Ellipse26.svg" />
          <Image className="absolute top-[79px] left-[18px] w-[519px] h-[519px]" width={519} height={519} alt="" src="/assets/Ellipse27.svg" />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(120px)] rounded-11xl bg-lavender-300 border-white border-[4px] border-solid box-border w-[1073px] h-[469px]" />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(120px)] rounded-11xl [background:linear-gradient(100.57deg,_rgba(248,_82,_82,_0.2),_rgba(136,_49,_250,_0.2))] w-[1073px] h-[469px]" />
          <div className="absolute top-[1px] left-[32px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[91px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[150px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[327px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[445px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[563px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[681px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[799px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[209px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[917px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[976px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[1035px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[268px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[386px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[504px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[622px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[740px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <div className="absolute top-[1px] left-[858px] [backdrop-filter:blur(4px)] [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.25)_47.41%,_rgba(153,_153,_153,_0))] w-[37px] h-[467px]" />
          <b className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <p className="m-0 text-white font-bold md:text-[75px] text-[50px]  w-full [line-height:60px] md:[line-height:80px] drop-shadow-lg">Bringing Software <br /> Closure to Humanity</p>
          </b>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 pt-20 text-left max-w-[1000px] mx-auto px-5">
        <div className=" font-medium b1 [line-height:45px]  text-[45px] text-center mb-10">Frequently Asked Questions</div>
        <div className=" rounded-11xl bg-brand-purple-primary-100 w-full flex flex-row items-start justify-start flex-wrap content-start py-4 px-6 box-border gap-4">
          <div className="b2 font-medium">Why choose Datagrind?</div>
          <div className=" relative text-base text-black ">Datagrind offers readymade, customizable applications for clinics, salons, hotels, financial services, and more—all for just ₹1 per day. By hosting the application on your computer, the platform ensures a virtually free, lightweight, and efficient solution for your business needs.
          </div>
        </div>
        <div className=" rounded-11xl bg-brand-purple-primary-100 flex flex-row items-start justify-start flex-wrap content-start py-4 px-6 box-border gap-4">
          <div className="b2 font-medium">What makes graph databases ideal for Datagrind?</div>
          <div className=" relative text-base text-black ">Graph databases are lightweight and optimized for traversing connected data. This makes them perfect for creating applications that are fast, responsive, and highly efficient without the need to process large data sets.</div>
        </div>
        <div className=" rounded-11xl bg-brand-purple-primary-100 flex flex-row items-start justify-start flex-wrap content-start py-4 px-6  box-border gap-4">
          <div className="b2 font-medium">Is the ₹1 per day pricing permanent?</div>
          <div className=" relative text-base text-black ">Yes, the ₹1 per day cost is a lifetime commitment. Our mission is to bring humanity closer to data through software, and we are dedicated to maintaining this affordable pricing model.
          </div>
        </div>
        <div className="rounded-11xl bg-brand-purple-primary-100 flex flex-row items-start justify-start flex-wrap content-start py-4 px-6  box-border gap-4">
          <div className="b2 font-medium">How can I make changes to my application?
          </div>
          <div className=" relative text-base text-black ">Datagrind currently supports communication via SMS, Email, and WhatsApp, ensuring seamless interaction with your customers.
          </div>
        </div>
      </div>
      {/* <div className=" bg-brand-purple-primary-900 gap-5 mt-20 flex flex-row items-center justify-center py-[21px] px-6 text-white font-roboto">
        <div className=" text-17xl font-medium font-poppins text-brand-purple-secondary-100">Bring Ideas to life</div>
        <div className=" rounded-full  [background:linear-gradient(167.14deg,_#5a7dfb,_#9613d4)] flex flex-row items-center justify-center p-4 gap-2">
          <div className="relative leading-[16px]">Contact Us</div>
        </div>
      </div>
      <div className='w-full max-w-[1000px] mx-auto px-5 pt-10 pb-10'>
        <Image src={'/assets/lastlogo.png'} className='md:w-[350px] w-[50%]' alt='' width={800} height={1000} />
      </div> */}
      {/* <div className="w-full max-w-[1000px] mx-auto px-5 grid grid-cols-2 md:grid-cols-4 text-zinc-900">
        <div className="flex flex-col gap-2 items-start">
          <div className="font-semibold">Company</div>
          <div className="">About us</div>
          <div className="">Why Choose datagrind</div>
          <div className="">Careers</div>
          <div className="">Contact us</div>
          <div className="">{`Security and trust `}</div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <div className=" font-semibold">Resources</div>
          <div className="">Docs</div>
          <div className="">Pricing</div>
          <div className="">Customers</div>
          <div className="">Integrations</div>
        </div>
        <div className="flex flex-col gap-2 md:mt-0 mt-3 items-start">
          <div className="font-semibold">Product</div>
          <div className="">WhatsApp Integration</div>
          <div className="">Invoice creator</div>
          <div className="">Customers</div>
          <div className="">Integrations</div>
        </div>
        <div className="flex flex-col gap-2 md:mt-0 mt-3 items-start">
          <div className="font-semibold">Connect</div>
          <div className='flex gap-2'>
            <Image className="" width={40} height={40} alt="" src="/assets/instagram_logo.svg.svg" />
            <Image className="" width={44} height={40} alt="" src="/assets/x_logo.svg.svg" />
          </div>
        </div>
      </div> */}

      <div className=" border-brand-purple-primary-100 mt-10 border-t-[1px] border-solid box-border w-[1257px] h-px" />
      <div className='max-w-[1000px] w-full mx-auto' id="contact">
        <Image src={'/assets/Spiriyantra.png'} className='md:w-[50%] mt-5 mb-5' width={604} height={700} alt="" />
        <div className="flex md:flex-row flex-col gap-5 pb-20 justify-between mx-auto text-zinc-800 text-left p-3 text-md">
          <div className="flex flex-col justify-between">
            <div className=" font-semibold">Address</div>
            <div className="">
              <p className="m-0 font-medium">SPIRI YANTRA Private Limited</p>
              <p className="m-0">House no. 21/2, Oshiwara Vishal CHS LTD, New link road, News 24</p>
              <p className="m-0">channel, Nr evershine, Jogeshwari West, Mumbai, Maharashtra 400102</p>
            </div>
          </div>
          <div className=" ">
            <div className=" font-semibold mb-2">Contact</div>
            <div className="flex flex-col gap-2">
              <Link href={'hello@datagrind.ai'} className="m-0">hello@datagrind.ai</Link>
              <p className="m-0">+91 9029044820</p>
            </div>
          </div>
        </div>
      </div>

    </div>);
};

export default Home;
