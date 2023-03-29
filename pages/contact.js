import Leyout from "../components/Leyout.js";

const contact = () => {
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
              ></textarea>
            </div>
            <hr />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </Leyout>
    </>
  );
};

export default contact;
