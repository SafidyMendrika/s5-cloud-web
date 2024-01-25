import { useEffect } from "react";

import "../assets/css/styles.min.css";
import "../assets/js/sidebarmenu.js";
import "../assets/js/app.min.js";
import SideBar from "../components/back-office/SideBar.jsx";
import Header from "../components/back-office/Header.jsx";
import { jwtDecode } from "jwt-decode";

const BackOfficeLayout = ({ children }) => {
  useEffect(() => {
    checkAuthUserAdmin();
    const tokenCheckInterval = setInterval(() => {
      checkAuthUserAdmin();
    }, 1000);
    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(tokenCheckInterval);
  }, []);

  useEffect(() => {
    // Surveiller les changements dans le stockage local
    const handleStorageChange = () => {
      checkAuthUserAdmin();
    };

    // Ajouter un écouteur d'événements pour le changement dans le stockage local
    window.addEventListener("storage", handleStorageChange);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const checkAuthUserAdmin = () => {
    const authUserAdminToken = localStorage.getItem("authUserAdmin");

    if (!authUserAdminToken) {
      redirectToLogin();
      return;
    }

    try {
      const decodedToken = jwtDecode(authUserAdminToken);
      const currentTime = Date.now() / 1000;

      if (currentTime > decodedToken.exp) {
        // Le jeton a expiré, rediriger vers la page de connexion
        localStorage.removeItem("authUserAdmin");
      }
    } catch (error) {
      localStorage.removeItem("authUserAdmin");
    }
  };

  const redirectToLogin = () => {
    window.location.href = "/back-office/sign-in";
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
