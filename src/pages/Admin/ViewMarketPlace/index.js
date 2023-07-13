import Head from "@/components/Head";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminSidebar from "@/components/AdminSidebar";
import DataTable, { createTheme } from "react-data-table-component";
import { Button } from "flowbite-react";
export default function IndexPage() {
  const { data, status } = useSession();

  const router = useRouter();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let response = await fetch("http://localhost:3000/api/viewMarketPlace", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
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

        newa.push({
          name: (
            <div className="flex flex-row justify-center items-center">
              <img
                className="h-10 w-10 rounded-full mr-1"
                src={elem.NFTDetails1.ipfs}
                alt=""
              />
              {elem.marketPlaceName}
            </div>
          ),
          category: elem.marketPlaceCategory,
          adminCommision: elem.adminCommision,

          initialprice: elem.initialprice,
          createdon: formattedDate,
        });
        setTableData(newa)
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
    {
      name: "Category",
      selector: "category",
      sortable: true,
    },
    {
      name: "Admin Comm (%)",
      selector: "adminCommision",
      sortable: true,
    },
    {
      name: "Initial Price",
      selector: "initialprice",
    },
    {
      name: "Created On",
      selector: "createdon",
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
        <Head name={data.user.name} img={data.user.image} signOut={signOut} />
        <AdminSidebar active={"ViewMarketplace"} />

        <div className="p-4 pt-0 sm:ml-64 ">
          <div className="p-4 border-2 bg-[#F5F7F9] border-dashed rounded-lg dark:border-gray-700 h-[140vh]  overflow-y-hidden">
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
    );
  }
  else{return window.open("/", "_self");}
}
