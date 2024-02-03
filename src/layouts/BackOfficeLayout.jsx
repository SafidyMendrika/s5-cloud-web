import { useEffect } from "react";

import "../assets/css/template.min.css";
import "../assets/js/sidebarmenu.js";
import "../assets/js/app.min.js";
import SideBar from "../components/back-office/SideBar.jsx";
import Header from "../components/back-office/Header.jsx";
import { jwtDecode } from "jwt-decode";

const BackOfficeLayout = ({ children }) => {
  useEffect(() => {
    const handleStorageChange = () => {
      checkAuthUserAdmin();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const checkAuthUserAdmin = () => {
    const authUserAdminToken = sessionStorage.getItem("authUserAdmin");

    if (!authUserAdminToken) {
      window.location.href = "/back-office/";
      return;
    }

    try {
      const decodedToken = jwtDecode(authUserAdminToken);
      const currentTime = Date.now() / 1000;

      if (currentTime > decodedToken.exp) {
        sessionStorage.removeItem("authUserAdmin");
      }
    } catch (error) {
      sessionStorage.removeItem("authUserAdmin");
    }
  };

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
