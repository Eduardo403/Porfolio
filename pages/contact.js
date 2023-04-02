import { useState } from "react";
import Leyout from "../components/Leyout.js";
let initeData = {
  matter: "",
  email: "",
  message: "",
};

const contact = () => {
  const [data, setData] = useState(initeData);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for contacting us. We will get back to you as soon as possible."
    );
    // setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Leyout>
        <form>
          <fieldset>
            <legend>contact me</legend>

            <div class="form-group">
              <label for="matter" class="form-label mt-4">
                matter to be discussed
              </label>
              <input
                type="text"
                class="form-control"
                id="matter"
                aria-describedby="emailHelp"
                placeholder="matter"
                required
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div class="form-group">
              <label for="exampleTextarea" class="form-label mt-4">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleTextarea"
                rows="3"
                required
              ></textarea>
            </div>
            <hr />
            <button
              type="submit"
              class="btn btn-primary"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </fieldset>
        </form>

        <section>
          <aside class="box-shadow-1 contact-cart">
            <svg
              viewBox="-0.003 -293.41895027729095 1172.923 1474.5159502772908"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              width="1659"
              height="2500"
            >
              <path
                d="M308.678 1021.49l19.153 9.576a499.739 499.739 0 0 0 258.244 70.227c279.729-.638 509.563-231.016 509.563-510.744 0-135.187-53.692-265.012-149.169-360.713-95.35-96.69-225.62-151.18-361.383-151.18-278.451 0-507.552 229.133-507.552 507.552 0 2.203 0 4.373.032 6.576a523.81 523.81 0 0 0 76.612 268.14l12.768 19.153-51.074 188.337 192.806-46.925z"
                fill="#00E676"
                fill-rule="nonzero"
              />
              <path
                d="M1003.29 172.378C894.597 61.482 745.49-.732 590.225 0h-.99C269.479.001 6.35 263.131 6.35 582.888c0 1.5.032 2.969.032 4.47a616.759 616.759 0 0 0 76.612 290.485L-.003 1181.097l309.32-79.804a569.202 569.202 0 0 0 278.993 70.228c320.939-1.756 584.036-266.385 583.844-587.356.766-154.213-60.044-302.52-168.864-411.787m-413.065 900.186a473.935 473.935 0 0 1-245.476-67.035l-19.153-9.577-184.187 47.883 47.882-181.953-12.768-19.153a484.242 484.242 0 0 1-72.558-254.957c0-265.65 218.599-484.25 484.25-484.25 265.65 0 484.248 218.6 484.248 484.25 0 167.269-86.666 323.11-228.781 411.372a464.838 464.838 0 0 1-251.86 73.42m280.59-354.329l-35.114-15.96s-51.075-22.346-82.996-38.306c-3.192 0-6.384-3.192-9.577-3.192a46.308 46.308 0 0 0-22.345 6.384c-6.799 3.99-3.192 3.192-47.882 54.266-3.032 5.97-9.257 9.705-15.96 9.577h-3.193a24.328 24.328 0 0 1-12.768-6.384l-15.961-6.385a309.91 309.91 0 0 1-92.573-60.65c-6.384-6.385-15.96-12.77-22.345-19.154a357.13 357.13 0 0 1-60.65-76.611l-3.193-6.384a46.475 46.475 0 0 1-6.384-12.769 23.915 23.915 0 0 1 3.192-15.96c2.905-4.789 12.769-15.962 22.345-25.538 9.577-9.576 9.577-15.96 15.961-22.345a39.33 39.33 0 0 0 6.384-31.922 1246.398 1246.398 0 0 0-51.074-121.301 37.099 37.099 0 0 0-22.345-15.961H380.82c-6.384 0-12.768 3.192-19.153 3.192l-3.192 3.192c-6.384 3.192-12.768 9.577-19.153 12.769-6.384 3.192-9.576 12.769-15.96 19.153a162.752 162.752 0 0 0-35.114 98.956 189.029 189.029 0 0 0 15.96 73.42l3.193 9.576a532.111 532.111 0 0 0 118.11 162.8l12.768 12.769a193.037 193.037 0 0 1 25.537 25.537c66.141 57.554 144.7 99.052 229.516 121.302 9.576 3.192 22.345 3.192 31.921 6.384h31.922a118.126 118.126 0 0 0 47.882-12.769c7.82-3.543 15.29-7.82 22.345-12.768l6.384-6.385c6.385-6.384 12.769-9.576 19.153-15.96a84.393 84.393 0 0 0 15.961-19.153c6.129-14.301 10.438-29.304 12.769-44.69V724.62a40.107 40.107 0 0 0-9.577-6.385"
                fill="#fff"
                fill-rule="nonzero"
              />
            </svg>
            <h4>tel</h4>
            <small>
              <a href="tel:+34624557699">(+34)624557699</a>
            </small>
          </aside>
          <aside class="box-shadow-1 contact-cart">
            <svg
              height="2500"
              width="2500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 49.4 512 399.4200000000001"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill-rule="nonzero">
                  <path
                    d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
                    fill="#4285f4"
                  />
                  <path
                    d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
                    fill="#34a853"
                  />
                  <path
                    d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
                    fill="#fbbc04"
                  />
                </g>
                <path
                  d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
                  fill="#ea4335"
                />
                <path
                  d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
                  fill="#c5221f"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            <h4>Email</h4>
            <small>
              <a href="mailto:edua.24h@gmail.com">edua.24h@gmail.com</a>
            </small>
          </aside>
        </section>
      </Leyout>
    </>
  );
};

export default contact;
