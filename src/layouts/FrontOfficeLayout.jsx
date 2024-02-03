import "../assets/css/style.css";
import Header from "../components/front-office/Header";
import Footer from "../components/front-office/Footer";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const FrontOfficeLayout = ({ children }) => {
  useEffect(() => {
    const handleStorageChange = () => {
      checkAuthUserClient();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const checkAuthUserClient = () => {
    const authUserClientToken = localStorage.getItem("authUserClient");

    if (!authUserClientToken) {
      window.location.href = "/";
      return;
    }

    try {
      const decodedToken = jwtDecode(authUserClientToken);
      const currentTime = Date.now() / 1000;

      if (currentTime > decodedToken.exp) {
        localStorage.removeItem("authUserClient");
      }
    } catch (error) {
      localStorage.removeItem("authUserClient");
    }
  };

  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default FrontOfficeLayout;
