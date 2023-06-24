import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";
export default function IndexPage() {
  const { data, status } = useSession();
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <SideBar />
        <div className="p-4 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="text-2xl text-[#333333] font-dmsans font-semibold">
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
                  {/* <img
                    className="h-10 w-10 rounded-full mr-4 "
                    src={data.user.image}
                  />
                  Hemang Vora
                  <br />
                  @HemangVora */}
                  <div className="flex  flex-row w-72 items-center justify-center mt-20 ">
                  <div className="w-48 text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <button
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 fill-current"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Profile
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 fill-current"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                      </svg>
                      Settings
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 fill-current"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
                </div>
                
              </div>
              <div className="grid rounded h-auto p-3 col-span-3 dark:bg-gray-800">
                <div className="text-2xl text-[#333333] font-dmsans font-semibold">
                  Account Information
                </div>
                <div className="flex  flex-row mt-10 items-center justify-center mb-5 ">
                  <img
                    className="h-25 w-25 rounded-full mr-4 "
                    src={data.user.image}
                  />
                </div>
                <div className="rounded bg-white h-auto p-5  dark:bg-gray-800">
                  <div className="text-2xl text-[#333333] font-dmsans font-semibold">
                    Personal Information
                  </div>
                  <div className="w-50 flex flex-col justify-between h-full">
                    <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-5 font-dmsans">
                      <div className="text-xl text-[#333333]  font-dmsans font-normal">
                        Name
                      </div>
                      <div className="text-xl text-[#333333]  font-dmsans font-thin">
                        Hemang Vora
                      </div>
                    </div>
                    <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-5 font-dmsans">
                      <div className="text-xl text-[#333333]  font-dmsans font-normal">
                        UserName
                      </div>
                      <div className="text-xl text-[#333333]  font-dmsans font-thin">
                        @HemangVora
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded bg-white h-auto p-5 my-5 dark:bg-gray-800">
                  <div className="text-2xl text-[#333333] font-dmsans font-semibold">
                    Contact Information
                  </div>
                  <div className="w-50 flex flex-col justify-between h-full">
                    <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-5 font-dmsans">
                      <div className="text-xl text-[#333333]  font-dmsans font-normal">
                        Email
                      </div>
                      <div className="text-xl text-[#333333]  font-dmsans font-thin">
                        hemangvora2@gmail.com
                      </div>
                    </div>
                    <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-5 font-dmsans">
                      <div className="text-xl text-[#333333]  font-dmsans font-normal">
                        PhoneNo
                      </div>
                      <div className="text-xl text-[#333333]  font-dmsans font-thin">
                        +9183484483838
                      </div>
                    </div>
                    <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-5 font-dmsans">
                      <div className="text-xl text-[#333333]  font-dmsans font-normal">
                        Wallet Address
                      </div>
                      <div className="text-xl text-[#333333]  font-dmsans font-thin">
                        0x1212221213
                      </div>
                    </div>
                  </div>
                </div>
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
        className=" text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("google")}
      >
        sign in with gooogle
      </button>
    </div>
  );
}
