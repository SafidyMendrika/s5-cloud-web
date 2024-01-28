import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackOfficeLayout from "./layouts/BackOfficeLayout";
import FrontOfficeLayout from "./layouts/FrontOfficeLayout";
import Statistique from "./pages/back-office/Statistique";
import Categorie from "./pages/back-office/Categorie";
import Marque from "./pages/back-office/Marque";
import Modele from "./pages/back-office/Modele";
import Annonce from "./pages/back-office/Annonce";
import Commission from "./pages/back-office/Commission";
import SignIn from "./pages/back-office/SignIn";
import Moteur from "./pages/back-office/Moteur";
import Vitesse from "./pages/back-office/Vitesse";
import Energie from "./pages/back-office/Energie";

const BackOfficeRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
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
            <Route path="/annonces" element={<Annonce />} />
            <Route path="/commissions" element={<Commission />} />
          </Routes>
        </BackOfficeLayout>
      }
    />
  </Routes>
);

const FrontOfficeRoutes = () => (
  <FrontOfficeLayout>
    <Routes>
      <Route path="/home" element={<h1>Home</h1>} />
    </Routes>
  </FrontOfficeLayout>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/back-office/*" element={<BackOfficeRoutes />} />
      <Route path="/front-office/*" element={<FrontOfficeRoutes />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
