import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function IndexPage() {
  const { data, status } = useSession();
  const [profileVisible, setProfileVisible] = useState(true);
  const router = useRouter();

  useState(()=>{
    getPortfolio()
  },[])
  const [totalPortfolio, setTotalPortfolio] = useState("");
  async function getPortfolio() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL +
          "/api/viewPortfolio/" +
          data.user.email,
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

      const Nftarr = Object.keys(response.map);
      const length = Nftarr.length;
      let arr = [];
      let portfolioVal = 0,
        change = 0;
      for (let i = 0; i < Math.min(length, 3); i++) {
        arr.push({
          id: response.map[Nftarr[i]].details.id,
          name: response.map[Nftarr[i]].details.name,
          image: response.map[Nftarr[i]].details.ipfs,
          price: response.map[Nftarr[i]].details.price,
          category: response.map[Nftarr[i]].details.marketPlaceCategory,
          change: response.map[Nftarr[i]].details.change,
          buyPrice: response.map[Nftarr[i]].buyPrice,
        });
        portfolioVal += parseInt(
          response.map[Nftarr[i]].details.price.replace(/\$/g, "")
        );
        change += parseInt(response.map[Nftarr[i]].details.change);
      }
      setTotalPortfolio(portfolioVal + ":" + change);

    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }

  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
{        totalPortfolio && <SideBar totalPortfolio={totalPortfolio} />}

        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-screen overflow-y-hidden">
            <div className="text-2xl text-[#333333] font-dmsans font-semibold cursor-pointer" onClick={()=>router.push("/Dashboard")}>
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
                      onClick={()=>setProfileVisible(true)}
                        type="button"
                        className={profileVisible ? " relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b rounded-t-lg hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border-l border-l-[#0654D6]":"relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b rounded-t-lg hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" }
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
                      onClick={()=>setProfileVisible(false)}
                        type="button"
                        className={!profileVisible ? " relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b rounded-t-lg hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white border-l border-l-[#0654D6]":"relative inline-flex items-center w-full  px-4 py-2 text-sm font-medium border-b rounded-t-lg hover:bg-gray-100 hover:text-blue-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" }
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
                    </div>
                  </div>
                </div>
              </div>

              {/* //////////////////////////////////// */}
              {/* Profile SECTION */}
              {/* //////////////////////////////////// */}
              {profileVisible && (
                <div className="grid rounded h-auto w-3/4 p-3 col-span-3 dark:bg-gray-800">
                  <div className="text-2xl text-[#333333] font-dmsans font-medium">
                    Account Information
                  </div>
                  <div className="flex  flex-row mt-10 items-center justify-center mb-5 ">
                    <img
                      className="h-25 w-25 rounded-full mr-4 "
                      src={data.user.image}
                    />
                  </div>
                  <div className="rounded bg-white h-auto p-5  dark:bg-gray-800">
                    <div className="text-2xl text-[#333333] font-dmsans font-medium">
                      Personal Information
                    </div>
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-3 mt-0 font-dmsans">
                        <div className="text-lg text-[#333333]  font-dmsans font-normal">
                          Name
                        </div>
                        <div className="text-lg text-[#333333]  font-dmsans font-thin">
                          Hemang Vora
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-3 mt-0 font-dmsans">
                        <div className="text-lg text-[#333333]  font-dmsans font-normal">
                          UserName
                        </div>
                        <div className="text-lg text-[#333333]  font-dmsans font-thin">
                          @HemangVora
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-white h-auto p-5 my-5 dark:bg-gray-800">
                    <div className="text-2xl text-[#333333] font-dmsans font-medium">
                      Contact Information
                    </div>
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-3 mt-0 font-dmsans">
                        <div className="text-lg text-[#333333]  font-dmsans font-normal">
                          Email
                        </div>
                        <div className="text-lg text-[#333333]  font-dmsans font-thin">
                          hemangvora2@gmail.com
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-3 mt-0 font-dmsans">
                        <div className="text-lg text-[#333333]  font-dmsans font-normal">
                          PhoneNo
                        </div>
                        <div className="text-lg text-[#333333]  font-dmsans font-thin">
                          +9183484483838
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal m-3 mt-0 font-dmsans">
                        <div className="text-lg text-[#333333]  font-dmsans font-normal">
                          Wallet Address
                        </div>
                        <div className="text-lg text-[#333333]  font-dmsans font-thin">
                          0x1212221213
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* //////////////////////////////////// */}
              {/* SETTING SECTION */}
              {/* //////////////////////////////////// */}

              {!profileVisible && (
                <div className="grid rounded h-auto w-3/4 p-3 col-span-3 dark:bg-gray-800">
                  <div className="text-2xl text-[#333333] font-dmsans font-medium">
                    Settings
                  </div>

                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                 
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between items-center font-normal m-3 mt-0 mb-0 font-dmsans">
                        <div className="flex items-center text-2xl justify-center  ">
                          Wallet
                        </div>
                     
                        <div className="flex items-center justify-center w-16 h-6 not-italic font-bold leading-6 text-gray-500 flex-none order-none flex-grow-0">
                          wbsc2...83beh
                        </div>
                        <div className="flex items-center justify-center ">
                          <button className="bg-[#0654D6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Disconnect Wallet
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                    <div className="text-xl text-[#333333] font-dmsans font-medium">
                      Default Payment Method
                    </div>
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-start items-center font-normal m-3 mt-0 mb-0 font-dmsans">
                        <div className="flex items-center justify-center pr-20">
                         
                        <label
                            htmlFor="default-radio-1"
                            className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            <img
                              className="h-[42px] w-[62px] rounded-md "
                              src={(require = "./assets/images/mastercard.png")}
                              alt=""
                            />
                          </label>
                           <input
                            id="default-radio-1"
                            type="radio"
                            defaultValue
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                      
                        </div>
                        <div className="flex items-center justify-center">
                        <label
                            htmlFor="default-radio-2"
                            className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            <img
                              className="h-[24px] w-[78px] rounded-md "
                              src={(require = "./assets/images/visa.png")}
                              alt=""
                            />
                          </label>
                          <input
                            defaultChecked
                            id="default-radio-2"
                            type="radio"
                            defaultValue
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                      
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                    <div className="text-xl text-[#333333] font-dmsans font-medium">
                      Add / Remove Payment Method
                    </div>
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-evenly items-center font-normal m-3 mt-0 mb-0 font-dmsans">
                        <div className="flex items-center justify-center">
                          <img
                            className="h-[46px] w-[97px] rounded-md "
                            src={(require = "./assets/images/ab.png")}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <img
                            className="h-[46px] w-[114px] rounded-md "
                            src={(require = "./assets/images/rb.png")}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-center ">
                          <img
                            className="h-[46px] w-[81px] rounded-md "
                            src={(require = "./assets/images/ac.png")}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <img
                            className="h-[46px] w-[81px] rounded-md "
                            src={(require = "./assets/images/rc.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                  <div className="text-xl text-[#333333] font-dmsans font-medium">
                      Account
                    </div>
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between items-center font-normal m-3 mt-0 mb-0 font-dmsans">
                        <div className="flex items-center text-2xl justify-center  ">
                        &quot;  Close Engage Account&quot;
                        </div>
                     
                     
                        <div className="flex items-center justify-center w-">
                          <button className="@apply box-border flex flex-col items-start gap-2 border not-italic font-normal text-sm leading-6 text-[#EA0606] bg-[#ea060633] flex-none order-none grow-0 px-4 py-2 rounded-lg border-solid border-[#EA0606] background: rgba(234, 6, 6, 0.2)">
                          Disconnect Wallet
                          </button>
                        </div>
                      </div>
                    </div>
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
    router.push("/")
  );
}
