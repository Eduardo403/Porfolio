import Leyout from "../components/Leyout";

const blog = () => {
  return (
    <>
      <Leyout>
        <div
          class="card text-white bg-dark mb-4"
          style={{ maxwidth: "30rem;" }}
        >
          <div class="card-header">
            <font style={{ verticalalign: "inherit;" }}>
              <font style={{ verticalalign: "inherit;" }}>Abut me</font>
            </font>
          </div>
          <div class="card-body">
            <h4 class="card-title">
              <font style={{ verticalalign: "inherit;" }}>
                <font style={{ verticalalign: "inherit;" }}>
                  Hello, my name is Eduardo Hernandez
                </font>
              </font>
            </h4>
            <p class="card-text">
              <font style={{ verticalalign: "inherit;" }}>
                <font style={{ verticalalign: "inherit;" }}>
                  and I am a passionate programmer with two years of experience
                  in the technology industry. My main focus is web application
                  development using technologies like node.js , next.js , SQL ,
                  vanilla.js. In addition, I have a solid experience in database
                  design and development, system integration . I love working on
                  challenging projects and am always looking to learn new skills
                  to improve my work. I am a proactive and self-directed person,
                  which allows me to work effectively both individually and in a
                  team. In addition, I am always willing to share my knowledge
                  and experience with other team members to ensure the success
                  of the project. In my free time, I like to attend programming
                  events, where I can meet other programmers and keep up with
                  the latest trends and technologies. I also enjoy reading
                  articles on programming. If you are interested in my work, do
                  not hesitate to contact me. I am looking forward to working on
                  exciting new projects!
                </font>
              </font>
            </p>
          </div>
        </div>
      </Leyout>
    </>
  );
};

export default blog;
