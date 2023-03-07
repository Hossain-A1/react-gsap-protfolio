const data = [
  {
    id: 1,
    Number: "01",
    title: "React todo app",
    date: " feb/02",
    tolls: "react - tailwind css,",
  },
  {
    id: 2,
    Number: "02",
    title: "Immemorial",
    date: " feb/12",
    tolls: "react - react-router - GSAP - css,",
  },
  {
    id: 3,
    Number: "03",
    title: "Foodever",
    date: " feb/20",
    tolls: "react - react-router -  tailwind css,",
  },
  {
    id: 4,
    Number: "04",
    title: "goBuy",
    date: " mar/01",
    tolls: "react - react-router- redux - tailwind css,",
  },
];

const Project = () => {
  return (
    <div className="projects-section">
      <div className="titles">
        <span>Selected task (2022 - 2023)</span>
        <span>projects</span>
      </div>

      <div className="projects-list-wrapper">
        {data.map((project) => (
          <div key={project.id} className="prorect-wrapper">
            <div className="project-item">
              <div className="project-titles">
                <span>{project.Number}</span>
                <h2>{project.title}</h2>
              </div>
              <div className="project-details">
                <span>{project.date}</span>
                <span>{project.tolls}</span>
              </div>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
