import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Head({ name, img, signOut }) {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const router = useRouter()

  function openNotificationDrawer() {
    alert("Noti");
  }
  return (
    <>
      <header className="bg-[#FFFFFF] w-screen pl-60 p-4  items-center justify-between  ">
        <nav
          className=" flex  items-center justify-between  "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center items-center  ">
            <a href="#" className="-m-1.5 p-1.5"></a>

            <form className="flex items-center items-center w-1/2 ml-6">
              <input
                type="text"
                id="voice-search"
                className="bg-[#F2F2F2] border  border-gray-300 text-gray-900 text-sm rounded-[24px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Search here "
                required
              />
            </form>
          </div>

          <div className="flex  flex-row w-80 items-center justify-between ">
            <div
              className=" w-10 cursor-pointer flex"
              onClick={() => openNotificationDrawer()}
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17C12.0002 17.5046 11.8096 17.9906 11.4665 18.3605C11.1234 18.7305 10.6532 18.9572 10.15 18.995L10 19H8C7.49542 19.0002 7.00943 18.8096 6.63945 18.4665C6.26947 18.1234 6.04284 17.6532 6.005 17.15L6 17H12ZM9 9.54067e-10C10.815 -2.9945e-05 12.559 0.704894 13.8642 1.96607C15.1694 3.22726 15.9338 4.94609 15.996 6.76L16 7V10.764L17.822 14.408C17.9015 14.567 17.9413 14.7429 17.938 14.9206C17.9346 15.0984 17.8883 15.2727 17.8029 15.4286C17.7174 15.5845 17.5955 15.7174 17.4475 15.8158C17.2995 15.9143 17.1298 15.9754 16.953 15.994L16.838 16H1.162C0.984165 16.0001 0.808968 15.957 0.651422 15.8745C0.493876 15.792 0.35868 15.6725 0.257418 15.5264C0.156156 15.3802 0.0918485 15.2116 0.0700054 15.0351C0.0481623 14.8586 0.0694352 14.6795 0.132001 14.513L0.178001 14.408L2 10.764V7C2 5.14348 2.7375 3.36301 4.05025 2.05025C5.36301 0.737498 7.14349 9.54069e-10 9 9.54067e-10Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <div className=" w-11/12 flex flex-row items-center justify-center">
              <div
                className="cursor-pointer w-auto contents"

                onMouseEnter={()=>setIsProfileDrawerOpen(true)}

              >
                <img
                  className="h-10 w-10 rounded-full mr-4 ml-10"
                  src={img}
                  alt={name + " photo"}
                />
                {name}

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 10L12 15L7 10H17Z" fill="#333333" />
                </svg>

                <div
                  id="dropdown"
                  class="absolute right-12 top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  {isProfileDrawerOpen && (
                    <ul
                      className="py-2 text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                      onMouseLeave={()=>setIsProfileDrawerOpen(false)}
                    >
                      <li>
                        <Link
                          href="/Profile"
                          class=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex flex-row justify-start"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33333 4.66667C5.33333 3.95942 5.61428 3.28115 6.11438 2.78105C6.61448 2.28095 7.29276 2 8 2C8.70724 2 9.38552 2.28095 9.88562 2.78105C10.3857 3.28115 10.6667 3.95942 10.6667 4.66667C10.6667 5.37391 10.3857 6.05219 9.88562 6.55229C9.38552 7.05238 8.70724 7.33333 8 7.33333C7.29276 7.33333 6.61448 7.05238 6.11438 6.55229C5.61428 6.05219 5.33333 5.37391 5.33333 4.66667ZM5.33333 8.66667C4.44928 8.66667 3.60143 9.01786 2.97631 9.64298C2.35119 10.2681 2 11.1159 2 12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.1159 13.6488 10.2681 13.0237 9.64298C12.3986 9.01786 11.5507 8.66667 10.6667 8.66667H5.33333Z"
                              fill="#333333"
                            />
                          </svg>
                          <span className="pl-2  font-normal leading-5 font-dmsans">
                            Profile
                          </span>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          class=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex flex-row justify-start"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13 8.00001C13 7.84668 12.9934 7.70001 12.98 7.54668L14.22 6.60668C14.4867 6.40668 14.56 6.03334 14.3934 5.74001L13.1467 3.58668C13.0668 3.44547 12.9375 3.33877 12.7836 3.28709C12.6298 3.23541 12.4623 3.24238 12.3134 3.30668L10.88 3.91334C10.6334 3.74001 10.3734 3.58668 10.1 3.46001L9.90669 1.92001C9.86669 1.58668 9.58002 1.33334 9.24669 1.33334H6.76002C6.42002 1.33334 6.13335 1.58668 6.09335 1.92001L5.90002 3.46001C5.62669 3.58668 5.36669 3.74001 5.12002 3.91334L3.68669 3.30668C3.38002 3.17334 3.02002 3.29334 2.85335 3.58668L1.60669 5.74668C1.44002 6.04001 1.51335 6.40668 1.78002 6.61334L3.02002 7.55334C2.99239 7.85271 2.99239 8.15398 3.02002 8.45334L1.78002 9.39334C1.51335 9.59334 1.44002 9.96668 1.60669 10.26L2.85335 12.4133C3.02002 12.7067 3.38002 12.8267 3.68669 12.6933L5.12002 12.0867C5.36669 12.26 5.62669 12.4133 5.90002 12.54L6.09335 14.08C6.13335 14.4133 6.42002 14.6667 6.75335 14.6667H9.24002C9.57335 14.6667 9.86002 14.4133 9.90002 14.08L10.0934 12.54C10.3667 12.4133 10.6267 12.26 10.8734 12.0867L12.3067 12.6933C12.6134 12.8267 12.9734 12.7067 13.14 12.4133L14.3867 10.26C14.5534 9.96668 14.48 9.60001 14.2134 9.39334L12.9734 8.45334C12.9934 8.30001 13 8.15334 13 8.00001ZM8.02669 10.3333C6.74002 10.3333 5.69335 9.28668 5.69335 8.00001C5.69335 6.71334 6.74002 5.66668 8.02669 5.66668C9.31335 5.66668 10.36 6.71334 10.36 8.00001C10.36 9.28668 9.31335 10.3333 8.02669 10.3333Z"
                              fill="#333333"
                            />
                          </svg>

                          <span className="pl-2  font-normal leading-5 font-dmsans">
                            Settings
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex flex-row justify-start"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.3334 7.99999H7.00008M12.0001 9.99999L14.0001 7.99999L12.0001 5.99999M8.66675 4.66666V3.99999C8.66675 3.64637 8.52627 3.30723 8.27622 3.05718C8.02617 2.80713 7.68704 2.66666 7.33341 2.66666H4.00008C3.64646 2.66666 3.30732 2.80713 3.05727 3.05718C2.80722 3.30723 2.66675 3.64637 2.66675 3.99999V12C2.66675 12.3536 2.80722 12.6928 3.05727 12.9428C3.30732 13.1928 3.64646 13.3333 4.00008 13.3333H7.33341C7.68704 13.3333 8.02617 13.1928 8.27622 12.9428C8.52627 12.6928 8.66675 12.3536 8.66675 12V11.3333"
                              stroke="#333333"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          <span className="pl-2  font-normal leading-5 font-dmsans text-[#333333]">
                            Logout
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10' onClick={signOut}>sign out</button> */}
        </nav>
      </header>
    </>
  );
}
