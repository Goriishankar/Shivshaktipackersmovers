import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";

import Preloader from "@/layouts/Preloader";
import FloatingButtons from "../components/FloatingButtons";

export const metadata = {
  title: {
    default: "Shiv Shakti Packers & Movers",
    template: "%s | Shiv Shakti Packers & Movers",
  },
  description:
    "Shiv Shakti Packers & Movers provides reliable packing, moving, relocation, home shifting and office shifting services across India.",
  keywords: [
    "Packers and Movers",
    "Shiv Shakti Packers",
    "Home Shifting",
    "Office Relocation",
    "Moving Services India",
  ],
  authors: [{ name: "Shiv Shakti Packers & Movers" }],
  robots: "index, follow",
  openGraph: {
    title: "Shiv Shakti Packers & Movers",
    description:
      "Trusted Packers and Movers for safe and affordable relocation services.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <base href="/" />
      </head>
      <body>
        <FloatingButtons />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
