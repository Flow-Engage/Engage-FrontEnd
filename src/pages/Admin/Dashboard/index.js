import AdminSidebar from "@/components/AdminSidebar";
import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

export default function IndexPage() {
  const { data, status } = useSession();
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
  );

  const cdata = {
    labels: ["Africa", "Asia", "Russia", "Australia", "America"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#38A3A5",
          "#C7F9CC",
          "#22577A",
          "#57CC99",
          "#80ED99",
        ],
        borderColor: ["#38A3A5", "#C7F9CC", "#22577A", "#57CC99", "#80ED99"],
        borderWidth: 1,
      },
    ],
  };
  const lineoptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const linelabels = [
    "0",
    "2H",
    "4H",
    "6H",
    "8H",
    "10H",
    "12H",
    "14H",
    "16H",
    "18H",
    "20H",
    "22H",
    "24H",
  ];

  const linedata = {
    labels: linelabels,
    datasets: [
      {
        label: "Dataset 1",
        data: [0, 18, 69, 8, 20, 71, 50, 22, 73, 52, 24, 73, 52, 24],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <AdminSidebar active={"Dashboard"} />
        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="text-xl text-[#333333] font-dmsans font-medium">
              Dashboard
            </div>

            <div className="grid grid-cols-4  gap-1">
              <div className="grid col-span-2">
                <div className="flex items-center justify-evenly h-18 p-5 rounded bg-white dark:bg-gray-800">
                  <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                    Total Members <br />
                    645
                  </div>

                  <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                    <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                      +27.4%
                    </div>
                  </div>

                  <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                    User Registration Per Day <br />
                    21
                  </div>
                  <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                    <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                      +27.4%
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-1 bg-white  border-t-2 ">
                  <div className="text-[16px] text-[#333333]  p-4 font-dmsans font-medium">
                    Most Active Region
                  </div>
                  <div className="flex items-center justify-evenly  rounded dark:bg-gray-800">
                    <div className="text-[#333333] text-[13px] h-56 font-medium font-dmsans justify-center items-center flex flex-col">
                      <Doughnut
                        data={cdata}
                        options={{
                          plugins: {
                            legend: {
                              position: "bottom",
                            },
                          },
                        }}
                      />
                    </div>
                    <div className="rounded w-1/2 bg-white dark:bg-gray-800">
                      <ul className=" divide-gray-200 dark:divide-gray-700">
                        <li className="py-1 sm:py-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-[#38A3A5]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Africa
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $3467
                            </div>
                          </div>
                        </li>
                        <li className="py-1 sm:py-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-[#C7F9CC]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Asia
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $3467
                            </div>
                          </div>
                        </li>
                        <li className="py-1 sm:py-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-[#22577A]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Russia
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $3467
                            </div>
                          </div>
                        </li>
                        <li className="py-1 sm:py-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-[#57CC99]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Australia
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $3467
                            </div>
                          </div>
                        </li>
                        <li className="py-1 sm:py-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-[#80ED99]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                America
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              $3467
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded bg-white h-fit p-5 grid  row-span-3 dark:bg-gray-800">
                <div className="text-[16px] text-[#333333] font-dmsans font-medium">
                  Most Active Marketplace
                </div>
                <ul className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700">
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded bg-white h-fit p-5 grid  row-span-4 dark:bg-gray-800">
                <div className="text-[16px] text-[#333333] font-dmsans font-medium">
                  Most Active NFTs
                </div>
                <ul className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700">
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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

            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className=" grid col-span-3 rounded bg-white h-auto p-3  dark:bg-gray-800">
                <div className="text-xl absolute text-[#333333] font-dmsans font-medium">
                  Trades
                </div>

                <div className="  mt-5">
                  <Line options={lineoptions} data={linedata} />
                </div>
              </div>

              <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="text-xl text-[#333333] font-dmsans font-medium">
                Most Active Category
                </div>
                <ul className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700">
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
                          src={(require = "/assets/images/nft2.png")}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Soccer
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Football
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
