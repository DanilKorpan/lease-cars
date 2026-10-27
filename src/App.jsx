import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import ContactUsPage from "./pages/ContactUsPage";
import NewCarsPage from "./pages/NewCarsPage";
import Hero from "./components/Hero";
import WhyLease from "./components/WhyLease";
import LeasingGuide from "./components/LeasingGuide";
import Footer from "./components/Footer";

const HomePage = () => (
  <main>
    <Hero />
    <WhyLease />
    <LeasingGuide />
  </main>
);

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash, pathname]);

  return null;
};

const SiteLayout = () => {
  const { pathname } = useLocation();
  const isSolidHeader = ["/contact-us", "/new-cars"].includes(pathname);

  return (
    <>
      <ScrollToHash />
      <Header variant={isSolidHeader ? "solid" : "overlay"} />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="new-cars" element={<NewCarsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
