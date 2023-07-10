import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NftDetails() {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <SideBar />

        <div className="p-0 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-screen overflow-y-hidden">
            <div
              className="text-2xl text-[#333333] font-dmsans font-semibold cursor-pointer"
              onClick={() => router.push("/Dashboard")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.375 5.25L8.625 12L15.375 18.75"
                  stroke="#00040A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className=" rounded  h-fit p-3 col-span-2 dark:bg-gray-800">
                <div className=" flex flex-row   w-full  h-full">
                  <div className="text-[#FFFFFF] font-dmsans ">
                    <img
                      className="h-[300px] w-[300px] rounded-md "
                      src={(require = "./assets/images/nft1.png")}
                      alt=""
                    />
                  </div>
                  <div className="text-[#333333]  text-[24px] font-medium m-5 font-dmsans">
                    JON Vs Hmg Baseball <br />
                    $0.0000007
                    <div className="w-full text-[16px] h-auto m-2  flex flex-row ">
                      Today <div className="text-[#EA0606] ml-5">-27.4%</div>
                    </div>
                    <div className="text-[#000] font-dmsans">
                      <button className="w-full text-[10px] h-auto p-3 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                        Add to watchlist
                      </button>
                      <button className="w-full text-[10px] h-auto p-3 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row   w-full justify-around h-full">
                  <img
                    className="rounded-md "
                    src={(require = "./assets/images/chart.png")}
                    alt=""
                  />
                </div>
                <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                  <div className="text-xl text-[#333333] font-dmsans font-medium">
                    About JON Vs HMG
                  </div>
                  <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                    Lorem ipsum dolor sit amet consectetur. Nunc suspendisse dui
                    posuere ante urna ut habitant. Magna eget iaculis viverra
                    suspendisse malesuada. Non a bibendum consequat viverra
                    neque aliquam bibendum euismod. Amet erat magnis et bibendum
                    varius eget amet. Molestie vulputate consectetur est mauris.
                    Eu imperdiet ac cras malesuada. Vitae ut turpis diam
                    convallis. Lacus nullam consequat diam eu. Ipsum sed eget
                    eget purus nunc eget enim semper.
                  </div>
                </div>
              </div>

              <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="text-xl text-[#333333] font-dmsans font-semibold">
                  Similar Collectibles
                </div>
                <ul className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700">
                  <li className="pb-3 sm:pb-4 ">
                    <div className="flex items-center justify-evenly w-auto flex-row">
                      <div className=" ">
                        <img
                          className="w-20 h-20 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="text-[#333333]  font-medium  font-dmsans">
                        JON Vs Hmg Baseball <br />
                        $0.0000007
                      </div>
                      <div className="text-[#000] font-dmsans flex items-center justify-evenly w-auto flex-col">
                        <button className="w-24 h-auto text-[10px] p-2  rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                          Add to watchlist
                        </button>
                        <button className="w-24 h-auto text-[10px] p-2  my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                          Buy
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="pb-3 sm:pb-4 ">
                    <div className="flex items-center justify-evenly w-auto flex-row">
                      <div className=" ">
                        <img
                          className="w-20 h-20 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="text-[#333333]  font-medium  font-dmsans">
                        JON Vs Hmg Baseball <br />
                        $0.0000007
                      </div>
                      <div className="text-[#000] font-dmsans flex items-center justify-evenly w-auto flex-col">
                        <button className="w-24 h-auto text-[10px] p-2  rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                          Add to watchlist
                        </button>
                        <button className="w-24 h-auto text-[10px] p-2  my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                          Buy
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="pb-3 sm:pb-4 ">
                    <div className="flex items-center justify-evenly w-auto flex-row">
                      <div className=" ">
                        <img
                          className="w-20 h-20 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="text-[#333333]  font-medium  font-dmsans">
                        JON Vs Hmg Baseball <br />
                        $0.0000007
                      </div>
                      <div className="text-[#000] font-dmsans flex items-center justify-evenly w-auto flex-col">
                        <button className="w-24 h-auto text-[10px] p-2  rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                          Add to watchlist
                        </button>
                        <button className="w-24 h-auto text-[10px] p-2  my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                          Buy
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="pb-3 sm:pb-4 ">
                    <div className="flex items-center justify-evenly w-auto flex-row">
                      <div className=" ">
                        <img
                          className="w-20 h-20 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="text-[#333333]  font-medium  font-dmsans">
                        JON Vs Hmg Baseball <br />
                        $0.0000007
                      </div>
                      <div className="text-[#000] font-dmsans flex items-center justify-evenly w-auto flex-col">
                        <button className="w-24 h-auto text-[10px] p-2  rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                          Add to watchlist
                        </button>
                        <button className="w-24 h-auto text-[10px] p-2  my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                          Buy
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="pb-3 sm:pb-4 ">
                    <div className="flex items-center justify-evenly w-auto flex-row">
                      <div className=" ">
                        <img
                          className="w-20 h-20 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="text-[#333333]  font-medium  font-dmsans">
                        JON Vs Hmg Baseball <br />
                        $0.0000007
                      </div>
                      <div className="text-[#000] font-dmsans flex items-center justify-evenly w-auto flex-col">
                        <button className="w-24 h-auto text-[10px] p-2  rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                          Add to watchlist
                        </button>
                        <button className="w-24 h-auto text-[10px] p-2  my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                          Buy
                        </button>
                      </div>
                    </div>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
    return (
    router.push("/")
  );
}
