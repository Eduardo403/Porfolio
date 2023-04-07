import { useState } from "react";
import Leyout from "../components/Leyout.js";
let initeData = {
  matter: "",
  email: "",
  message: "",
};

const contact = () => {
  const [data, setData] = useState(initeData);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.matter && !data.email && !data.message) {
      window.alert("messing data");
    }
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
              <label htmlFor="matter" class="form-label mt-4">
                Matter
              </label>
              <input
                type="text"
                class="form-control"
                id="matter"
                aria-describedby="emailHelp"
                name="matter"
                placeholder="matter"
                required
                onChange={handleChange}
              />
            </div>

            <div class="form-group">
              <label htmlFor="exampleInputEmail1" class="form-label mt-4">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={handleChange}
                name="email"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div class="form-group">
              <label for="exampleTextarea" class="form-label mt-4">
                text
              </label>
              <textarea
                class="form-control"
                id="exampleTextarea"
                rows="3"
                required
                name="message"
                onChange={handleChange}
              ></textarea>
            </div>
            <hr />

            <input
              type="submit"
              value="Submit"
              class="btn btn-primary"
              onSubmit={handleSubmit}
            />
          </fieldset>
        </form>
        <section id="contact" class="contact ">
          <article class="conteiner-contact-cart">
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
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#00acee"
                viewBox="0 0 24 24"
              >
                <path d="M16.018,3.815L15.232,8h-4.966l0.716-3.815L9.018,3.815L8.232,8H4v2h3.857l-0.751,4H3v2h3.731l-0.714,3.805l1.965,0.369 L8.766,16h4.966l-0.714,3.805l1.965,0.369L15.766,16H20v-2h-3.859l0.751-4H21V8h-3.733l0.716-3.815L16.018,3.815z M14.106,14H9.141 l0.751-4h4.966L14.106,14z" />
              </svg>
              <h4>Social Media</h4>
              <small class="social">
                <a
                  href="https://twitter.com/Eduardo_wed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    height="1684"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="-89.00934757 -46.8841404 643.93723344 446.8841404"
                    width="2500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359"
                      fill="#1da1f2"
                      fill-rule="nonzero"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/eduardo-hern%C3%A1ndez-46314121a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2500"
                    height="2500"
                    viewBox="7.025 7.025 497.951 497.95"
                  >
                    <linearGradient
                      id="a"
                      gradientUnits="userSpaceOnUse"
                      x1="-974.482"
                      y1="1306.773"
                      x2="-622.378"
                      y2="1658.877"
                      gradientTransform="translate(1054.43 -1226.825)"
                    >
                      <stop offset="0" stop-color="#2489be" />
                      <stop offset="1" stop-color="#0575b3" />
                    </linearGradient>
                    <path
                      d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                      fill="url(#a)"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/Eduardo403"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465	c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93	c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021	c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021	c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479	C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                    />
                  </svg>
                </a>
              </small>
            </aside>
          </article>
        </section>
      </Leyout>
    </>
  );
};

export default contact;
