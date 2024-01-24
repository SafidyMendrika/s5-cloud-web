import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackOfficeLayout from "./layouts/BackOfficeLayout";
import FrontOfficeLayout from "./layouts/FrontOfficeLayout";
import Statistique from "./pages/back-office/Statistique";
import ListCategorie from "./pages/back-office/ListCategorie";
import ListMarque from "./pages/back-office/ListMarque";
import ListModele from "./pages/back-office/ListModele";
import Annonce from "./pages/back-office/Annonce";
import Commission from "./pages/back-office/Commission";
import SignIn from "./pages/back-office/SignIn";

const BackOfficeRoutes = () => (
  <Routes>
    <Route path="/" element={<Statistique />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/statistiques" element={<Statistique />} />
    <Route path="/categories" element={<ListCategorie />} />
    <Route path="/marques" element={<ListMarque />} />
    <Route path="/modeles" element={<ListModele />} />
    <Route path="/annonces" element={<Annonce />} />
    <Route path="/commissions" element={<Commission />} />
  </Routes>
);

const FrontOfficeRoutes = () => (
  <Routes>
    <Route path="/home" element={<h1>Home</h1>} />
  </Routes>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/back-office/*"
        element={
          <BackOfficeLayout>
            <BackOfficeRoutes />
          </BackOfficeLayout>
        }
      />
      <Route
        path="/front-office/*"
        element={
          <FrontOfficeLayout>
            <FrontOfficeRoutes />
          </FrontOfficeLayout>
        }
      />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
