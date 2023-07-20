import Head from "@/components/Head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Sipnner from "@/components/Spinner";
import { useRouter } from "next/router";
import AdminSidebar from "@/components/AdminSidebar";
import { create } from "ipfs-http-client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import HeadAdmin from "@/components/HeadAdmin";
const projectId = "2SG3O8eqErKfIsubvGXcJ9GFZ3L";
const projectSecret = "be4bb4e2d8017edf33961dccfe618d41";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});
export default function IndexPage() {
  const { data, status } = useSession();
  const [descriptionVisible, setdescriptionVisible] = useState(true);
  const router = useRouter();
const [spinnerVisible, setSpinnerVisible] = useState(true);
  const [ipfs, setIpfs] = useState("");
  const [ipfsFile, setIpfsFile] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [details, setDetails] = useState("");
  const [nftId, setNftId] = useState("");
  const inputRef1 = useRef(null);
  const resetFileInput1 = (e) => {
    setIpfs("");
  };
  const [nft, setNft] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/NftFromId/All",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return data;
        });
      let arr = [];
      response.filter((elem) => {
        arr.push({
          id: elem.id,
          name: elem.name,
          image: elem.ipfs,
          price: elem.price,
          category: elem.marketPlaceCategory,
          change: elem.change,
        });
      });
      setNft(arr);
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  async function getIpfsUrlFromImage() {
    const url = await UploadOnIPFS(ipfsFile);

    setIpfs(url);
    setIpfsFile("");
  }
  async function UploadOnIPFS(file) {
    try {
      const added = await client.add(file);
      const url = `https://infura-ipfs.io/ipfs/${added.path}`;
      console.log("IPFS UPLOADED URI: ", url);
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function saveData() {
    try {

      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/addPromotion",
        {
          method: "POST",
          body: JSON.stringify({
            ipfs,
            title,
            startDate,
            endDate,
            details,
            nftId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((e) => {
        alert("Saved");
        router.push("/Admin/Dashboard");
      });
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <HeadAdmin name={data.user.name} img={data.user.image} signOut={signOut} />
        <AdminSidebar active={"createPromotion"} />

        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-[140vh]  overflow-y-hidden">
            <div className="text-2xl text-[#333333]  font-semibold ">
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
                          Upload Promotion Image (283x148)
                        </label>
                        <input
                          type="file"
                          ref={inputRef1}
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setIpfsFile(file);
                              setIpfs(URL.createObjectURL(file));
                            }
                          }}
                          className=" border placeholder:font-light h-36 mt-3 border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=" Add NFT Image / Video here"
                          required
                        />

                        {ipfs && ipfsFile && (
                          <div>
                            <div className="flex flex-row justify-between items-center">
                              Promotion Image Uploaded ✅
                              <div className="flex flex-row justify-between items-center">
                                <button
                                  className="bg-[#0654D6] my-2 hover:bg-blue-700 text-white font-extralight p-2 py-2.4 mr-5 rounded"
                                  onClick={() => {
                                    resetFileInput1();
                                  }}
                                >
                                  <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 21 21"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g
                                      fill="none"
                                      fill-rule="evenodd"
                                      stroke="#fff"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      transform="matrix(0 1 1 0 2.5 2.5)"
                                    >
                                      <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />

                                      <path
                                        d="m4 1v4h-4"
                                        transform="matrix(1 0 0 -1 0 6)"
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <button
                                  className="bg-[#0654D6]  hover:bg-blue-700 text-white font-extralight p-1 px-2 rounded"
                                  onClick={() => {
                                    getIpfsUrlFromImage();
                                  }}
                                >
                                  <svg
                                    width="20px"
                                    height="30px"
                                    viewBox="0 0 32 32"
                                    version="1.1"
                                  >
                                    <defs></defs>
                                    <g
                                      id="Page-1"
                                      stroke="none"
                                      stroke-width="1"
                                      fill="none"
                                      fill-rule="evenodd"
                                      sketchType="MSPage"
                                    >
                                      <g
                                        id="Icon-Set"
                                        sketchType="MSLayerGroup"
                                        transform="translate(-152.000000, -515.000000)"
                                        fill="#fff"
                                      >
                                        <path
                                          d="M171,525 C171.552,525 172,524.553 172,524 L172,520 C172,519.447 171.552,519 171,519 C170.448,519 170,519.447 170,520 L170,524 C170,524.553 170.448,525 171,525 L171,525 Z M182,543 C182,544.104 181.104,545 180,545 L156,545 C154.896,545 154,544.104 154,543 L154,519 C154,517.896 154.896,517 156,517 L158,517 L158,527 C158,528.104 158.896,529 160,529 L176,529 C177.104,529 178,528.104 178,527 L178,517 L180,517 C181.104,517 182,517.896 182,519 L182,543 L182,543 Z M160,517 L176,517 L176,526 C176,526.553 175.552,527 175,527 L161,527 C160.448,527 160,526.553 160,526 L160,517 L160,517 Z M180,515 L156,515 C153.791,515 152,516.791 152,519 L152,543 C152,545.209 153.791,547 156,547 L180,547 C182.209,547 184,545.209 184,543 L184,519 C184,516.791 182.209,515 180,515 L180,515 Z"
                                          id="save-floppy"
                                          sketchType="MSShapeGroup"
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <img src={ipfs} />
                          </div>
                        )}
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
                          onChange={(v) => setTitle(v.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                        >
                          Mapped NFT
                        </label>
                        <select
                          type="select"
                          id="select"
                          className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Choose Market Category"
                          onChange={(v) => setNftId(v.target.value)}
                          value={nftId}
                        >
                          {nft &&
                            nft.map((elem, ind) => {
                              return (
                                <option key={ind} value={elem.id}>
                                  {elem.name}
                                </option>
                              );
                            })}
                        </select>

                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal  ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className="mb-6 ">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Starting Date
                            </label>

                            <DatePicker
                              onChange={(v) => setStartDate(v)}
                              value={startDate}
                              className=" border placeholder:font-light  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div className="mb-6 ">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Starting Time
                            </label>

                            <TimePicker
                              onChange={(v) => setStartDate(v)}
                              disablePast
                              value={startDate}
                              className=" border placeholder:font-light  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                        </LocalizationProvider>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal  ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className="mb-6 ">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Ending Date
                            </label>

                            <DatePicker
                              onChange={(v) => setEndDate(v)}
                              value={endDate}
                              className=" border placeholder:font-light  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div className="mb-6 ">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Ending Time
                            </label>

                            <TimePicker
                              onChange={(v) => setEndDate(v)}
                              disablePast
                              value={endDate}
                              className=" border placeholder:font-light  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                        </LocalizationProvider>
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
                          onChange={(v) => setDetails(v.target.value)}
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
                    onClick={() => saveData()}
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
  } else {
    return window.open("/", "_self");
  }
}
