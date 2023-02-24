import Leyout from "../components/Leyout.js";
import error from "./_error.js";
const github = ({ user }) => {
  console.log(user);
  return (
    <>
      <Leyout>
        <section className="row">
          <div class="card col-md-4 offset-md-4" style={{ width: "28rem;" }}>
            <img src={user.avatar_url} class="card-img-top" alt={user.name} />
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">{user.bio}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn  btn-secondary"
              >
                Go to Github
              </a>
            </div>
          </div>
        </section>
      </Leyout>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Eduardo403");
  const json = await res.json();

  return {
    props: {
      user: json,
    },
  };
}

export default github;
