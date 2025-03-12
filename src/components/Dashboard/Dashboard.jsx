import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { BarChart } from "@mui/x-charts/BarChart";

import CloseIcon from "@mui/icons-material/Close";
import { MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import logo from "../../assets/logo-text (1).png";
import person from "../../assets/1 (1).jpg";
import "../../App.css";
import { Delete, Edit } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const pages = [
    { name: "Dashboard", link: "" },
    { name: "All Reservations ", link: "reservations" },
  ];
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 300,
        backgroundColor: "rgba(44, 47, 251, 0.26)",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <MenuItem
            key={page.name}
            component={Link}
            to={`/dashboard/${page.link}`}
            onClick={toggleDrawer(false)}
            sx={{
              padding: "10px 15px",
              margin: "20px 0px",
            }}
          >
            <Typography
              sx={{
                color: "#7e7e7e",
                fontWeight: "bolder",
                fontSize: "26px",
                paddingLeft: "10px",
              }}
            >
              {page.name}
            </Typography>
          </MenuItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div className="w-100 p-3 head" style={{ background: "#fbfbfb" }}>
        <div className="logo">
          <Button
            onClick={toggleDrawer(true)}
            style={{
              backgroundColor: "#2f4cdd",
              padding: "25px 20px ",
              transition: ".3s",
            }}
          >
            {open == false ? (
              <MenuOpenIcon
                style={{
                  fontSize: "40px",
                  color: "#fff",
                  fontWeight: "bolder",
                }}
              />
            ) : (
              <CloseIcon
                style={{
                  fontSize: "40px",
                  color: "#fff",
                  fontWeight: "bolder",
                }}
              />
            )}
          </Button>
          <img src={logo} style={{ margin: "20px ", cursor: "pointer" }} />
        </div>
        <div className="image">
          <img
            src={person}
            style={{
              width: "80px",
              border: "7px solid #2f4cdd",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="p-4">
        <h1 style={{ fontSize: "55px ", fontWeight: "700", padding: "10px" }}>
          {" "}
          Number of Reservations{" "}
        </h1>
       

        <table className="table table-hover shadow w-100">
          <thead>
            <tr>
              <th scope="col"> بدايه خط السير </th>
              <th scope="col"> نهايه خط السير </th>
              <th scope="col"> العدد</th>
              <th scope="col"> حاله الرحله </th>
              <th scope="col"> تفاصيل </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <button className="">
                  {" "}
                  <Delete />{" "}
                </button>
                <button className="">
                  {" "}
                  <Edit />{" "}
                </button>
                <button className="">
                  {" "}
                  <RemoveRedEyeIcon />{" "}
                </button>
              </td>
            </tr>{" "}
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">حولى - جمعيه حولى </td>
              <td> الكويت برج مزايا </td>
              <td>2</td>
              <td>العدد مكتمل </td>
              <td>
                <div className="details">
                  <button>
                    {" "}
                    <Delete />{" "}
                  </button>
                  <button>
                    {" "}
                    <Edit />{" "}
                  </button>
                  <button>
                    {" "}
                    <RemoveRedEyeIcon />{" "}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagi">
          <button className="mr-1">Previos </button>
          <button>1 </button>
          <button>2 </button>
          <button>3 </button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}
