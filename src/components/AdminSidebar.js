import Link from "next/link";
import { useRouter } from "next/router";
import bg from "public/assets/images/card_bg.png";

export default function AdminSidebar() {
  const router = useRouter();
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className=" fixed top-0 left-0 ml-2 w-64 h-screen"
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
              ></Link>
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

                <span className="ml-3 text-[#0654D6] ">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                href="/Admin/AddMarketPlace"
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
                    d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z"
                    fill="#333333"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Add New Marketplace
                </span>
              </Link>
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
                  <g clip-path="url(#clip0_386_1617)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.0002 4.74101V8.00001C19.3941 8.00001 19.7842 8.07761 20.1482 8.22837C20.5122 8.37913 20.8429 8.60011 21.1215 8.87869C21.4001 9.15726 21.6211 9.48798 21.7718 9.85196C21.9226 10.2159 22.0002 10.606 22.0002 11C22.0002 11.394 21.9226 11.7841 21.7718 12.1481C21.6211 12.512 21.4001 12.8428 21.1215 13.1213C20.8429 13.3999 20.5122 13.6209 20.1482 13.7716C19.7842 13.9224 19.3941 14 19.0002 14V17C19.0002 18.648 17.1192 19.589 15.8002 18.6L13.7402 17.054C12.639 16.2284 11.3569 15.6771 10.0002 15.446V18.29C10.0003 18.9438 9.76407 19.5755 9.33507 20.0688C8.90608 20.5621 8.31322 20.8837 7.66579 20.9743C7.01836 21.0649 6.35999 20.9184 5.81205 20.5619C5.26412 20.2053 4.86354 19.6627 4.68417 19.034L3.11417 13.538C2.54919 12.8708 2.18151 12.0592 2.05246 11.1945C1.92341 10.3298 2.03811 9.44625 2.38366 8.64315C2.72921 7.84005 3.29192 7.14925 4.00853 6.64841C4.72513 6.14756 5.56724 5.85652 6.44017 5.80801L9.45817 5.64001C10.9348 5.55784 12.3708 5.12634 13.6482 4.38101L15.9922 3.01301C17.3262 2.23601 19.0002 3.19701 19.0002 4.74101ZM5.63417 15.078L6.60717 18.485C6.654 18.6499 6.75892 18.7923 6.90255 18.8859C7.04618 18.9795 7.21883 19.018 7.38861 18.9942C7.55839 18.9705 7.71383 18.8861 7.82624 18.7566C7.93865 18.6272 8.00043 18.4614 8.00017 18.29V15.28L6.44017 15.193C6.1687 15.1779 5.89903 15.1395 5.63417 15.078ZM17.0002 4.74101L14.6552 6.11001C13.2305 6.94045 11.642 7.45029 10.0002 7.60401V13.423C11.7872 13.669 13.4882 14.366 14.9402 15.454L17.0002 17V4.74101ZM8.00017 7.72401L6.55017 7.80401C5.87562 7.84125 5.23954 8.13003 4.76749 8.61333C4.29544 9.09663 4.02173 9.73934 4.00038 10.4146C3.97903 11.0898 4.2116 11.7485 4.65217 12.2607C5.09275 12.7728 5.70932 13.1012 6.38017 13.181L6.55017 13.196L8.00017 13.276V7.72401ZM19.0002 10V12C19.2551 11.9997 19.5002 11.9021 19.6855 11.7272C19.8709 11.5522 19.9824 11.3131 19.9973 11.0586C20.0123 10.8042 19.9295 10.5536 19.7659 10.3582C19.6023 10.1627 19.3703 10.0371 19.1172 10.007L19.0002 10Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_386_1617">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Create Promotion
                </span>
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
                  <path
                    d="M21.5303 14.4697L19.5 12.4395V9.75C19.4977 7.89138 18.8063 6.09964 17.5595 4.72124C16.3127 3.34284 14.5991 2.4757 12.75 2.2875V0.75H11.25V2.2875C9.40093 2.4757 7.68732 3.34284 6.44053 4.72124C5.19373 6.09964 4.50233 7.89138 4.5 9.75V12.4395L2.46975 14.4697C2.32909 14.6104 2.25004 14.8011 2.25 15V17.25C2.25 17.4489 2.32902 17.6397 2.46967 17.7803C2.61032 17.921 2.80109 18 3 18H8.25V18.5828C8.23369 19.5342 8.56905 20.4583 9.19184 21.1778C9.81462 21.8973 10.681 22.3617 11.625 22.482C12.1464 22.5337 12.6728 22.4757 13.1704 22.3117C13.6681 22.1478 14.1259 21.8815 14.5144 21.53C14.9029 21.1785 15.2136 20.7495 15.4264 20.2707C15.6392 19.792 15.7494 19.2739 15.75 18.75V18H21C21.1989 18 21.3897 17.921 21.5303 17.7803C21.671 17.6397 21.75 17.4489 21.75 17.25V15C21.75 14.8011 21.6709 14.6104 21.5303 14.4697ZM14.25 18.75C14.25 19.3467 14.0129 19.919 13.591 20.341C13.169 20.7629 12.5967 21 12 21C11.4033 21 10.831 20.7629 10.409 20.341C9.98705 19.919 9.75 19.3467 9.75 18.75V18H14.25V18.75ZM20.25 16.5H3.75V15.3105L5.78025 13.2803C5.92091 13.1396 5.99996 12.9489 6 12.75V9.75C6 8.1587 6.63214 6.63258 7.75736 5.50736C8.88258 4.38214 10.4087 3.75 12 3.75C13.5913 3.75 15.1174 4.38214 16.2426 5.50736C17.3679 6.63258 18 8.1587 18 9.75V12.75C18 12.9489 18.0791 13.1396 18.2197 13.2803L20.25 15.3105V16.5Z"
                    fill="black"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Create Notification
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
