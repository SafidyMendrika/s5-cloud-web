import { useLocation } from "react-router-dom";
import Header from "../components/front-office/Header";
import Footer from "../components/front-office/Footer";

const FrontOfficeLayout = ({ children }) => {
  const location = useLocation();

  const handleActivePage = (path) => {
    return location.pathname.includes(path) ? "active" : "";
  };

  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default FrontOfficeLayout;
