import Link from "next/link";
import { useRouter } from "next/router";
import bg from "public/assets/images/card_bg.png";

export default function SideBar({ marketPlaceCategoryList }) {
  const router = useRouter();
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="font-dmsans fixed top-0 left-0 ml-2 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white-50 mb-10 dark:bg-white-800">
          <div className=" font-medium pl-3  mb-5">
            <img
              className="h-12 flex flex-row justify-center items-center w-auto "
              src="/assets/images/logo.png"
              alt=""
            />
          </div>
          <ul className="space-y-2 font-medium">
            <li className="mb-10">
              <Link
                href="#"
                className="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700"
              >
                <div
                  className="p-4 flex flex-row "
                  style={{
                    backgroundImage: `url(${bg.src})`,
                    width: "224px",
                    height: "81px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="w-50 flex flex-col justify-between h-full">
                    <div className="text-[#FFFFFF] text-[16px] font-extralight font-dmsans">
                      Total Portfolio
                    </div>
                    <div className="text-[#FFFFFF] font-dmsans mt-3">
                      $152,548,485
                    </div>
                    <div></div>
                  </div>
                  <div className="w-40 flex flex-row justify-end items-center h-full">
                    <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8537 7.35375C12.8073 7.40024 12.7521 7.43711 12.6914 7.46228C12.6307 7.48744 12.5657 7.50039 12.5 7.50039C12.4343 7.50039 12.3692 7.48744 12.3085 7.46228C12.2478 7.43711 12.1927 7.40024 12.1462 7.35375L8.49997 3.70687V13.5C8.49997 13.6326 8.44729 13.7598 8.35353 13.8535C8.25976 13.9473 8.13258 14 7.99997 14C7.86736 14 7.74019 13.9473 7.64642 13.8535C7.55265 13.7598 7.49997 13.6326 7.49997 13.5V3.70687L3.85372 7.35375C3.7599 7.44757 3.63265 7.50027 3.49997 7.50027C3.36729 7.50027 3.24004 7.44757 3.14622 7.35375C3.0524 7.25993 2.99969 7.13268 2.99969 7C2.99969 6.86731 3.0524 6.74007 3.14622 6.64625L7.64622 2.14625C7.69266 2.09976 7.7478 2.06288 7.8085 2.03772C7.8692 2.01255 7.93426 1.9996 7.99997 1.9996C8.06568 1.9996 8.13074 2.01255 8.19144 2.03772C8.25214 2.06288 8.30729 2.09976 8.35372 2.14625L12.8537 6.64625C12.9002 6.69268 12.9371 6.74783 12.9623 6.80853C12.9874 6.86923 13.0004 6.93429 13.0004 7C13.0004 7.0657 12.9874 7.13077 12.9623 7.19147C12.9371 7.25217 12.9002 7.30731 12.8537 7.35375Z"
                          fill="#26EA06"
                        />
                      </svg>
                      +27.4%
                    </div>
                    <div></div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/Dashboard"
                className="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                    fill="#0654D6"
                  />
                </svg>

                <span className="ml-3 text-[#0654D6] font-dmsans">
                  Dashboard
                </span>
              </Link>
            </li>

            <li>
              <button
                onClick={() => router.push("/MarketPlace")}
                type="button"
                className="flex items-center w-full p-2 text-[#333333]  "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-[#333333] dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Marketplace
                </span>
                <svg
                  sidebar-toggle-item
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul id="dropdown-example" className=" py-2 space-y-2">
                <li>
                  <Link
                    href="/MarketPlace"
                    className="flex items-center w-full p-2 text-[#333333] transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All marketplaces
                  </Link>
                </li>
                {marketPlaceCategoryList &&
                  marketPlaceCategoryList.map((elem) => {
                    return (
                      <li>
                        <Link
                          href={"/MarketPlace/"+elem}
                          className="flex items-center w-full p-2 text-[#333333] transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          {elem}
                        </Link>
                      </li>
                    );
                  })}
               
              </ul>
            </li>
            <li>
              <Link
                href="/Wallet"
                className="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 6.75H5.25C5.05109 6.75 4.86032 6.67098 4.71967 6.53033C4.57902 6.38968 4.5 6.19891 4.5 6C4.5 5.80109 4.57902 5.61032 4.71967 5.46967C4.86032 5.32902 5.05109 5.25 5.25 5.25H18C18.1989 5.25 18.3897 5.17098 18.5303 5.03033C18.671 4.88968 18.75 4.69891 18.75 4.5C18.75 4.30109 18.671 4.11032 18.5303 3.96967C18.3897 3.82902 18.1989 3.75 18 3.75H5.25C4.65326 3.75 4.08097 3.98705 3.65901 4.40901C3.23705 4.83097 3 5.40326 3 6V18C3 18.5967 3.23705 19.169 3.65901 19.591C4.08097 20.0129 4.65326 20.25 5.25 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V8.25C21.75 7.85218 21.592 7.47064 21.3107 7.18934C21.0294 6.90804 20.6478 6.75 20.25 6.75ZM16.875 14.25C16.6525 14.25 16.435 14.184 16.25 14.0604C16.065 13.9368 15.9208 13.7611 15.8356 13.5555C15.7505 13.35 15.7282 13.1238 15.7716 12.9055C15.815 12.6873 15.9222 12.4868 16.0795 12.3295C16.2368 12.1722 16.4373 12.065 16.6555 12.0216C16.8738 11.9782 17.1 12.0005 17.3055 12.0856C17.5111 12.1708 17.6868 12.315 17.8104 12.5C17.934 12.685 18 12.9025 18 13.125C18 13.4234 17.8815 13.7095 17.6705 13.9205C17.4595 14.1315 17.1734 14.25 16.875 14.25Z"
                    fill="#333333"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Wallet</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-black rounded-lg  hover:bg-white-100 dark:hover:bg-white-700"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6_64)">
                    <path
                      d="M20.317 4.492C18.787 3.802 17.147 3.292 15.432 3.002C15.4167 2.99907 15.4009 3.00096 15.3868 3.00741C15.3726 3.01386 15.3608 3.02455 15.353 3.038C15.143 3.407 14.909 3.888 14.745 4.268C12.9261 3.99624 11.0769 3.99624 9.25799 4.268C9.07533 3.84686 8.86934 3.43622 8.64099 3.038C8.63325 3.02438 8.62154 3.01345 8.60743 3.00666C8.59331 2.99987 8.57746 2.99755 8.56199 3C6.84799 3.29 5.20799 3.8 3.67699 4.491C3.66382 4.49652 3.65265 4.50595 3.64499 4.518C0.532992 9.093 -0.320008 13.555 0.0989923 17.961C0.100158 17.9718 0.103508 17.9822 0.108837 17.9917C0.114167 18.0011 0.121364 18.0094 0.129992 18.016C1.94638 19.3384 3.97233 20.3458 6.12299 20.996C6.13798 21.0006 6.15402 21.0006 6.16901 20.996C6.18399 20.9913 6.19723 20.9823 6.20699 20.97C6.66979 20.3511 7.07989 19.6944 7.43299 19.007C7.43789 18.9976 7.44072 18.9873 7.44127 18.9767C7.44183 18.9661 7.44011 18.9555 7.43622 18.9456C7.43233 18.9358 7.42637 18.9269 7.41874 18.9195C7.41111 18.9122 7.40199 18.9065 7.39199 18.903C6.746 18.6597 6.12008 18.3662 5.51999 18.025C5.50921 18.0188 5.50012 18.0101 5.49355 17.9996C5.48698 17.989 5.48312 17.977 5.48233 17.9647C5.48153 17.9523 5.48383 17.9399 5.48901 17.9286C5.49418 17.9173 5.50208 17.9075 5.51199 17.9C5.63799 17.807 5.76399 17.71 5.88399 17.613C5.89479 17.6043 5.9078 17.5987 5.92158 17.597C5.93535 17.5952 5.94934 17.5973 5.96199 17.603C9.88899 19.367 14.142 19.367 18.023 17.603C18.0357 17.5969 18.0498 17.5946 18.0638 17.5962C18.0778 17.5978 18.091 17.6032 18.102 17.612C18.222 17.71 18.347 17.807 18.474 17.9C18.484 17.9073 18.492 17.917 18.4974 17.9282C18.5027 17.9394 18.5052 17.9517 18.5046 17.9641C18.504 17.9765 18.5004 17.9885 18.494 17.9992C18.4876 18.0098 18.4787 18.0187 18.468 18.025C17.87 18.369 17.248 18.66 16.595 18.902C16.585 18.9056 16.5758 18.9114 16.5682 18.9188C16.5606 18.9263 16.5546 18.9353 16.5507 18.9452C16.5468 18.9552 16.5451 18.9658 16.5457 18.9765C16.5463 18.9871 16.5491 18.9975 16.554 19.007C16.914 19.694 17.326 20.348 17.779 20.969C17.7884 20.9817 17.8015 20.9913 17.8166 20.9963C17.8316 21.0013 17.8478 21.0015 17.863 20.997C20.0173 20.3486 22.0466 19.3408 23.865 18.016C23.8739 18.0098 23.8813 18.0018 23.8868 17.9925C23.8923 17.9831 23.8958 17.9728 23.897 17.962C24.397 12.868 23.059 8.442 20.348 4.52C20.3413 4.50725 20.3303 4.49732 20.317 4.492ZM8.01999 15.278C6.83799 15.278 5.86299 14.209 5.86299 12.898C5.86299 11.586 6.81899 10.518 8.01999 10.518C9.22999 10.518 10.196 11.595 10.177 12.898C10.177 14.21 9.22099 15.278 8.01999 15.278ZM15.995 15.278C14.812 15.278 13.838 14.209 13.838 12.898C13.838 11.586 14.793 10.518 15.995 10.518C17.205 10.518 18.171 11.595 18.152 12.898C18.152 14.21 17.206 15.278 15.995 15.278Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_64">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Join our Discord
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
