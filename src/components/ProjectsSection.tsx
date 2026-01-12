import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "ShelfSwap",
    description: "A book-selling platform that integrates the Google Books API to streamline the process of listing, browsing, and selling books.",
    tags: ["HTML/CSS", "JavaScript", "Python" , "SQLite", "Figma"],
    github: "https://github.com/erjona505/ShelfSwap",
    live: "https://devpost.com/software/shelfswap",
  },
  {
    title: "Bizzy Bee",
    description: "A student–business matching platform with a swipe-based interface and a Gemini AI–powered chatbot.",
    tags: ["React", "Python", "SQLite" , "HTML/CSS", "JavaScript"],
    github: "https://github.com/erjona505/BizzyBee",
    live: "https://dorahacks.io/buidl/22869",
  },
  {
    title: "Listo",
    description: "A C-based command-line tool for creating and managing personalized music playlists.",
    tags: ["C", "Bash", "Git"],
    github: "https://github.com",
  }
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12">A few hackathon & personal projects.</p>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg border border-border hover:border-primary hover:bg-secondary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-mono font-bold text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="social-icon opacity-0 group-hover:opacity-100 transition-opacity">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="social-icon opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:ml-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-secondary rounded text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
