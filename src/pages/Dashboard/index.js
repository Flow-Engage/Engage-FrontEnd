import Head from "@/components/Head";
import SideBar from "@/components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function IndexPage() {
  const { data, status } = useSession();
  const [marketPlaceCategoryList, setMarketPlaceCategoryList] = useState([]);
  const [topMovers, setTopMovers] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getData();
    if (data) getWishlist();
  }, [data]);

  const [promotions, setPromotions] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [totalPortfolio, setTotalPortfolio] = useState("");

  async function getPromotions() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/viewPromotion/All",
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
          title: elem.title,
          details: elem.details,
          image: elem.ipfs,
          nftId: elem.nftId,
        });
      });
      getPortfolio();
      setPromotions(arr);
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
        getWishlist();
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
        getWishlist();
      });
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  async function getData() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/TopGainers/All",
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

      const topThreeMovers = Top.slice(0, 4);
      setTopMovers(topThreeMovers);
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
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
      getPromotions();
      setWishlist(Top);
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
      setPortfolio(arr);
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        {console.log(data)}
        {totalPortfolio && (
          <SideBar totalPortfolio={totalPortfolio} />
        )}
        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="text-xl text-[#333333] font-dmsans font-semibold">
              Featured
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              {promotions &&
                promotions.map((elem, ind) => {
                  return (
                    <div
                      key={ind}
                      className="flex items-center justify-start h-auto rounded  "
                      style={{
                        backgroundImage: `url(${elem.image})`,
                        backgroundSize: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div className="w-50 flex flex-col justify-between h-full">
                        <div className="text-[#fff] text-[13px] font-medium m-5 font-dmsans">
                          {elem.title}
                        </div>
                        <div className="text-[#000] font-dmsans m-5 justify-center items-center flex">
                          <button
                            className="w-24 h-8 rounded-lg bg-[#F2F2F2] text-[#0654D6] "
                            onClick={() => {
                              router.push("/NftDetails/" + elem.nftId);
                            }}
                          >
                            Visit
                          </button>
                        </div>
                      </div>
                      {/* <div className="text-[#FFFFFF] font-dmsans mt-3">
                        <img
                          className="h-auto w-auto "
                          src={elem.image}
                          alt=""
                        />
                      </div> */}
                    </div>
                  );
                })}
            </div>
            <div className="text-xl text-[#333333] font-dmsans font-semibold">
              My Portfolio
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {portfolio &&
                portfolio.map((elem, ind) => {
                  return (
                    <div
                      key={ind}
                      className="flex items-center justify-around h-18 p-5 px-0 rounded bg-white dark:bg-gray-800 cursor-pointer" onClick={()=>{router.push("/NftDetails/"+elem.id)}}
                    >
                      <div className="text-[#FFFFFF] font-dmsans justify-between items-center flex flex-row">
                        <Image
                          height="80"
                          width="100"
                          className="h-12 w-12 rounded-2xl"
                          src={elem.image}
                          alt=""
                        />
                        <div className="text-[#333333] ml-2 text-[13px] font-medium font-dmsans justify-center items-start flex flex-col">
                          <div className="font-semibold"> {elem.name}</div>
                          {elem.category}
                        </div>
                      </div>

                      <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                        <div className="font-semibold"> Change</div>
                        <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                          +{elem.change}%
                        </div>
                      </div>

                      <div className="text-[#333333] text-[13px] font-medium font-dmsans justify-center items-center flex flex-col">
                        <div className="font-semibold"> Price</div>
                        {elem.price}
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="grid grid-cols-2 rounded bg-white h-[40vh] p-3 col-span-2 dark:bg-gray-800">
                <div className="text-xl absolute text-[#333333]   font-dmsans font-semibold">
                  Top Movers
                </div>
                {topMovers &&
                  topMovers.map((elem, ind) => {
                    return (
                      <div
                        key={ind}
                        className={
                          ind == 0 || ind == 1
                            ? " flex flex-row mt-7 justify-between h-fit "
                            : " flex flex-row  justify-between h-fit "
                        }
                      >
                        <div
                          className="text-[#FFFFFF] font-dmsans cursor-pointer "
                          onClick={() => {
                            router.push("/NftDetails/" + elem.id);
                          }}
                        >
                          <img
                            className="h-[110px] w-[190px] rounded-md "
                            src={(require = elem.image)}
                            alt=""
                          />
                        </div>
                        <div
                          className="text-[#333333] w-48 text-[14px] font-semibold m-5 font-dmsans cursor-pointer "
                          onClick={() => {
                            router.push("/NftDetails/" + elem.id);
                          }}
                        >
                          {elem.name} <br />
                          {elem.price}
                          <br />
                          <div className="flex font-normal justify-between flex-row">
                            Today
                            <div className="text-[#26EA06] flex flex-row justify-between items-center  font-dmsans">
                              + {elem.change} %
                            </div>
                          </div>
                        </div>

                        <div className="text-[#000] font-dmsans">
                          <button
                            className="w-36 h-auto p-2 m-2 rounded-lg bg-[#F2F2F2] text-[#0654D6] "
                            onClick={() => {
                              addWishlist(elem.id);
                            }}
                          >
                            Add to wishlist
                          </button>
                          <button
                            className="w-36 h-auto p-2 m-2 my-0 rounded-lg bg-[#0654D6] text-[#FFF] "
                            onClick={() => {
                              buyNft(elem.id, elem.price);
                            }}
                          >
                            Buy
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="rounded bg-white h-auto p-5 dark:bg-gray-800">
                <div className="text-xl text-[#333333] font-dmsans font-semibold">
                  My Wishlist
                </div>
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
                              <img
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
