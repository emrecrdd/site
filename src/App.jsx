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
import Capabilities from "./pages/Capabilities";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Research from "./pages/Research";
import Technologies from "./pages/Technologies";
import Media from "./pages/Media";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/* ========================================
   SCROLL MANAGER
======================================== */

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    /*
     * URL'de #vizyon, #kalite, #muhendislik,
     * #basin, #dokumanlar, #pozisyonlar vb.
     * varsa ilgili bölüme git.
     */
    if (hash) {
      const id = decodeURIComponent(
        hash.replace("#", "")
      );

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
       * Yeni route render edildikten sonra
       * hash elementinin DOM'a gelmesini bekliyoruz.
       */
      let timeout;

      const frame = requestAnimationFrame(() => {
        if (!scrollToElement()) {
          timeout = setTimeout(
            scrollToElement,
            100
          );
        }
      });

      return () => {
        cancelAnimationFrame(frame);

        if (timeout) {
          clearTimeout(timeout);
        }
      };
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

        {/* CAPABILITIES */}
        <Route
          path="/yetkinlikler"
          element={<Capabilities />}
        />

        {/* PRODUCTS */}
        <Route
          path="/urunler"
          element={<Products />}
        />

        <Route
          path="/urunler/:slug"
          element={<ProductDetail />}
        />

        {/* TECHNOLOGY & R&D */}
        <Route
          path="/ar-ge"
          element={<Research />}
        />

        <Route
          path="/teknolojiler"
          element={<Technologies />}
        />

        {/* MEDIA */}
        <Route
          path="/medya"
          element={<Media />}
        />

        {/* CAREERS */}
        <Route
          path="/kariyer"
          element={<Careers />}
        />

        {/* CONTACT */}
        <Route
          path="/iletisim"
          element={<Contact />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />
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