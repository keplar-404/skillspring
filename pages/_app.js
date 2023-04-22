import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>skillspring</title>
    </Head>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* header */}
      <div className="w-full flex justify-center items-center fixed z-[900]">
        <div className="w-full">
          <Header />
        </div>
      </div>
      {/* main content */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full">
          <Component {...pageProps} />
        </div>
      </div>

      {/* footer */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
