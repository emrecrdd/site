import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Generic from "./pages/Generic";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const pages = [
    ["kurumsal", "Kurumsal"],
    ["yetkinlikler", "Yetkinlikler"],
    ["teknolojiler", "Teknolojiler"],
    ["urunler", "Ürünler"],
    ["ar-ge", "Ar-Ge"],
    ["medya", "Medya"],
    ["kariyer", "Kariyer"],
    ["iletisim", "İletişim"],
  ];

  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {pages.map(([path, title]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={<Generic title={title} />}
          />
        ))}
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}