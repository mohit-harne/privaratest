"use client";
import * as React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Info from "@mui/icons-material/info";
import Near from "@mui/icons-material/radar";
import Qr from "@mui/icons-material/QrCode2";
import Rera from "../../public/img/RERA/Krishna Nagri 42-1-A RERA CODE.png";
import { QrCode } from "@mui/icons-material";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

        <div className="mt-4 pt-1" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  icon={<Info />}
                  iconPosition="start"
                  label="Introduction"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<Near />}
                  iconPosition="start"
                  label="Proximity"
                  {...a11yProps(1)}
                />
                <Tab
                  icon={<Qr />}
                  iconPosition="start"
                  label="RERA Code"
                  {...a11yProps(2)}
                ></Tab>
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="Child1">
                <h3>Krishna Nagari</h3>
                <a className="tex-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    width="25px"
                    height="25px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <strong m-2>JAMTHA NAGPUR</strong>
                </a>
                <div className="d-flex flex text-dark column mt-3">
                  <div className="">
                    <p>
                      <b>Plot Area:</b> 22 ACRES
                    </p>
                  </div>
                  <div className="px-2">
                    <p>
                      <b>Number Of Plots: </b> 321{" "}
                    </p>
                  </div>
                </div>
                <p className="text-dark mb-2 text-align-justify">
                  Welcome to our Krishna Nagari, an idyllic community
                  thoughtfully designed for modern living. Spread across 22
                  acres, Krishna Nagari boasts meticulously planned spaces,
                  ensuring a perfect balance between Luxury and Affordability
                  Conveniently located Opposite to NCI, Krishna Nagari offers
                  easy access to Samruddhi Expressway, educational
                  institutions(IIM, DPS), healthcare facilities(AIIMS, NCI), and
                  Recreational Centers (VCA Stadium), making it an ideal place
                  to call home. Krishna Nagari welcomes you to experience the
                  perfect harmony of modern living in a community that truly
                  feels comfort, connectivity, and serenity.{" "}
                </p>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className="pt-2">
                <p className="card-title text-dark top_heading pt-2">
                  <b>Proximity</b>
                  <br />
                </p>
                <ol className="list-outline">
                  <li>{` NCI – 1 Km`}</li>
                  <li>{` AIIMS - 1km`}</li>

                  <li>{`IIM’S – 1 km`}</li>
                  <li>{`VCA stadium – 1 KM`}</li>
                  <li>{`Samruddhi Express Way – 2.5 km`}</li>
                </ol>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className="d-flex justify-content-center">
                <a href="#">
                  <Image className="item-align-center" src={Rera} alt="Image" />
                </a>
              </div>
            </CustomTabPanel>
          </Box>
        </div>
  
    </>
  );
}
