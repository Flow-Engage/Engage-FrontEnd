import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const { useRouter } = require("next/router");

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [topMovers, setTopMovers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  useEffect(() => {
    getData();
  }, [id]);
  async function addWishlist(nftId) {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/addWishlist",
        {
          method: "POST",
          body: JSON.stringify({
            user: data.user.email,
            nftId: nftId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((e) => {
        alert("Added to wishlist");
      });
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  async function getData() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/TopGainers/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using `.json()`
          return response.json();
        })
        .then(function (data) {
          return data;
        });

      let Top = [];
      response.filter((elem) => {
        Top.push({
          name: elem.name,
          image: elem.ipfs,
          price: elem.price,
          category: elem.marketPlaceCategory,
          change: elem.change,
        });
      });

      const topThreeMovers = Top.slice(0, 8);

      setTopMovers(topThreeMovers);
      getLosers();
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  async function getLosers() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/TopLosers/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using `.json()`
          return response.json();
        })
        .then(function (data) {
          return data;
        });

      let Top = [];
      response.filter((elem) => {
        Top.push({
          name: elem.name,
          image: elem.ipfs,
          price: elem.price,
          category: elem.marketPlaceCategory,
          change: elem.change,
        });
      });
      const topThreeMovers = Top.slice(0, 4);
      setTopLosers(topThreeMovers);
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  const { data, status } = useSession();

  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <SideBar />
        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="text-xl text-[#333333] font-dmsans font-semibold">
              {id}
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="flex items-center justify-center h-auto rounded bg-white dark:bg-gray-800">
                <div className="w-50 flex flex-col justify-between h-full">
                  <div className="text-[#333333] text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg
                  </div>
                  <div className="text-[#000] font-dmsans m-5 justify-center items-center flex">
                    <button className="w-24 h-8 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Visit
                    </button>
                  </div>
                </div>
                <div className="text-[#FFFFFF] font-dmsans mt-3">
                  <img
                    className="h-auto w-auto "
                    src="/assets/images/featured.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-center h-auto rounded bg-white dark:bg-gray-800">
                <div className="w-50 flex flex-col justify-between h-full">
                  <div className="text-[#333333] text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg
                  </div>
                  <div className="text-[#000] font-dmsans m-5 justify-center items-center flex">
                    <button className="w-24 h-8 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Visit
                    </button>
                  </div>
                </div>
                <div className="text-[#FFFFFF] font-dmsans mt-3">
                  <img
                    className="h-auto w-auto "
                    src="/assets/images/featured.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-center h-auto rounded bg-white dark:bg-gray-800">
                <div className="w-50 flex flex-col justify-between h-full">
                  <div className="text-[#333333] text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg
                  </div>
                  <div className="text-[#000] font-dmsans m-5 justify-center items-center flex">
                    <button className="w-24 h-8 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Visit
                    </button>
                  </div>
                </div>
                <div className="text-[#FFFFFF] font-dmsans mt-3">
                  <img
                    className="h-auto w-auto "
                    src="/assets/images/featured.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-center h-auto rounded bg-white dark:bg-gray-800">
                <div className="w-50 flex flex-col justify-between h-full">
                  <div className="text-[#333333] text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg
                  </div>
                  <div className="text-[#000] font-dmsans m-5 justify-center items-center flex">
                    <button className="w-24 h-8 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Visit
                    </button>
                  </div>
                </div>
                <div className="text-[#FFFFFF] font-dmsans mt-3">
                  <img
                    className="h-auto w-auto "
                    src="/assets/images/featured.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3  gap-4 mb-4 mt-3">
              <div className="col-span-2 row-span-2 rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="flex flex-row justify-between items-center px-2">
                  <div className="text-xl text-[#333333] font-dmsans font-semibold">
                    Top Gainers
                  </div>
                  <div className="text-sm text-[#0654D6] font-dmsans font-light cursor-pointer">
                    View all
                  </div>
                </div>
                <ul className="px-2  divide-y mt-2 divide-gray-200 dark:divide-gray-700">
                  {topMovers &&
                    topMovers.map((elem, ind) => {
                      return (
                        <li key={ind} className="py-2">
                          <div className="flex items-center  justify-evenly space-x-4">
                            <div className="">
                              <img
                                className="w-8 h-8 rounded-full"
                                src={(require = elem.image)}
                                alt="Neil image"
                              />
                            </div>
                            <div className="w-[50%]">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {elem.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {elem.category}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                                {elem.price} <br />
                                <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                                  + {elem.change} %
                                </div>
                              </div>
                            </div>

                            <svg
                              onClick={() => {
                                addWishlist(elem.id);
                              }}
                              className="cursor-pointer"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_206_105)">
                                <path
                                  d="M6.102 3.60537C6.94667 2.09071 7.36867 1.33337 8 1.33337C8.63133 1.33337 9.05333 2.09071 9.898 3.60537L10.1167 3.99737C10.3567 4.42804 10.4767 4.64337 10.6633 4.78537C10.85 4.92737 11.0833 4.98004 11.55 5.08537L11.974 5.18137C13.614 5.55271 14.4333 5.73804 14.6287 6.36537C14.8233 6.99204 14.2647 7.64604 13.1467 8.95337L12.8573 9.29137C12.54 9.66271 12.3807 9.84871 12.3093 10.078C12.238 10.308 12.262 10.556 12.31 11.0514L12.354 11.5027C12.5227 13.2474 12.6073 14.1194 12.0967 14.5067C11.586 14.8947 10.818 14.5407 9.28333 13.834L8.88533 13.6514C8.44933 13.45 8.23133 13.35 8 13.35C7.76867 13.35 7.55067 13.45 7.114 13.6514L6.71733 13.834C5.182 14.5407 4.414 14.894 3.904 14.5074C3.39267 14.1194 3.47733 13.2474 3.646 11.5027L3.69 11.052C3.738 10.556 3.762 10.308 3.69 10.0787C3.61933 9.84871 3.46 9.66271 3.14267 9.29204L2.85333 8.95337C1.73533 7.64671 1.17667 6.99271 1.37133 6.36537C1.56667 5.73804 2.38667 5.55204 4.02667 5.18137L4.45067 5.08537C4.91667 4.98004 5.14933 4.92737 5.33667 4.78537C5.52333 4.64337 5.64333 4.42804 5.88333 3.99737L6.102 3.60537Z"
                                  stroke="#0654D6"
                                  stroke-width="1.5"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_206_105">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <button className="w-20 h-auto px-5 p-1 text-sm rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                              Buy
                            </button>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="flex flex-row justify-between items-center px-2">
                  <div className="text-xl text-[#333333] font-dmsans font-semibold">
                    Biggest Fallers
                  </div>
                  <div className="text-sm text-[#0654D6] font-dmsans font-light cursor-pointer">
                    View all
                  </div>
                </div>
                <ul className="px-2 divide-y mt-2 divide-gray-200 dark:divide-gray-700">
                  {topLosers &&
                    topLosers.map((elem, ind) => {
                      return (
                        <li key={ind} className="py-2">
                          <div className="flex items-center  justify-evenly space-x-4">
                            <div className="">
                              <img
                                className="w-10 h-8 rounded-full"
                                src={(require = elem.image)}
                                alt="Neil image"
                              />
                            </div>
                            <div className="w-[50%]">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {elem.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {elem.category}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                                {elem.price} <br />
                                <div className="text-[#EA0606] flex flex-row justify-between items-center  font-dmsans">
                                  {elem.change} %
                                </div>
                              </div>
                            </div>
                            <svg
                                 onClick={() => {
                                  addWishlist(elem.id);
                                }}
                                className="cursor-pointer"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_206_105)">
                                <path
                                  d="M6.102 3.60537C6.94667 2.09071 7.36867 1.33337 8 1.33337C8.63133 1.33337 9.05333 2.09071 9.898 3.60537L10.1167 3.99737C10.3567 4.42804 10.4767 4.64337 10.6633 4.78537C10.85 4.92737 11.0833 4.98004 11.55 5.08537L11.974 5.18137C13.614 5.55271 14.4333 5.73804 14.6287 6.36537C14.8233 6.99204 14.2647 7.64604 13.1467 8.95337L12.8573 9.29137C12.54 9.66271 12.3807 9.84871 12.3093 10.078C12.238 10.308 12.262 10.556 12.31 11.0514L12.354 11.5027C12.5227 13.2474 12.6073 14.1194 12.0967 14.5067C11.586 14.8947 10.818 14.5407 9.28333 13.834L8.88533 13.6514C8.44933 13.45 8.23133 13.35 8 13.35C7.76867 13.35 7.55067 13.45 7.114 13.6514L6.71733 13.834C5.182 14.5407 4.414 14.894 3.904 14.5074C3.39267 14.1194 3.47733 13.2474 3.646 11.5027L3.69 11.052C3.738 10.556 3.762 10.308 3.69 10.0787C3.61933 9.84871 3.46 9.66271 3.14267 9.29204L2.85333 8.95337C1.73533 7.64671 1.17667 6.99271 1.37133 6.36537C1.56667 5.73804 2.38667 5.55204 4.02667 5.18137L4.45067 5.08537C4.91667 4.98004 5.14933 4.92737 5.33667 4.78537C5.52333 4.64337 5.64333 4.42804 5.88333 3.99737L6.102 3.60537Z"
                                  stroke="#0654D6"
                                  stroke-width="1.5"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_206_105">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <button className="w-20 h-auto px-5 p-1 text-sm rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                              Buy
                            </button>
                          </div>
                        </li>
                      );
                    })}
                </ul>
                <button className="w-full h-auto px-5 p-2 text-sm font-light rounded-2xl bg-[#F2F2F2] text-[#0654D6] ">
                  See more
                </button>
              </div>
              <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="flex flex-row justify-between items-center px-2">
                  <div className="text-xl text-[#333333] font-dmsans font-semibold">
                    Biggest Fallers
                  </div>
                  <div className="text-sm text-[#0654D6] font-dmsans font-light cursor-pointer">
                    View all
                  </div>
                </div>
                <ul className="px-2 divide-y mt-2 divide-gray-200 dark:divide-gray-700">
                  <li className="py-2">
                    <div className="flex items-center  justify-evenly space-x-4">
                      <div className="">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/nft2.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="w-[50%]">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          ARG vs NIG
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
                        </p>
                      </div>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_206_105)">
                          <path
                            d="M6.102 3.60537C6.94667 2.09071 7.36867 1.33337 8 1.33337C8.63133 1.33337 9.05333 2.09071 9.898 3.60537L10.1167 3.99737C10.3567 4.42804 10.4767 4.64337 10.6633 4.78537C10.85 4.92737 11.0833 4.98004 11.55 5.08537L11.974 5.18137C13.614 5.55271 14.4333 5.73804 14.6287 6.36537C14.8233 6.99204 14.2647 7.64604 13.1467 8.95337L12.8573 9.29137C12.54 9.66271 12.3807 9.84871 12.3093 10.078C12.238 10.308 12.262 10.556 12.31 11.0514L12.354 11.5027C12.5227 13.2474 12.6073 14.1194 12.0967 14.5067C11.586 14.8947 10.818 14.5407 9.28333 13.834L8.88533 13.6514C8.44933 13.45 8.23133 13.35 8 13.35C7.76867 13.35 7.55067 13.45 7.114 13.6514L6.71733 13.834C5.182 14.5407 4.414 14.894 3.904 14.5074C3.39267 14.1194 3.47733 13.2474 3.646 11.5027L3.69 11.052C3.738 10.556 3.762 10.308 3.69 10.0787C3.61933 9.84871 3.46 9.66271 3.14267 9.29204L2.85333 8.95337C1.73533 7.64671 1.17667 6.99271 1.37133 6.36537C1.56667 5.73804 2.38667 5.55204 4.02667 5.18137L4.45067 5.08537C4.91667 4.98004 5.14933 4.92737 5.33667 4.78537C5.52333 4.64337 5.64333 4.42804 5.88333 3.99737L6.102 3.60537Z"
                            stroke="#0654D6"
                            stroke-width="1.5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_206_105">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <button className="w-20 h-auto px-5 p-1 text-sm rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                        Buy
                      </button>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center  justify-evenly space-x-4">
                      <div className="">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/nft2.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="w-[50%]">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          ARG vs NIG
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
                        </p>
                      </div>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_206_105)">
                          <path
                            d="M6.102 3.60537C6.94667 2.09071 7.36867 1.33337 8 1.33337C8.63133 1.33337 9.05333 2.09071 9.898 3.60537L10.1167 3.99737C10.3567 4.42804 10.4767 4.64337 10.6633 4.78537C10.85 4.92737 11.0833 4.98004 11.55 5.08537L11.974 5.18137C13.614 5.55271 14.4333 5.73804 14.6287 6.36537C14.8233 6.99204 14.2647 7.64604 13.1467 8.95337L12.8573 9.29137C12.54 9.66271 12.3807 9.84871 12.3093 10.078C12.238 10.308 12.262 10.556 12.31 11.0514L12.354 11.5027C12.5227 13.2474 12.6073 14.1194 12.0967 14.5067C11.586 14.8947 10.818 14.5407 9.28333 13.834L8.88533 13.6514C8.44933 13.45 8.23133 13.35 8 13.35C7.76867 13.35 7.55067 13.45 7.114 13.6514L6.71733 13.834C5.182 14.5407 4.414 14.894 3.904 14.5074C3.39267 14.1194 3.47733 13.2474 3.646 11.5027L3.69 11.052C3.738 10.556 3.762 10.308 3.69 10.0787C3.61933 9.84871 3.46 9.66271 3.14267 9.29204L2.85333 8.95337C1.73533 7.64671 1.17667 6.99271 1.37133 6.36537C1.56667 5.73804 2.38667 5.55204 4.02667 5.18137L4.45067 5.08537C4.91667 4.98004 5.14933 4.92737 5.33667 4.78537C5.52333 4.64337 5.64333 4.42804 5.88333 3.99737L6.102 3.60537Z"
                            stroke="#0654D6"
                            stroke-width="1.5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_206_105">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <button className="w-20 h-auto px-5 p-1 text-sm rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                        Buy
                      </button>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center  justify-evenly space-x-4">
                      <div className="">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/nft2.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="w-[50%]">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          ARG vs NIG
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
                        </p>
                      </div>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_206_105)">
                          <path
                            d="M6.102 3.60537C6.94667 2.09071 7.36867 1.33337 8 1.33337C8.63133 1.33337 9.05333 2.09071 9.898 3.60537L10.1167 3.99737C10.3567 4.42804 10.4767 4.64337 10.6633 4.78537C10.85 4.92737 11.0833 4.98004 11.55 5.08537L11.974 5.18137C13.614 5.55271 14.4333 5.73804 14.6287 6.36537C14.8233 6.99204 14.2647 7.64604 13.1467 8.95337L12.8573 9.29137C12.54 9.66271 12.3807 9.84871 12.3093 10.078C12.238 10.308 12.262 10.556 12.31 11.0514L12.354 11.5027C12.5227 13.2474 12.6073 14.1194 12.0967 14.5067C11.586 14.8947 10.818 14.5407 9.28333 13.834L8.88533 13.6514C8.44933 13.45 8.23133 13.35 8 13.35C7.76867 13.35 7.55067 13.45 7.114 13.6514L6.71733 13.834C5.182 14.5407 4.414 14.894 3.904 14.5074C3.39267 14.1194 3.47733 13.2474 3.646 11.5027L3.69 11.052C3.738 10.556 3.762 10.308 3.69 10.0787C3.61933 9.84871 3.46 9.66271 3.14267 9.29204L2.85333 8.95337C1.73533 7.64671 1.17667 6.99271 1.37133 6.36537C1.56667 5.73804 2.38667 5.55204 4.02667 5.18137L4.45067 5.08537C4.91667 4.98004 5.14933 4.92737 5.33667 4.78537C5.52333 4.64337 5.64333 4.42804 5.88333 3.99737L6.102 3.60537Z"
                            stroke="#0654D6"
                            stroke-width="1.5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_206_105">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <button className="w-20 h-auto px-5 p-1 text-sm rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                        Buy
                      </button>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center  justify-evenly space-x-4">
                      <div className="">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/assets/images/nft2.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="w-[50%]">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          ARG vs NIG
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
                        </p>
                      </div>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_206_105)">
                          <path
                            d="M6.102 3.60537C6.94667 2.09071 7.36867 1.33337 8 1.33337C8.63133 1.33337 9.05333 2.09071 9.898 3.60537L10.1167 3.99737C10.3567 4.42804 10.4767 4.64337 10.6633 4.78537C10.85 4.92737 11.0833 4.98004 11.55 5.08537L11.974 5.18137C13.614 5.55271 14.4333 5.73804 14.6287 6.36537C14.8233 6.99204 14.2647 7.64604 13.1467 8.95337L12.8573 9.29137C12.54 9.66271 12.3807 9.84871 12.3093 10.078C12.238 10.308 12.262 10.556 12.31 11.0514L12.354 11.5027C12.5227 13.2474 12.6073 14.1194 12.0967 14.5067C11.586 14.8947 10.818 14.5407 9.28333 13.834L8.88533 13.6514C8.44933 13.45 8.23133 13.35 8 13.35C7.76867 13.35 7.55067 13.45 7.114 13.6514L6.71733 13.834C5.182 14.5407 4.414 14.894 3.904 14.5074C3.39267 14.1194 3.47733 13.2474 3.646 11.5027L3.69 11.052C3.738 10.556 3.762 10.308 3.69 10.0787C3.61933 9.84871 3.46 9.66271 3.14267 9.29204L2.85333 8.95337C1.73533 7.64671 1.17667 6.99271 1.37133 6.36537C1.56667 5.73804 2.38667 5.55204 4.02667 5.18137L4.45067 5.08537C4.91667 4.98004 5.14933 4.92737 5.33667 4.78537C5.52333 4.64337 5.64333 4.42804 5.88333 3.99737L6.102 3.60537Z"
                            stroke="#0654D6"
                            stroke-width="1.5"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_206_105">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <button className="w-20 h-auto px-5 p-1 text-sm rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                        Buy
                      </button>
                    </div>
                  </li>
                </ul>
                <button className="w-full h-auto px-5 p-2 text-sm font-light rounded-2xl bg-[#F2F2F2] text-[#0654D6] ">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
