import { cx } from "@/src/utils/index.js";
import "./globals.css";
import { Inter, Manrope, Roboto_Mono, Source_Code_Pro } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import siteMetadata from "../utils/siteMetaData";
import ThemeScript from "../components/ThemeScript";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-rb"
})

export const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-scp"
})

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    title: {
      template: `%s | ${siteMetadata.title}`,
      default: siteMetadata.title,
    },
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: 'Next.js',
    images: [
      siteMetadata.socialBanner
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <ThemeScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
