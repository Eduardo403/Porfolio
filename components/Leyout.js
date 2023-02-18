import Navbar from "./Navbar.js";

const Leyout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div class="container p-4">
          <h6>&copy; Eduardo Hernandez Porfolio</h6>
          <p>2020 - {new Date().getFullYear()}</p>
          <p>All rights reserverd.</p>
        </div>
      </footer>
    </>
  );
};

export default Leyout;
