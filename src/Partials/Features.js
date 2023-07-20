import React, { useState, useRef, useEffect } from "react";
import Sipnner from "@/components/Spinner";

import Transition from "../utils/Transition.js";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-xl text-left top-0 absolute ">
            <h1 className="h2 mb-4">Its as easy as</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl  md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 "
              data-aos="fade-right"
            >
              <div className="md:pr-4 text-md lg:pr-12 xl:pr-16 mb-8 mt-20">
                <span className="text-2xl font-semibold mb-3 ">
                  1. Fans prove support
                </span>
                <p className="text-lg text-gray-600">
                  When you create a marketplace with Engage, supporters in your
                  genre will be able to prove their fandom by purchasing the
                  NFTs you place in the market.
                </p>
              </div>
              <div className="md:pr-4 text-md lg:pr-12 xl:pr-16 mb-8">
                <span className="text-2xl font-semibold mb-3 ">
                  2. Earn short term rewards
                </span>
                <p className="text-lg text-gray-600">
                  Administrators preset the amount that a NFT holder can be
                  rewarded with following a short-term win. Reward their
                  support!
                </p>
              </div>
              <div className="md:pr-4 text-md lg:pr-12 xl:pr-16 mb-8">
                <span className="text-2xl font-semibold mb-3 ">
                  3. Create long term engagement
                </span>
                <p className="text-lg text-gray-600">
                  Collaborate with entities to reward supporters with
                  limited-time opportunities to have their fandom applauded!
                </p>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src="/assets/images/walletLanding.png"
                      width="600"
                      height="562"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src="/images/features-bg.png"
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src="/images/features-element.png"
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src="/images/features-bg.png"
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src="/images/features-element.png"
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
