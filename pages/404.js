import Link from "next/link";
import Leyout from "../components/Leyout";

const custom404 = () => {
  <Leyout>
    <div class="text-center">
      <h1>404</h1>
      <p>
        this page does not exists. please return to{" "}
        <Link href="/" className="btn-link">
          Home
        </Link>
      </p>
    </div>
  </Leyout>;
};
export default custom404;
