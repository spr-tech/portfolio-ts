const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React", "Bootstrap", "Tailwind", "Next.js", "Vite"],
    },
    {
      title: "Software & Tools",
      items: ["Jira", "GitHub"],
    },
    {
      title: "Methodologies",
      items: ["Code Review", "Remote Collaboration"],
    },
    {
      title: "Operating Systems",
      items: ["Mac/iOS", "Windows"],
    },
  ];

  const softSkillsData = [
    {
      title: "Leadership & Mentorship",
      items: [
        "Conflict Resolution",
        "Code Review",
        "Training and Development",
        "Mentoring",
      ],
    },
    {
      title: "Execution & Strategy",
      items: [
        "Practical Problem Solving",
        "Prioritization",
        "Iterative Development",
        "User-Focused Thinking",
        "Resourcefulness",
      ],
    },
    {
      title: "Adaptability",
      items: [
        "Flexibility",
        "Growth Mindset",
        "User-Focused Thinking",
        "Remote Team Collaboration",
      ],
    },
  ];

  return (
    <div className="text-white">
      <section className="">
        <h4 className="mb-5 text-2xl font-medium uppercase mt-13">
          Technical Skills
        </h4>
        <hr className="border-[#444] my-4" />

        {skillsData.map((skill, index) => (
          <div key={index}>
            <h5 className="text-[1.1rem] font-medium mt-5">{skill.title}</h5>
            <div className="flex gap-3 ">
              {skill.items.map((item, i) => (
                <span className="bg-[#1f2937] p-1 rounded-sm mt-1 " key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h4 className="mb-5 text-2xl font-medium uppercase mt-13">
          Soft Skills
        </h4>
        <hr className="border-[#444] my-4" />

        {softSkillsData.map((skill, index) => (
          <div className="other-skill-wrapper-outer" key={index}>
            <h5 className="text-[1.1rem] font-medium mt-5">{skill.title}</h5>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span className="bg-[#1f2937] p-1 rounded-sm mt-1" key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;

      