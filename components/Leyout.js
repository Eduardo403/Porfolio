import Navbar from "./Navbar.js";

const Leyout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
    </>
  );
};

export default Leyout;
