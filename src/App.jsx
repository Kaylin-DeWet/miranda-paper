import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div id="main">
        <div id="wrapper" className="bg-[#C5BEB4] h-screen w-screen relative">
          <Navbar />
          <section>
            <div>
              <img
                src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg?"
                alt="table lamp"
              />
            </div>
            <div></div>
            <div>
              <img
                src="https://assets.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp?"
                alt="image 2"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
