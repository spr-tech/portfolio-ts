import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Experience = () => {
  const workExperience = [
    {
      role: "Frontend Developer Intern",
      company: "RWA Inc | Development & Internship",
      period: "04/2026–Present",
      responsibilities: [
        "Learning company development workflow and frontend architecture",
        "Collaborating with the team to understand frontend architecture and best practices",
        "Participating in training and technical discussions",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "STX Technologies",
      period: "05/2025–11/2025",
      responsibilities: [
        "Developed reusable components for future projects",
        "Built and maintained dynamic frontend experiences using HTML, CSS, JavaScript, and React",
        "Collaborated with developers on design, development, and testing of programs",
        "Provided technical support for users experiencing issues with webpages or applications",
      ],
    },
  ];

  const projects = [
    {
      name: "Far-away App",
      live: "https://farawayapplication.netlify.app/",
      code: "https://github.com/spr-tech/react-far-away-app",
      description: [
        "Built an interactive travel list application to manage and organize trip items",
        "Implemented dynamic state management for adding, updating, and deleting items",
        "Designed a clean and responsive UI for seamless user interaction",
        "Utilized reusable React components to improve scalability and maintainability",
        "Applied conditional rendering to enhance user experience and feedback",
      ],
    },
    {
      name: "Bill Split App",
      live: "https://billspiltapp.netlify.app/",
      code: "https://github.com/spr-tech/Bill-split",
      description: [
        "Developed a bill-splitting application to calculate and manage shared expenses",
        "Implemented logic for tracking balances and splitting costs between users",
        "Managed application state to handle real-time updates and user inputs",
        "Designed reusable components for better code structure and efficiency",
        "Focused on intuitive UI to simplify financial interactions for users",
      ],
    },
  ];

  return (
    <div className="text-white">
      <h4 className="uppercase font-medium text-2xl mt-13 mb-5">
        Work Experience
      </h4>
      <hr className="border-[#444] my-4" />

      {workExperience.map((job, index) => (
        <div key={index} className="job">
          <p className="mt-7">
            <strong className="text-[1.2rem]">{job.role}</strong>,{" "}
            <span className="text-[1.4rem]"> {job.company}</span>
            <i className="block">{job.period}</i>
          </p>
          <ul className="list-disc pl-8">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h4 className="text-[1.2rem] mt-6">Selected Personal Projects</h4>

      {projects.map((project, index) => (
        <div key={index} className="mb-7 ">
          <div className="flex gap-3 items-center mt-3">
            <p>
              <span className="text-[1rem] font-medium">{project.name}</span>
            </p>
            <div className="flex gap-2">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <SiNetlify size={20} />
              </a>
            </div>
          </div>
          <ul className="list-disc pl-8">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
