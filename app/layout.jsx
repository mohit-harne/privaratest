import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./styles/common.css";
import Script from "next/script";
import React from "react";
import NavBar from "./Components/NavBar";
import Whatsapp from "./Components/whatsapp";
import Footer from "./Components/Footer";
import Loader from "./Loader"; // Ensure the path is correct
import ErrorBoundary from "./Components/ErrorBoundary";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Privara - Real Estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />

        {/* Use public paths if files are in public folder */}
        <link href="/utils/lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="/utils/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader>
          {" "}
          {/* All components inside Loader */}
          <ErrorBoundary>
            <div className="container-fluid bg-white p-0">
              <NavBar />
              {children}
              <Whatsapp />
              <Footer />
            </div>
          </ErrorBoundary>
        </Loader>

        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        <Script src="/utils/lib/waypoints/waypoints.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="/utils/lib/wow/wow.min.js" />
        <Script src="/utils/lib/easing/easing.min.js" />
        <Script src="/utils/lib/owlcarousel/owl.carousel.min.js" />
        {/* Template JavaScript */}
        <Script src="/utils/js/main.js" />
      </body>
    </html>
  );
}
