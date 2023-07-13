import React from "react";

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 mt-10 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}

          <div
            className="relative   bg-gradient-to-r from-blue-500 to-teal-400  rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            <img
              className="absolute w-full left-0 h-full top-0"
              src="/assets/images/discordlines.png"
              alt=""
            />
            <div className="relative flex flex-col justify-between items-center">
              <div className="text-center lg:text-center ">
                <h3 className="h3 text-white mb-2">
                  Join our Discord Community
                </h3>
                <p className="text-white text-lg mb-6">
                  When you create a marketplace with Engage, supporters in your
                  genre will be able to prove their fandom by purchasing the
                  NFTs you place in the market.
                </p>
              </div>
              <button>
                <img
                  className=""
                  style={{ height: 40, width: 100 }}
                  src="/assets/images/joinnow.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
