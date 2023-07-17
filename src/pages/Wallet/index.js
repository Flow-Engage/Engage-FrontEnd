import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function IndexPage() {
  const { data, status } = useSession();
  const [tabValue1, setTabValue1] = useState("1");
  const [wishlist, setWishlist] = useState([]);
  const router = useRouter();
  const handleChange1 = (event, newValue) => {
    setTabValue1(newValue);
  };
  useEffect(() => {
    if (data) getWishlist();
  }, [data]);
  async function getWishlist() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL +
          "/api/viewWishlist/" +
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

      let Top = [];
      response.filter((elem) => {
        Top.push({
          id: elem.id,
          name: elem.name,
          image: elem.ipfs,
          price: elem.price,
          category: elem.marketPlaceCategory,
          change: elem.change,
        });
      });

      setWishlist(Top);
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <SideBar />
        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div
              className="h-52 w-full justify-start flex items-end"
              style={{
                backgroundImage: 'url("/assets/images/banner.png")',
                backgroundSize: "cover",
              }}
            ></div>
            <img
              className="h-40 w-40 relative -top-16 -right-5"
              src="/assets/images/dp.png"
              alt=""
            />
            <div className="relative  -top-16   ">
              <div className="flex flex-row justify-evenly items-center">
                <div className="text-2xl text-[#333333] font-dmsans font-normal w-[25%] ">
                  Hemang Vora
                  <div className="flex flex-row text-sm justify-between items-center w-auto">
                    <div className="flex flex-row">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33334 5.33325H2.66668C1.93134 5.33325 1.33334 5.93125 1.33334 6.66659V13.3333C1.33334 14.0686 1.93134 14.6666 2.66668 14.6666H9.33334C10.0687 14.6666 10.6667 14.0686 10.6667 13.3333V6.66659C10.6667 5.93125 10.0687 5.33325 9.33334 5.33325Z"
                          fill="#333333"
                        />
                        <path
                          d="M13.3333 1.33325H6.66668C6.31305 1.33325 5.97392 1.47373 5.72387 1.72378C5.47382 1.97382 5.33334 2.31296 5.33334 2.66659V3.99992H10.6667C11.0203 3.99992 11.3594 4.14039 11.6095 4.39044C11.8595 4.64049 12 4.97963 12 5.33325V10.6666H13.3333C13.687 10.6666 14.0261 10.5261 14.2762 10.2761C14.5262 10.026 14.6667 9.68687 14.6667 9.33325V2.66659C14.6667 2.31296 14.5262 1.97382 14.2762 1.72378C14.0261 1.47373 13.687 1.33325 13.3333 1.33325Z"
                          fill="#333333"
                        />
                      </svg>
                      wbsc2.......83beh
                    </div>
                    Joined June 2023
                  </div>
                </div>
                <div className=" flex-row flex justify-evenly w-[30%]  rounded-full p-2">
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-white border  border-white text-gray-900 text-sm rounded-[24px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                    placeholder="Search here "
                    required
                  />
                </div>
                <div className=" flex-row flex justify-evenly bg-white w-[35%] rounded-full p-2">
                  <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                    Your Portfolio <br />
                    <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                      $5000
                    </div>
                  </div>
                  <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                    Cash <br />
                    <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                      $5000
                    </div>
                  </div>
                  <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                    Collection Value <br />
                    <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                      $5000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4 mt-3">
              <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="flex flex-row justify-between items-center px-2">
                  <Box sx={{ width: "100%", typography: "body1" }} className="">
                    <TabContext value={tabValue1}>
                      <Box
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                        }}
                      >
                        <TabList
                          onChange={handleChange1}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="My Collection" value="1" />
                          <Tab label="wishlist" value="2" />
                        </TabList>
                      </Box>
                      <TabPanel className="p-0" value="1">
                        <div className="px-2 flex flex-row   divide-y mt-10 divide-gray-200 dark:divide-gray-700">
                          <div className="w-72 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                              <img
                                className="rounded-t-lg h-60 w-full"
                                src="/assets/images/nft1.png"
                                alt=""
                              />
                            </a>
                            <div className="p-5">
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  Lorem ipsum dolor sit amet consectetur.
                                </h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                80 USDT
                              </p>
                            </div>
                          </div>
                          <div className="w-72 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                              <img
                                className="rounded-t-lg h-60 w-full"
                                src="/assets/images/nft2.png"
                                alt=""
                              />
                            </a>
                            <div className="p-5">
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  Lorem ipsum dolor sit amet consectetur.
                                </h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                80 USDT
                              </p>
                            </div>
                          </div>
                          <div className="w-72 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                              <img
                                className="rounded-t-lg h-60 w-full"
                                src="/assets/images/nft1.png"
                                alt=""
                              />
                            </a>
                            <div className="p-5">
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  Lorem ipsum dolor sit amet consectetur.
                                </h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                80 USDT
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel className="p-0" value="2">
                      <ul className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700">
                  {wishlist &&
                    wishlist.map((elem, ind) => {
                      return (
                        <li key={ind} className="pb-3 sm:pb-4">
                          <div
                            className="flex items-center space-x-4 cursor-pointer"
                            onClick={() => {
                              router.push("/NftDetails/" + elem.id);
                            }}
                          >
                            <div className="flex-shrink-0">
                              <Image
                                height={"100"}
                                width="100"
                                className="w-8 h-8 rounded-full"
                                src={(require = elem.image)}
                                alt="Neil image"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {elem.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {elem.category}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {elem.price}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
                      </TabPanel>
                    </TabContext>
                  </Box>

                  {/* <div className="text-sm text-[#999999] w-52 flex flex-row items-center font-dmsans font-light cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z"
                        fill="#999999"
                      />
                    </svg>
                    Add Collection
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
