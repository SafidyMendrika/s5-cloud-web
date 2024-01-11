import { Link, useLocation } from "react-router-dom";
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
      <h1>Front Office</h1>
      <Link to={"/back-office/dashboard"} className={handleActivePage("home")}>
        Home
      </Link>
      <br />
      <div className="container">{children}</div>
      <br />
      <Footer />
    </>
  );
};

export default FrontOfficeLayout;
