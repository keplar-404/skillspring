import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Header />
       <div className="w-full sm:bg-black md:bg-purple-700 lg:bg-orange-400 xl:bg-gray-400 2xl:bg-red-300">
        h
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
