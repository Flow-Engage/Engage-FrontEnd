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
              Create Promotion
            </div>
            <div className="grid grid-cols-4 gap-4 ">
              <div className="grid grid-cols-1 rounded h-auto p-3 col-span-1 dark:bg-gray-800">
                <div className="flex  flex-col w-72 items-center justify-start  "></div>
              </div>

              {/* //////////////////////////////////// */}
              {/* description SECTION */}
              {/* //////////////////////////////////// */}
              <div className="grid rounded h-auto w-3/4 p-3 col-span-3 dark:bg-gray-800">
                <div className="rounded bg-white h-auto p-5  dark:bg-gray-800">
                  <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                    <div className="text-[#333333] text-[13px]   m-3 mt-0 ">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Upload Promotion Image
                        </label>
                        <input
                          type="email"
                          id="email"
                          className=" border placeholder:font-light h-20 border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Promotion Title
                        </label>
                        <input
                          type="email"
                          id="email"
                          className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Type here"
                          required
                        />
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal  ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="mb-6">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Starting Date
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
                          <div className="mb-6">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Starting Time
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
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal  ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="mb-6">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Ending Date
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
                          <div className="mb-6">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Ending Time
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
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Promotion Details
                        </label>
                        <input
                          type="email"
                          id="email"
                          className=" border placeholder:font-light h-20 border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-end mt-10">
                  <button
                    className="bg-[#0654D6]  w-44 hover:bg-blue-700 text-white font-extralight py-2 px-4 rounded"
                    onClick={{}}
                  >
                    Post Promotion
                  </button>
                </div>
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
