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
import Corporate from "./pages/Corporate";
import Generic from "./pages/Generic";

/* ========================================
   SCROLL MANAGER
======================================== */

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    /*
     * URL'de #vizyon, #kalite vb. varsa
     * ilgili bölüme git.
     */
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));

      const scrollToElement = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "auto",
            block: "start",
          });

          return true;
        }

        return false;
      };

      /*
       * Route render edildikten sonra elementi bulabilmek için
       * bir frame bekliyoruz.
       */
      const frame = requestAnimationFrame(() => {
        if (!scrollToElement()) {
          setTimeout(scrollToElement, 100);
        }
      });

      return () => cancelAnimationFrame(frame);
    }

    /*
     * Hash yoksa her yeni sayfa
     * en üstten açılır.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
}

/* ========================================
   ROUTES
======================================== */

function AppRoutes() {
  /*
   * Gerçek sayfaları hazırladıkça
   * buradan çıkaracağız.
   *
   * Kurumsal artık gerçek Corporate.jsx
   * kullandığı için listede yok.
   */
  const pages = [
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
      <ScrollManager />

      <Header />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* CORPORATE */}
        <Route
          path="/kurumsal"
          element={<Corporate />}
        />

        {/* TEMPORARY PAGES */}
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

/* ========================================
   APP
======================================== */

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}