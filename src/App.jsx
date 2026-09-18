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

const seo = {
  "/": ["TAMİS Teknoloji | İleri Teknoloji ve Mühendislik", "Savunma, elektronik, otonom sistemler, yazılım ve Ar-Ge odaklı TAMİS Teknoloji."],
  "/kurumsal": ["Kurumsal | TAMİS Teknoloji", "TAMİS Teknoloji kurumsal yaklaşımı, vizyonu ve mühendislik ilkeleri."],
  "/yetkinlikler": ["Yetkinlikler | TAMİS Teknoloji", "Savunma sistemleri, elektronik, otonom sistemler, yazılım ve yapay zekâ yetkinlikleri."],
  "/urunler": ["Ürünler | TAMİS Teknoloji", "TAMİS Teknoloji ürün ve sistem portföyü."],
  "/ar-ge": ["Teknoloji & Ar-Ge | TAMİS Teknoloji", "Araştırma, sistem mühendisliği, prototipleme, doğrulama ve entegrasyon yaklaşımı."],
  "/teknolojiler": ["Teknoloji Alanları | TAMİS Teknoloji", "TAMİS'in elektronik, algılama, otonomi ve yazılım teknoloji alanları."],
  "/medya": ["Medya | TAMİS Teknoloji", "TAMİS Teknoloji haber, basın ve kurumsal doküman merkezi."],
  "/kariyer": ["Kariyer | TAMİS Teknoloji", "TAMİS Teknoloji kariyer, mühendislik disiplinleri ve açık pozisyonlar."],
  "/iletisim": ["İletişim | TAMİS Teknoloji", "TAMİS Teknoloji kurumsal iletişim bilgileri."],
};

function SeoManager(){
 const { pathname } = useLocation();
 useEffect(()=>{
   const key = pathname.startsWith("/urunler/") ? "/urunler" : pathname;
   const [title, description] = seo[key] || ["TAMİS Teknoloji", "TAMİS Teknoloji — ileri teknoloji ve mühendislik."];
   document.title = title;
   let meta = document.querySelector('meta[name="description"]');
   if(!meta){ meta=document.createElement("meta"); meta.name="description"; document.head.appendChild(meta); }
   meta.content=description;
 },[pathname]);
 return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <SeoManager />

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