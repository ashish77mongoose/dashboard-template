import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
const Schedule = () => {
  const data = [
    {
      id: 1,
      first_name: "Arlee",
      last_name: "Kobierski",
      email: "akobierski0@shinystat.com",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Robenia",
      last_name: "Burk",
      email: "rburk1@hexun.com",
      gender: "Female",
    },
    {
      id: 3,
      first_name: "Helyn",
      last_name: "Faint",
      email: "hfaint2@flavors.me",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Lazare",
      last_name: "McCritichie",
      email: "lmccritichie3@purevolume.com",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Trevor",
      last_name: "Bruyett",
      email: "tbruyett4@google.pl",
      gender: "Male",
    },
    {
      id: 6,
      first_name: "Reuben",
      last_name: "Gonsalo",
      email: "rgonsalo5@nationalgeographic.com",
      gender: "Male",
    },
    {
      id: 7,
      first_name: "Berny",
      last_name: "Bockman",
      email: "bbockman6@wp.com",
      gender: "Male",
    },
    {
      id: 8,
      first_name: "Reta",
      last_name: "Burress",
      email: "rburress7@seesaa.net",
      gender: "Female",
    },
    {
      id: 9,
      first_name: "Washington",
      last_name: "Westrey",
      email: "wwestrey8@blog.com",
      gender: "Male",
    },
    {
      id: 10,
      first_name: "Evelina",
      last_name: "Kopec",
      email: "ekopec9@nih.gov",
      gender: "Female",
    },
    {
      id: 11,
      first_name: "Hestia",
      last_name: "Titley",
      email: "htitleya@dropbox.com",
      gender: "Female",
    },
    {
      id: 12,
      first_name: "Krishna",
      last_name: "Moreing",
      email: "kmoreingb@bandcamp.com",
      gender: "Male",
    },
    {
      id: 13,
      first_name: "Egbert",
      last_name: "Ganders",
      email: "egandersc@infoseek.co.jp",
      gender: "Male",
    },
    {
      id: 14,
      first_name: "Astrix",
      last_name: "Nevill",
      email: "anevilld@deviantart.com",
      gender: "Female",
    },
    {
      id: 15,
      first_name: "Willey",
      last_name: "MacCoughan",
      email: "wmaccoughane@stanford.edu",
      gender: "Male",
    },
    {
      id: 16,
      first_name: "Kirsteni",
      last_name: "Wallach",
      email: "kwallachf@usnews.com",
      gender: "Agender",
    },
    {
      id: 17,
      first_name: "Harvey",
      last_name: "Hurdwell",
      email: "hhurdwellg@ucsd.edu",
      gender: "Bigender",
    },
    {
      id: 18,
      first_name: "Maryanna",
      last_name: "Hewins",
      email: "mhewinsh@businessinsider.com",
      gender: "Female",
    },
    {
      id: 19,
      first_name: "Carlyle",
      last_name: "De Minico",
      email: "cdeminicoi@yandex.ru",
      gender: "Male",
    },
    {
      id: 20,
      first_name: "Danila",
      last_name: "Ive",
      email: "divej@hatena.ne.jp",
      gender: "Female",
    },
  ];

  const [rows, setRows] = useState([...data]);

  function getFullName(params) {
    return `${params.row.first_name || ""} ${params.row.last_name || ""}`;
  }
  const handleFilter = (itemId) => {
    return setRows(rows.filter((item) => item.id !== itemId));
  };
  const columns = [
    {
      field: "first_name",
      headerName: "First Name",
      type: "string",
      flex: 2,
      // colSpan: ({ row }) => {
      //   console.log(row);
      //   if (row.id === 2) {
      //     return 6;
      //   }
      //   return undefined;
      // },
    },
    {
      field: "last_name",
      headerName: "Last Name",
      type: "string",
      flex: 2,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 3,

      valueGetter: getFullName,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 2,
    },
    {
      field: "gender",
      headerName: "Gender",
      type: "string",
      flex: 2,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => handleFilter(params.row.id)}
              className="btn btn-primary "
            >
              Open
            </button>
          </div>
        );
      },
      flex: 2,
    },
  ];
  return (
    <div className="w-full mt-10 data-grid">
      <div className=" h-[600px] w-full">
        <DataGrid
          rows={rows}
          getEstimatedRowHeight={() => 52}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8, 10, 15]}
          slots={{
            toolbar: GridToolbar,
            loadingOverlay: LinearProgress,
          }}
          // hideFooter
          // hideFooterPagination
          disableColumnMenu
        />
      </div>
    </div>
  );
};

export default Schedule;
