import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./styles/common.css";
import Script from "next/script";
import { Inter, Roboto } from "next/font/google";
import NavBar from "./Components/NavBar";
import Whatsapp from "./Components/whatsapp";
import Footer from "./Components/Footer";

// import './page.module.css'

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Privara developers",
  description: "Real Estate",
  openGraph: {
    title: "...",
    description: "...",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Privara - Real Estate</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        

        <link rel="icon" href="../public/img/favicon.png" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap"
          rel="stylesheet"
        />
        {/* Icon Font Stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link href="./utils/lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="./utils/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="container-fluid bg-white p-0">
          <NavBar />

          {children}
          <Whatsapp />
          <Footer />
        </div>
        {/* JavaScript Libraries */}

        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="./utils/lib/wow/wow.min.js" />
        <Script src="./utils/lib/easing/easing.min.js" />
        <Script src="./utils/lib/waypoints/waypoints.min.js"></Script>
        <Script src="./utils/lib/owlcarousel/owl.carousel.min.js"></Script>

        {/* Template JavaScript */}
        <Script src="./utils/js/main.js"></Script>
      </body>
    </html>
  );
}
