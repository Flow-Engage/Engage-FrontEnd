import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Sipnner from "@/components/Spinner";
import { useRouter } from "next/router";
import AdminSidebar from "@/components/AdminSidebar";
import DataTable, { createTheme } from "react-data-table-component";
import { Button } from "flowbite-react";
import HeadAdmin from "@/components/HeadAdmin";

export default function IndexPage() {
  const { data, status } = useSession();

  const [name, setName] = useState("");
  const router = useRouter();
const [spinnerVisible, setSpinnerVisible] = useState(true);
  useEffect(() => {
    // getData();
  }, []);

  async function getData() {
    try {
      let response = await fetch(
        process.env.NEXT_PUBLIC_ORIGIN_URL + "/api/viewMarketPlace",
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
      console.log(response);
      let newa = [];
      response.filter((elem) => {
        const dateString = elem.marketPlaceReleaseDateTime;
        const date = new Date(dateString);
        const options = { month: "numeric", day: "numeric", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);

        console.log(formattedDate); // Output: 8/7/2023
        console.log(response);
        newa.push({
          name: (
            <div className="flex flex-row justify-center items-center">
              <img
                className="h-10 w-10 rounded-full mr-1"
                src={elem.NFTDetails1?.ipfs}
                alt=""
              />
              {elem.marketPlaceName}
            </div>
          ),
          category: elem.marketPlaceCategory,
          adminCommision: elem.adminCommision,

          initialprice: elem.initialPrice,
          createdon: formattedDate,
        });
        setTableData(newa);
      });
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }
  const [tableData, setTableData] = useState([
    {
      name: (
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-10 w-10 rounded-full mr-1"
            src="../assets/images/nft2.png"
            alt=""
          />
          ARG VS NIG
        </div>
      ),
      category: "Football",
      currentprice: "$500.43",
      startingprice: "$500.43",
      initialprice: "$500.43",
      createdon: "8/7/2023",
    },
    {
      name: (
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-10 w-10 rounded-full mr-1"
            src="../assets/images/nft2.png"
            alt=""
          />
          ARG VS NIG
        </div>
      ),
      category: "Football",
      currentprice: "$500.43",
      startingprice: "$500.43",
      initialprice: "$500.43",
      createdon: "8/7/2023",
    },
    {
      name: (
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-10 w-10 rounded-full mr-1"
            src="../assets/images/nft2.png"
            alt=""
          />
          ARG VS NIG
        </div>
      ),
      category: "Football",
      currentprice: "$500.43",
      startingprice: "$500.43",
      initialprice: "$500.43",
      createdon: "8/7/2023",
    },
    {
      name: (
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-10 w-10 rounded-full mr-1"
            src="../assets/images/nft2.png"
            alt=""
          />
          ARG VS NIG
        </div>
      ),
      category: "Football",
      currentprice: "$500.43",
      startingprice: "$500.43",
      initialprice: "$500.43",
      createdon: "8/7/2023",
    },
    {
      name: (
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-10 w-10 rounded-full mr-1"
            src="../assets/images/nft2.png"
            alt=""
          />
          ARG VS NIG
        </div>
      ),
      category: "Football",
      currentprice: "$500.43",
      startingprice: "$500.43",
      initialprice: "$500.43",
      createdon: "8/7/2023",
    },
    {
      name: (
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-10 w-10 rounded-full mr-1"
            src="../assets/images/nft2.png"
            alt=""
          />
          ARG VS NIG
        </div>
      ),
      category: "Football",
      currentprice: "$500.43",
      startingprice: "$500.43",
      initialprice: "$500.43",
      createdon: "8/7/2023",
    },
    {
      name: (
        <div className="flex flex-row justify-center items-center">
          <img
            className="h-10 w-10 rounded-full mr-1"
            src="../assets/images/nft2.png"
            alt=""
          />
          ARG VS NIG
        </div>
      ),
      category: "Football",
      currentprice: "$500.43",
      startingprice: "$500.43",
      initialprice: "$500.43",
      createdon: "8/7/2023",
    },
  ]);

  const customStyles = {
    table: {
      style: {
        width: "screen",
      },
    },

    rows: {
      style: {
        minHeight: "72px", // override the row height
        color: "black",
        border: "0px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "0px", // override the cell padding for head cells
        paddingRight: "0px",
        color: "#0654D6",
        fontSize: "18px",
        fontWeight: "400",
      },
    },
    cells: {
      style: {
        paddingLeft: "0px", // override the cell padding for data cells
        paddingRight: "0px",
      },
    },
  };

  createTheme(
    "solarized",
    {
      text: {
        primary: "black",
        secondary: "#2aa198",
      },
      background: {
        default: "#linear-gradient(to bottom, #ffffff 0%, #ccffff 100%)",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#fff",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
      filterable: true,
    },
     
  ];

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.title
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
      }
    };

    return (
      <>
        <Button
          key="delete"
          onClick={handleDelete}
          style={{ backgroundColor: "red" }}
          icon
        >
          Delete
        </Button>
        <Button key="delete" style={{ backgroundColor: "Green" }} icon>
          Edit
        </Button>
      </>
    );
  }, [data, selectedRows, toggleCleared]);
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return (
      <div>
        <HeadAdmin
          name={data.user.name}
          img={data.user.image}
          signOut={signOut}
        />
        <AdminSidebar active={"createPlatform"} />

        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-[140vh]  overflow-y-hidden">
            <div
              className="text-2xl text-[#333333]  font-semibold cursor-pointer"
              onClick={() => router.push("/Dashboard")}
            >
              Create Platform
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
                          Platform Name
                        </label>
                        <input
                          type="email"
                          id="email"
                          onChange={(v) => setName(v.target.value)}
                          value={name}
                          className=" border placeholder:font-light border-gray-300 text-[#333333] text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Type here"
                          required
                        />
                      </div>
                      <div className="w-full flex flex-row justify-end mt-10">
                        <button
                          className="bg-[#0654D6]  w-44 hover:bg-blue-700 text-white font-extralight py-2 px-4 rounded"
                          onClick={() => {
                            saveData();
                          }}
                        >
                          Create Platform
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 mt-10 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-fit w-auto overflow-y-hidden">
                  <div className="rounded bg-white h-auto p-5 mt-3 dark:bg-gray-800">
                    <DataTable
                      columns={columns}
                      data={tableData}
                      selectableRows
                      filterable
                      highlightOnHover
                      theme="solarized"
                      customStyles={customStyles}
                      fixedHeader
                      fixedHeaderScrollHeight="75vh"
                      contextActions={contextActions}
                      onSelectedRowsChange={handleRowSelected}
                      clearSelectedRows={toggleCleared}
                    />
                  </div>
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
