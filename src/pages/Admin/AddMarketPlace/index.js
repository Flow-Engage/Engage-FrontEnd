import Head from "@/components/Head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import AdminSidebar from "@/components/AdminSidebar";

export default function IndexPage() {
  const { data, status } = useSession();
  const [descriptionVisible, setdescriptionVisible] = useState(true);
  const router = useRouter();

  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <AdminSidebar />

        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-[140vh]  overflow-y-hidden">
            <div
              className="text-2xl text-[#333333]  font-semibold cursor-pointer"
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
            <div className="grid grid-cols-4 gap-4 ">
              <div className="grid grid-cols-1 rounded h-auto p-3 col-span-1 dark:bg-gray-800">
                <div className="flex  flex-col w-72 items-center justify-start  ">
                  <div className="flex  flex-row w-72 items-center justify-center mt-20 ">
                    <div className="w-48 text-gray-900  rounded-lg   dark:text-white">
                      <button
                        onClick={() => setdescriptionVisible(true)}
                        type="button"
                        className={
                          descriptionVisible
                            ? " relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b  hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border-l border-l-[#0654D6]"
                            : "relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b  hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        }
                      >
                        Description
                      </button>
                      <button
                        onClick={() => setdescriptionVisible(false)}
                        type="button"
                        className={
                          !descriptionVisible
                            ? " relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b  hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border-l border-l-[#0654D6]"
                            : "relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b  hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        }
                      >
                        NFT and Earnings
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* //////////////////////////////////// */}
              {/* description SECTION */}
              {/* //////////////////////////////////// */}
              {descriptionVisible && (
                <div className="grid rounded h-auto w-3/4 p-3 col-span-3 dark:bg-gray-800">
                  <div className="text-2xl text-[#333333]  font-medium">
                    Description
                  </div>

                  <div className="rounded bg-white h-auto p-5  dark:bg-gray-800">
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      <div className="text-[#333333] text-[13px]   m-3 mt-0 ">
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Marketplace Name
                          </label>
                          <input
                            type="email"
                            id="email"
                            className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type Marketplace name here"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Category
                          </label>
                          <input
                            type="email"
                            id="email"
                            className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Choose Market Category"
                            required
                          />
                        </div>
                        <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal  ">
                          <div className="text-lg text-[#333333]   font-normal">
                            <div className="mb-6">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Marketplace Release Date
                              </label>
                              <input
                                type="email"
                                id="email"
                                className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required
                              />
                            </div>
                          </div>
                          <div className="text-lg text-[#333333]   font-thin">
                            <div className="mb-6">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Marketplace Release Time
                              </label>
                              <input
                                type="email"
                                id="email"
                                className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-end mt-10">
                    <button
                      className="bg-[#0654D6]  w-44 hover:bg-blue-700 text-white font-extralight py-2 px-4 rounded"
                      onClick={() => setdescriptionVisible(false)}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              )}

              {/* //////////////////////////////////// */}
              {/* NFT AND EARNINGS SECTION */}
              {/* //////////////////////////////////// */}

              {!descriptionVisible && (
                <div className="grid rounded h-auto w-3/4 p-3 col-span-3 dark:bg-gray-800">
                  <div className="text-2xl text-[#333333]  font-medium">
                    NFT and Earnings
                  </div>

                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                    <div className="text-xl text-[#333333]  font-medium">
                      Earnings
                    </div>
                    <div className="w-50 flex flex-col justify-between h-auto p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal mb-5 ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Quantity of NFTs Available
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                        <div className="text-lg text-[#333333] w-[45%]  font-thin">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Max NFTs per User
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Initial Prize Amount
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                        <div className="text-lg text-[#333333] w-[45%]  font-thin">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Administrator Commissions
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                    <div className="text-xl text-[#333333]  font-medium">
                      NFT
                    </div>
                    <div className="w-50 flex flex-col justify-between h-auto p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal mb-5 ">
                        <div className="text-lg text-[#333333] w-full  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Upload NFT
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" w-full border placeholder:font-light h-36  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=" Add NFT Image / Video here"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Name of NFT
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                        <div className="text-lg text-[#333333] w-[45%]  font-thin">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Starting Price
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                    <div className="w-50 flex flex-col justify-between h-auto p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal mb-5 ">
                        <div className="text-lg text-[#333333] w-full  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Upload NFT
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" w-full border placeholder:font-light h-36  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=" Add NFT Image / Video here"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Name of NFT
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                        <div className="text-lg text-[#333333] w-[45%]  font-thin">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Starting Price
                            </label>
                            <input
                              type="email"
                              id="email"
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-white h-auto p-1 cursor-pointer mt-3 text-[#0654D6] flex flex-row justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z"
                        fill="#0654D6"
                      />
                    </svg>
                    Add New NFT
                  </div>
                  <div className="w-full flex flex-row justify-end mt-10">
                    <button
                      className="bg-[#0654D6]  w-44 hover:bg-blue-700 text-white font-extralight py-2 px-4 rounded"
                      onClick={ {}}
                    >
                      Finish
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button
        className=" text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("google")}
      >
        sign in with gooogle
      </button>
    </div>
  );
}
