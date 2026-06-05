import { FaGithub } from "react-icons/fa";
import { SiNetlify, SiVercel } from "react-icons/si";
const Experience = () => {
  const workExperience = [
    {
      role: "Frontend Developer Intern",
      company: "RWA Inc | Development & Internship",
      period: "04/2026–Present",
      responsibilities: [
        "Built and delivered multiple dashboard pages for an AI-native IDE platform (Enter App) including a Projects management page with grid/​list view toggle, a Connectors page with dynamic integration management, and a Connector detail page with real-time connect/​disconnect functionality",
        "Implemented dynamic routing with Next.js App Router, including static and dynamic routes (/​connectors/​[id]) for scalable page architecture",

        "Collaborated with a cross-functional remote team using Git branching, pull requests, and conflict resolution workflows on GitHub",
        "Built reusable UI components with TypeScript, React, and custom CSS design tokens following a shared design system",
        "Translated Figma designs into pixel-perfect, responsive interfaces maintaining consistency across the product",
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
      name: "Energy Tracker App",
      live: "https://smart-energy-tracker-app.netlify.app/login",
      code: "https://github.com/spr-tech/smart-energy-tracker",
      description: [
        "Built a smart energy consumption tracking application to monitor electricity usage and costs",
        "Implemented CRUD functionality for creating, updating, and deleting energy readings",
        "Integrated external APIs to fetch and manage energy consumption data",
        "Developed interactive dashboards with charts and analytics for tracking usage trends",
        "Added goal-setting, usage alerts, and local storage persistence to help users manage energy consumption effectively",
      ],
    },
    {
      name: "Enter — AI Native IDE",
      live: "https://enter-app-eta.vercel.app/",
      liveIcon: "vercel",
      description: [
        "Built the AI-facing dashboard screens for an AI-native cloud IDE used by developers to ship products faster",
        "Implemented a multi-page dashboard with sidebar navigation, workspace management, and responsive layout across all screen sizes",
        "Developed a real-time AI chat interface with message threading, typing indicators, and auto-scroll behaviour",
        "Built a full project management flow including project creation, GitHub repository import, and multi-step forms",
        "Created a connectors system allowing users to integrate external services like GitHub, Notion, and Stripe via MCP protocol",
      ],
    },
  ];

  return (
    <div className="text-white">
      <h4 className="mb-5 text-2xl font-medium uppercase mt-13">
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
          <ul className="pl-8 list-disc">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h4 className="text-[1.2rem] mt-6">Selected Personal Projects</h4>

      {projects.map((project, index) => (
        <div key={index} className="mb-7 ">
          <div className="flex items-center gap-3 mt-3">
            <p>
              <span className="text-[1rem] font-medium">{project.name}</span>
            </p>
            <div className="flex gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.liveIcon ? (
                    <SiVercel size={20} />
                  ) : (
                    <SiNetlify size={20} />
                  )}
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </div>
          </div>
          <ul className="pl-8 list-disc">
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
