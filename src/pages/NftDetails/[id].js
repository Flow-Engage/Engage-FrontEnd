import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NftDetails() {
  const { data, status } = useSession();
  const [nft, setNft] = useState({});
  const [similar, setSimilar] = useState([]);
  const [totalPortfolio, setTotalPortfolio] = useState("");
  const router = useRouter();

  const { id } = router.query;
  useEffect(() => {
    if (id && data) getData();
  }, [id,data]);
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
        if (elem.id == id) {
          setNft({
            id: elem.id,
            name: elem.name,
            image: elem.ipfs,
            price: elem.price,
            category: elem.marketPlaceCategory,
            change: elem.change,
          });
        } else {
          arr.push({
            id: elem.id,
            name: elem.name,
            image: elem.ipfs,
            price: elem.price,
            category: elem.marketPlaceCategory,
            change: elem.change,
          });
        }
      });
      setSimilar(arr);
      getPortfolio();
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }

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

  async function addWishlist(nftId) {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/addWishlist",
        {
          method: "POST",
          body: JSON.stringify({
            user: data.user.email,
            nftId: nftId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((e) => {
        alert("Added to wishlist");
      });
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  async function buyNft(nftId, buyPrice) {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/buyNft",
        {
          method: "POST",
          body: JSON.stringify({
            user: data.user.email,
            nftId: nftId,
            buyPrice: buyPrice,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((e) => {
        alert("NFT Minted");
      });
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        {totalPortfolio && <SideBar totalPortfolio={totalPortfolio} />}

        <div className="p-0 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-screen overflow-y-hidden">
            <div
              className="text-2xl text-[#333333] font-dmsans font-semibold cursor-pointer"
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
            {nft && (
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className=" rounded  h-fit p-3 col-span-2 dark:bg-gray-800">
                  <div className=" flex flex-row   w-full  h-full">
                    <div className="text-[#FFFFFF] font-dmsans ">
                      <img
                        className="h-[300px] w-[300px] rounded-md "
                        src={(require = nft.image)}
                        alt=""
                      />
                    </div>
                    <div className="text-[#333333]  text-[24px] font-medium m-5 font-dmsans">
                      {nft.name} <br />
                      {nft.price}
                      <div className="w-full text-[16px] h-auto m-2  flex flex-row ">
                        Today{" "}
                        <div className="text-[#EA0606] ml-5">{nft.change}%</div>
                      </div>
                      <div className="text-[#000] font-dmsans">
                        <button
                          className="w-full text-[10px] h-auto p-3 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] "
                          onClick={() => {
                            addWishlist(nft.id);
                          }}
                        >
                          Add to wishlist
                        </button>
                        <button
                          className="w-full text-[10px] h-auto p-3 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] "
                          onClick={() => {
                            buyNft(nft.id, nft.price);
                          }}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-row   w-full justify-around h-full">
                    <img
                      className="rounded-md "
                      src={(require = "/assets/images/chart.png")}
                      alt=""
                    />
                  </div>
                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                    <div className="text-xl text-[#333333] font-dmsans font-medium">
                      About {nft.name}
                    </div>
                    <div className="w-50 flex flex-col justify-between h-full p-2 pb-0">
                      Lorem ipsum dolor sit amet consectetur. Nunc suspendisse
                      dui posuere ante urna ut habitant. Magna eget iaculis
                      viverra suspendisse malesuada. Non a bibendum consequat
                      viverra neque aliquam bibendum euismod. Amet erat magnis
                      et bibendum varius eget amet. Molestie vulputate
                      consectetur est mauris. Eu imperdiet ac cras malesuada.
                      Vitae ut turpis diam convallis. Lacus nullam consequat
                      diam eu. Ipsum sed eget eget purus nunc eget enim semper.
                    </div>
                  </div>
                </div>

                <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                  <div className="text-xl text-[#333333] font-dmsans font-semibold">
                    Similar Collectibles
                  </div>
                  <ul className="max-w-md divide-y mt-5 divide-gray-200 dark:divide-gray-700">
                    {similar &&
                      similar.map((elem, ind) => {
                        return (
                          <li key={ind} className="py-2 ">
                            <div
                              className="flex items-center  flex-row cursor-pointer"
                              onClick={() => {
                                router.push("/NftDetails/" + elem.id);
                              }}
                            >
                              <div className=" ">
                                <img
                                  className="w-12 h-12 rounded-full mr-10"
                                  src={(require = elem.image)}
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex flex-row justify-between w-full ">
                                <div
                                  className="text-[#333333]  font-medium  font-dmsans cursor-pointer"
                                  onClick={() => {
                                    router.push("/NftDetails/" + elem.id);
                                  }}
                                >
                                  {elem.name}
                                  <br />
                                  {elem.price}
                                </div>
                                <div className="text-[#000] font-dmsans flex items-center justify-evenly w-auto flex-col">
                                  <button
                                    className="w-24 h-auto text-[10px] p-2  rounded-lg bg-[#F2F2F2] text-[#0654D6] "
                                    onClick={() => {
                                      addWishlist(elem.id);
                                    }}
                                  >
                                    Add to wishlist
                                  </button>
                                  <button
                                    className="w-24 h-auto text-[10px] p-2  my-0 rounded-lg bg-[#0654D6] text-[#FFF] "
                                    onClick={() => {
                                      buyNft(elem.id, elem.price);
                                    }}
                                  >
                                    Buy
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return window.open("/", "_self");
  }
}
