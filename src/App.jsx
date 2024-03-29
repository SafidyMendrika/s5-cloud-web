import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackOfficeLayout from "./layouts/BackOfficeLayout";
import FrontOfficeLayout from "./layouts/FrontOfficeLayout";

import Statistique from "./pages/back-office/Statistique";
import Categorie from "./pages/back-office/Categorie";
import Marque from "./pages/back-office/Marque";
import Modele from "./pages/back-office/Modele";
import AnnonceBackOffice from "./pages/back-office/Annonce";
import Commission from "./pages/back-office/Commission";
import SignInBackOffice from "./pages/back-office/SignIn";
import Moteur from "./pages/back-office/Moteur";
import Vitesse from "./pages/back-office/Vitesse";
import Energie from "./pages/back-office/Energie";

import AnnonceFrontOffice from "./pages/front-office/Annonce";
import Accueil from "./pages/front-office/Accueil";
import Profil from "./pages/front-office/Profil";
import Message from "./pages/front-office/Message";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BackOfficeRoutes = () => (
  <Routes>
    <Route path="/" element={<SignInBackOffice />} />
    <Route
      path="/*"
      element={
        <BackOfficeLayout>
          <Routes>
            <Route path="/statistiques" element={<Statistique />} />
            <Route path="/categories" element={<Categorie />} />
            <Route path="/marques" element={<Marque />} />
            <Route path="/modeles" element={<Modele />} />
            <Route path="/moteurs" element={<Moteur />} />
            <Route path="/vitesses" element={<Vitesse />} />
            <Route path="/energies" element={<Energie />} />
            <Route path="/annonces" element={<AnnonceBackOffice />} />
            <Route path="/commissions" element={<Commission />} />
          </Routes>
        </BackOfficeLayout>
      }
    />
  </Routes>
);

const FrontOfficeRoutes = () => (
  <Routes>
    <Route
      path="/*"
      element={
        <FrontOfficeLayout>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/annonces" element={<AnnonceFrontOffice />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </FrontOfficeLayout>
      }
    />
  </Routes>
);

const App = () => (
  <SkeletonTheme baseColor="#f3f3f3" highlightColor="#e1e1e1">
    <BrowserRouter>
      <Routes>
        <Route path="/back-office/*" element={<BackOfficeRoutes />} />
        <Route path="/*" element={<FrontOfficeRoutes />} />
      </Routes>
    </BrowserRouter>
  </SkeletonTheme>
);

export default App;
