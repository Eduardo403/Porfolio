import { useRouter } from "next/router.js";
import { useEffect } from "react";
import Navbar from "./Navbar.js";
import nProgress from "nprogress";

const Leyout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const handelRouterChange = (url) => {
      nProgress.start();
    };
    router.events.on("routeChangeStart", handelRouterChange);
    router.events.on("routeChangeComplete", () => nProgress.done());
    return () => {
      router.events.off("routeChangeStart", handelRouterChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h6>&copy; Eduardo Hernandez Porfolio</h6>
          <p>2020 - {new Date().getFullYear()}</p>
          <p>All rights reserverd.</p>
        </div>
      </footer>
    </>
  );
};

export default Leyout;
