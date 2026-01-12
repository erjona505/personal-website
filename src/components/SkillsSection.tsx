const skills = {
  languages: ["HTML5", "CSS3", "JavaScript", "Python", "Java", "C", "Verilog", "SQL"],
  frontend: ["React"],
  backend: ["SQLite"],
  tools: ["Git", "GitHub"],
};

const SkillsSection = () => {
  const allSkills = [
    ...skills.languages,
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Skills & Tools</h2>
        <p className="text-muted-foreground mb-12">Technologies I work with.</p>

        <div className="flex flex-wrap justify-center gap-3">
          {allSkills.map((skill, index) => (
            <span
              key={skill}
              className="highlight-outline text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
