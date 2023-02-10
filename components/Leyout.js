import Navbar from "./Navbar.js";

const Leyout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Leyout;
