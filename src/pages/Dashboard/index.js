import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
export default function IndexPage() {
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
              Featured
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
                    src={(require = "./assets/images/featured.png")}
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
                    src={(require = "./assets/images/featured.png")}
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
                    src={(require = "./assets/images/featured.png")}
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
                    src={(require = "./assets/images/featured.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="text-xl text-[#333333] font-dmsans font-semibold">
              My Portfolio
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-evenly h-18 p-5 rounded bg-white dark:bg-gray-800">
                <div className="text-[#FFFFFF] font-dmsans justify-evenly items-center flex flex-row">
                  <img
                    className="h-12 w-12 rounded-2xl"
                    src={(require = "./assets/images/nft1.png")}
                    alt=""
                  />
                </div>
                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  JON Vs Hmg <br />
                  Baseball
                </div>

                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  Revenue <br />
                  <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                    +27.4%
                  </div>
                </div>

                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  Market Gap <br />
                  $530,450
                </div>
              </div>
              <div className="flex items-center justify-evenly h-18 rounded bg-white dark:bg-gray-800">
                <div className="text-[#FFFFFF] font-dmsans justify-evenly items-center flex flex-row">
                  <img
                    className="h-12 w-12 rounded-2xl"
                    src={(require = "./assets/images/nft2.png")}
                    alt=""
                  />
                </div>
                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  JON Vs Hmg <br />
                  Baseball
                </div>

                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  Revenue <br />
                  <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                    +27.4%
                  </div>
                </div>

                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  Market Gap <br />
                  $530,450
                </div>
              </div>
              <div className="flex items-center justify-evenly h-18 rounded bg-white dark:bg-gray-800">
                <div className="text-[#FFFFFF] font-dmsans justify-evenly items-center flex flex-row">
                  <img
                    className="h-12 w-12 rounded-2xl"
                    src={(require = "./assets/images/nft2.png")}
                    alt=""
                  />
                </div>
                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  JON Vs Hmg <br />
                  Baseball
                </div>

                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  Revenue <br />
                  <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                    +27.4%
                  </div>
                </div>

                <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                  Market Gap <br />
                  $530,450
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="grid grid-cols-2 rounded bg-white h-auto p-3 col-span-2 dark:bg-gray-800">
                <div className="text-xl absolute text-[#333333] font-dmsans font-semibold">
                  Top Movers
                </div>
                <div className=" flex flex-row m-3 mt-7 py-2 justify-between h-full">
                  <div className="text-[#FFFFFF] font-dmsans ">
                    <img
                      className="h-[110px] w-[190px] rounded-md "
                      src={(require = "./assets/images/nft1.png")}
                      alt=""
                    />
                  </div>
                  <div className="text-[#333333] w-48 text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg Baseball <br />
                    $0.0000007
                  </div>
                  <div className="text-[#000] font-dmsans">
                    <button className="w-36 h-auto p-2 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Add to watchlist
                    </button>
                    <button className="w-36 h-auto p-2 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                      Buy
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row m-3 mt-7 py-2 justify-between h-full">
                  <div className="text-[#FFFFFF] font-dmsans ">
                    <img
                      className="h-[110px] w-[190px] rounded-md "
                      src={(require = "./assets/images/nft2.png")}
                      alt=""
                    />
                  </div>
                  <div className="text-[#333333] w-48 text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg Baseball <br />
                    $0.0000007
                  </div>
                  <div className="text-[#000] font-dmsans">
                    <button className="w-36 h-auto p-2 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Add to watchlist
                    </button>
                    <button className="w-36 h-auto p-2 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                      Buy
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row m-3 my-0 py-2 justify-between h-full">
                  <div className="text-[#FFFFFF] font-dmsans ">
                    <img
                      className="h-[110px] w-[190px] rounded-md "
                      src={(require = "./assets/images/nft1.png")}
                      alt=""
                    />
                  </div>
                  <div className="text-[#333333] w-48 text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg Baseball <br />
                    $0.0000007
                  </div>
                  <div className="text-[#000] font-dmsans">
                    <button className="w-36 h-auto p-2 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Add to watchlist
                    </button>
                    <button className="w-36 h-auto p-2 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                      Buy
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row m-3 my-0 py-2 justify-between h-full">
                  <div className="text-[#FFFFFF] font-dmsans ">
                    <img
                      className="h-[110px] w-[190px] rounded-md "
                      src={(require = "./assets/images/nft2.png")}
                      alt=""
                    />
                  </div>
                  <div className="text-[#333333] w-48 text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg Baseball <br />
                    $0.0000007
                  </div>
                  <div className="text-[#000] font-dmsans">
                    <button className="w-36 h-auto p-2 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Add to watchlist
                    </button>
                    <button className="w-36 h-auto p-2 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                      Buy
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row m-3 my-0 py-2 justify-between h-full">
                  <div className="text-[#FFFFFF] font-dmsans ">
                    <img
                      className="h-[110px] w-[190px] rounded-md "
                      src={(require = "./assets/images/nft1.png")}
                      alt=""
                    />
                  </div>
                  <div className="text-[#333333] w-48 text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg Baseball <br />
                    $0.0000007
                  </div>
                  <div className="text-[#000] font-dmsans">
                    <button className="w-36 h-auto p-2 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Add to watchlist
                    </button>
                    <button className="w-36 h-auto p-2 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                      Buy
                    </button>
                  </div>
                </div>
                <div className=" flex flex-row m-3 my-0 py-2 justify-between h-full">
                  <div className="text-[#FFFFFF] font-dmsans ">
                    <img
                      className="h-[110px] w-[190px] rounded-md "
                      src={(require = "./assets/images/nft2.png")}
                      alt=""
                    />
                  </div>
                  <div className="text-[#333333] w-48 text-[13px] font-medium m-5 font-dmsans">
                    JON Vs Hmg Baseball <br />
                    $0.0000007
                  </div>
                  <div className="text-[#000] font-dmsans">
                    <button className="w-36 h-auto p-2 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] ">
                      Add to watchlist
                    </button>
                    <button className="w-36 h-auto p-2 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] ">
                      Buy
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="text-xl text-[#333333] font-dmsans font-semibold">
                  My Wishlist
                </div>
                <ul className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700">
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@flowbite.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@flowbite.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@flowbite.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Thomas Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@flowbite.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "./assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@flowbite.com
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
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
    <div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("google")}
      >
        sign in with gooogle
      </button>
    </div>
  );
}
