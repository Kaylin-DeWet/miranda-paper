import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import locomotiveScroll from "locomotive-scroll";
import gsap from "gsap";

const App = () => {
  let tl = gsap.timeline();
  let wrapper = useRef(null);
  let main = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: wrapper.current,
      smooth: true,
    });
    scroll.scrollTo(main.current);
    tl.to(wrapper.current, { y: "100vh", scale: 0.6, duration: 0 });
    tl.to(wrapper.current, { y: "30vh", duration: 1, delay: 1 });
    tl.to(wrapper.current, { y: "0vh", rotate: 360, scale: 1, duration: 0.7 });
  });

  console.log(wrapper);

  return (
    <div>
      <div className="bg-[#222]" ref={main}>
        <div className="bg-[#C5BEB4] h-screen w-screen relative" ref={wrapper}>
          <Navbar />
          <section className="w-full h-[400px] flex items-center justify-between py-10 px-12">
            <div className="w-[30%]">
              <div className="h-[60%] overflow-hidden">
                <img
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                  alt="table lamp"
                  className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <h2 className="font-Canopee mt-3 text-3xl font-semibold">
                AVRO | KO
                <span className="text-white  ml-2 border-solid border-4 rounded bg-red-600 border-red-600">
                  NEW
                </span>
              </h2>
              <p className="font-NewLight text-xl mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                commodi beatae esse excepturi nam impedit vitae magnam deleniti
                maiores perferendis?
              </p>
            </div>
            <div className="w-[30%] h-[90%] border-x-2 border-gray-500">
              <h2 className="font-Canopee text-6xl font-semibold text-center">
                ALL WORK!
              </h2>
              <h3 className="font-NewLight text-4xl text-center mt-4 leading-normal">
                A Featured selection <br /> the latest work - <br /> of the last
                years.
              </h3>
              <h5 className="font-NewLight text-xl text-center mt-6">
                <span className="font-semibold">TIP!</span> Drag sideways to
                navigate.
              </h5>
            </div>
            <div className="w-[30%]">
              <div className="h-[60%] overflow-hidden">
                <img
                  src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
                  alt="sneakers"
                  className="w-full h-full object-cover hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <h2 className="font-Canopee mt-3 text-3xl font-semibold">
                THE ROGER HUB
                <span className="text-white ml-2 border-solid border-4 rounded bg-red-600 border-red-600">
                  NEW
                </span>
              </h2>
              <p className="font-NewLight text-xl mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias tempore molestiae, et quisquam quos at ratione soluta
                ut? Repellendus, saepe!
              </p>
            </div>
          </section>

          <h1 className="bg-black font-Canopee text-[500px] w-[96%] h-[80%] ml-[2%] text-[#C5BEB4] text-center">
            MIRANDA
          </h1>

          <section className=""></section>
        </div>
      </div>
    </div>
  );
};

export default App;
