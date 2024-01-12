import { useEffect } from "react";

import "../assets/css/styles.min.css";
import "../assets/js/sidebarmenu.js";
import "../assets/js/app.min.js";
import SideBar from "../components/back-office/SideBar.jsx";
import Header from "../components/back-office/Header.jsx";

const BackOfficeLayout = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <SideBar />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </>
  );
};

export default BackOfficeLayout;
