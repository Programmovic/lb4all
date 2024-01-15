import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Globals CSS
import "../styles/style.scss";
// Responsive CSS
import "../styles/responsive.css";
// RTL CSS
import "../styles/rtl.css";

import Head from "next/head";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";
import SEO from "@/components/Common/Seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <Navbar />

      <Component {...pageProps} />

      <Footer />

      <GoTop />
    </>
  )
}
