import Head from "@/components/Head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AdminSidebar from "@/components/AdminSidebar";
import axios from "axios";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import { Box, LinearProgress, Tab, Tabs } from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import NftDetails from "@/pages/NftDetails";
import { Marketplaces } from "@/models/MarketPlaces";
import connectMongo from "@/database/conn";
const projectId = "2SG3O8eqErKfIsubvGXcJ9GFZ3L";
const projectSecret = "be4bb4e2d8017edf33961dccfe618d41";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

/* Create an instance of the client */
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
  const [marketPlaceName, setMarketPlaceName] = useState("");
  const [marketPlaceCategory, setMarketPlaceCategory] = useState("");
  const [marketPlaceStartDT, setMarketPlaceStartDT] = useState();
  const [NFTQuantity, setNFTQuantity] = useState("");
  const [maxNFTPUser, setMaxNFTPUser] = useState("");
  const [initialPrice, setInitialPrice] = useState("");
  const [adminComm, setAdminComm] = useState("");

  const router = useRouter();

  const resetFileInput1 = (e) => {
    // 👇️ reset input value
    NFTDetails1.file = "";
    NFTDetails1.url = null;
    inputRef1.current.value = null;
  };
  const resetFileInput2 = (e) => {
    // 👇️ reset input value
    NFTDetails2.file = "";
    NFTDetails2.url = null;
    inputRef2.current.value = null;
  };
  const [NFTDetails1, setNFTDetails1] = useState({ file: "", url: "" });
  const [NFTDetails2, setNFTDetails2] = useState({ file: "", url: "" });
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const [AIPrompt1, setAIPrompt1] = useState(``);
  const [AIPrompt2, setAIPrompt2] = useState(``);
  const bodyInfo = JSON.stringify({
    key: "qgl3bCBpeeUfT2W3zU8FlmZyLu8H9icHDuos1yxH3FHN3CYgAU7Vm1zXhlwp",
    model_id: "midjourney",
    prompt: AIPrompt1,
    // negative_prompt:
    //   "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
    width: "512",
    height: "512",
    samples: 1,
    num_inference_steps: "30",
    safety_checker: "no",
    enhance_prompt: "yes",
    seed: null,
    guidance_scale: 7.5,
    webhook: null,
    track_id: null,
  });

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [AINFT1, setAINFT1] = useState(``);
  const [AINFT2, setAINFT2] = useState(``);

  async function getIpfsUrlFromImage() {
    const file = NFTDetails1.file;
    const url = await UploadOnIPFS(file);
    NFTDetails1.file = null;
    NFTDetails1.ipfs = url;
    return url;
  }
  async function getIpfsUrlFromImage2() {
    const file = NFTDetails2.file;
    const url = await UploadOnIPFS(file);
    NFTDetails2.file = null;
    NFTDetails2.ipfs = url;
    return url;
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

  const [tabValue1, setTabValue1] = useState("1");
  const [tabValue2, setTabValue2] = useState("1");

  const handleChange1 = (event, newValue) => {
    setTabValue1(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setTabValue2(newValue);
  };

  async function generateArt1() {
    const result = await axios.post(
      "https://stablediffusionapi.com/api/v3/dreambooth",
      bodyInfo,
      options
    );
    const picAmount = result.data.output;
    if (picAmount) {
      setAINFT1(picAmount[0]);
      NftDetails1.url = picAmount[0];
    }
    return picAmount;
  }
  const [progress, setProgress] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function saveData() { 

    try {
      let response = await fetch("http://localhost:3000/api/addMarketPlace", {
        method: "POST",
        body: JSON.stringify( {
          marketPlaceName: marketPlaceName,
          marketPlaceCategory: marketPlaceCategory,
          marketPlaceReleaseDateTime: marketPlaceStartDT,
          NFTQuantity: NFTQuantity,
          maxNFTPUser:maxNFTPUser,
          initialPrice: initialPrice,
          adminCommision: adminComm,
          NFTDetails1: NFTDetails1,
          NFTDetails2: NFTDetails2,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((e)=>{
        alert("Saved")      
      })
      
    } catch (errorMessage) {
      console.error(errorMessage);
    }
   

  }
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <AdminSidebar />

        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-auto overflow-scroll overflow-y-hidden">
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
                            htmlFor="text"
                            className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                          >
                            Marketplace Name
                          </label>
                          <input
                            type="text"
                            id="text"
                            className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type Marketplace name here"
                            onChange={(v) => setMarketPlaceName(v.target.value)}
                            value={marketPlaceName}
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                          >
                            Category
                          </label>
                          <select
                            type="select"
                            id="select"
                            className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Choose Market Category"
                            onChange={(v) =>
                              setMarketPlaceCategory(v.target.value)
                            }
                            value={marketPlaceCategory}
                          >
                            <option value="FootBall">FootBall</option>
                            <option value="E-Sports">E-Sports</option>
                            <option value="Politics">Politics</option>
                            <option value="Golf">Golf</option>
                            <option value="Music">Music</option>
                          </select>
                        </div>
                        <div className="text-[#333333] text-[13px] flex flex-row justify-between font-normal  ">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className="mb-6 ">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                              >
                                Marketplace Release Date
                              </label>

                              <DatePicker
                                onChange={(v) => setMarketPlaceStartDT(v)}
                                value={marketPlaceStartDT}
                                disablePast
                                className=" border placeholder:font-light  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              />
                            </div>
                            <div className="mb-6 ">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                              >
                                Marketplace Release Time
                              </label>

                              <TimePicker
                                onChange={(v) => setMarketPlaceStartDT(v)}
                                disablePast
                                value={marketPlaceStartDT}
                                className=" border placeholder:font-light  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              />
                            </div>
                          </LocalizationProvider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-end mt-10">
                    <button
                      className="bg-[#0654D6]  w-44 hover:bg-blue-700 text-white font-extralight py-2 px-4 rounded"
                      onClick={() => {
                        setdescriptionVisible(false)
                      }}
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
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Quantity of NFTs Available
                            </label>
                            <input
                              type="text"
                              value={NFTQuantity}
                              onChange={(v) => setNFTQuantity(v.target.value)}
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Type Here"
                              required
                            />
                          </div>
                        </div>
                        <div className="text-lg text-[#333333] w-[45%]  font-thin">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Max NFTs per User
                            </label>
                            <input
                              type="text"
                              value={maxNFTPUser}
                              onChange={(v) => setMaxNFTPUser(v.target.value)}
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Type Here"
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
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Initial Prize Amount($)
                            </label>
                            <input
                              type="text"
                              value={initialPrice}
                              onChange={(v) => setInitialPrice(v.target.value)}
                              className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder=" Type Here"
                              required
                            />
                          </div>
                        </div>
                        <div className="text-lg text-[#333333] w-[45%]  font-thin">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Administrator Commissions
                            </label>
                            <input
                              type="email"
                              value={adminComm}
                              onChange={(v) => setAdminComm(v.target.value)}
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
                            <Box sx={{ width: "100%", typography: "body1" }}>
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
                                    <Tab label="Upload NFT" value="1" />
                                    <Tab label="Generate with AI" value="2" />
                                  </TabList>
                                </Box>
                                <TabPanel className="p-0" value="1">
                                  <input
                                    type="file"
                                    ref={inputRef1}
                                    onChange={(e) => {
                                      const file = e.target.files[0];
                                      if (file) {
                                        setNFTDetails1({
                                          file,
                                          url: URL.createObjectURL(file),
                                        });
                                      }
                                    }}
                                    className=" border placeholder:font-light h-36 mt-3 border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=" Add NFT Image / Video here"
                                    required
                                  />

                                  {NFTDetails1.file && (
                                    <div>
                                      <div className="flex flex-row justify-between items-center">
                                        NFT Uploaded ✅
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
                                      <img src={NFTDetails1.url} />
                                    </div>
                                  )}
                                </TabPanel>
                                <TabPanel value="2">
                                  <Box
                                    hidden={!progressVisible}
                                    sx={{ width: "100%", marginTop: "10px" }}
                                  >
                                    <LinearProgress
                                      variant="determinate"
                                      value={progress}
                                    />
                                  </Box>
                                  <textarea
                                    value={AIPrompt1}
                                    onChange={(v) =>
                                      setAIPrompt1(v.target.value)
                                    }
                                    className=" border placeholder:font-light h-18 p-1 mt-3  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=" Enter prompt to generate NFT"
                                    required
                                  />
                                  <button
                                    className="bg-[#0654D6] my-2 w-44 hover:bg-blue-700 text-white font-extralight py-2 px-4 rounded"
                                    onClick={() => {
                                      generateArt1();
                                    }}
                                  >
                                    Generate NFT
                                  </button>
                                  {AINFT1 && (
                                    <div className="flex flex-row justify-between items-center">
                                      NFT Generated ✅
                                      <div className="flex flex-row justify-between items-center">
                                        <button
                                          className="bg-[#0654D6] my-2 hover:bg-blue-700 text-white font-extralight p-2 py-2.4 mr-5 rounded"
                                          onClick={() => {
                                            NFTDetails1.url = null;
                                            generateArt1();
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
                                          onClick={async () => {
                                            await fetch(AINFT1)
                                              .then((res) => res.blob())
                                              .then(async (myBlob) => {
                                                debugger;
                                                const myFile = new File(
                                                  [myBlob],
                                                  "image.jpeg",
                                                  { type: myBlob.type }
                                                );
                                                const url = await UploadOnIPFS(
                                                  myFile
                                                );
                                                NFTDetails1.ipfs = url;
                                                NFTDetails1.url = null;
                                              });
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
                                  )}
                                  <img src={NFTDetails1.url} />
                                </TabPanel>
                              </TabContext>
                            </Box>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Name of NFT
                            </label>
                            <input
                              type="email"
                              onChange={(e) => {
                                let name = e.target.value;
                                setNFTDetails1({...NFTDetails1,name})
                              }}
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
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Starting Price
                            </label>
                            <input
                              type="email"
                              onChange={(e) => {
                                let price = e.target.value;
                                setNFTDetails1({...NFTDetails1,price})

                              }}
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
                            <Box sx={{ width: "100%", typography: "body1" }}>
                              <TabContext value={tabValue2}>
                                <Box
                                  sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                  }}
                                >
                                  <TabList
                                    onChange={handleChange2}
                                    aria-label="lab API tabs example"
                                  >
                                    <Tab label="Upload NFT" value="1" />
                                    <Tab label="Generate with AI" value="2" />
                                  </TabList>
                                </Box>
                                <TabPanel className="p-0" value="1">
                                  <input
                                    type="file"
                                    ref={inputRef2}
                                    onChange={(e) => {
                                      const file = e.target.files[0];
                                      if (file) {
                                        setNFTDetails2({
                                          file,
                                          url: URL.createObjectURL(file),
                                        });
                                      }
                                    }}
                                    className=" border placeholder:font-light h-36 mt-3 border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=" Add NFT Image / Video here"
                                    required
                                  />

                                  {NFTDetails2.file && (
                                    <div>
                                      <div className="flex flex-row justify-between items-center">
                                        NFT Uploaded ✅
                                        <div className="flex flex-row justify-between items-center">
                                          <button
                                            className="bg-[#0654D6] my-2 hover:bg-blue-700 text-white font-extralight p-2 py-2.4 mr-5 rounded"
                                            onClick={() => {
                                              resetFileInput2();
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
                                              getIpfsUrlFromImage2();
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
                                      <img src={NFTDetails2.url} />
                                    </div>
                                  )}
                                </TabPanel>
                                <TabPanel value="2">
                                  <Box
                                    hidden={!progressVisible}
                                    sx={{ width: "100%", marginTop: "10px" }}
                                  >
                                    <LinearProgress
                                      variant="determinate"
                                      value={progress}
                                    />
                                  </Box>
                                  <textarea
                                    value={AIPrompt2}
                                    onChange={(v) =>
                                      setAIPrompt2(v.target.value)
                                    }
                                    className=" border placeholder:font-light h-18 p-1 mt-3  border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=" Enter prompt to generate NFT"
                                    required
                                  />
                                  <button
                                    className="bg-[#0654D6] my-2 w-44 hover:bg-blue-700 text-white font-extralight py-2 px-4 rounded"
                                    onClick={() => {
                                      generateArt2();
                                    }}
                                  >
                                    Generate NFT
                                  </button>
                                  {AINFT2 && (
                                    <div className="flex flex-row justify-between items-center">
                                      NFT Generated ✅
                                      <div className="flex flex-row justify-between items-center">
                                        <button
                                          className="bg-[#0654D6] my-2 hover:bg-blue-700 text-white font-extralight p-2 py-2.4 mr-5 rounded"
                                          onClick={() => {
                                            NFTDetails2.url = null;
                                            generateArt2();
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
                                          onClick={async () => {
                                            await fetch(AINFT2)
                                              .then((res) => res.blob())
                                              .then(async (myBlob) => {
                                                debugger;
                                                const myFile = new File(
                                                  [myBlob],
                                                  "image.jpeg",
                                                  { type: myBlob.type }
                                                );
                                                const url = await UploadOnIPFS2(
                                                  myFile
                                                );
                                                NFTDetails2.ipfs = url;
                                                NFTDetails2.url = null;
                                              });
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
                                  )}
                                  <img src={NFTDetails2.url} />
                                </TabPanel>
                              </TabContext>
                            </Box>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#333333] text-[13px] flex flex-row justify-between  items-center font-normal ">
                        <div className="text-lg text-[#333333] w-[45%]  font-normal">
                          <div className="">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Name of NFT
                            </label>
                            <input
                              type="email"
                              onChange={(e) => {
                                let name = e.target.value;
                                setNFTDetails2({...NFTDetails2,name})

                              }}
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
                              className="block mb-2 text-[16px] line-[24px] font-medium text-gray-900 dark:text-white"
                            >
                              Starting Price
                            </label>
                            <input
                              type="email"
                              onChange={(e) => {
                                let price = e.target.value;
                                setNFTDetails2({...NFTDetails2,price})

                              }}
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
                      onClick={() => saveData()}
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
  return router.push("/");
}
