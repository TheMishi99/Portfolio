import BrandsIcons from "../utils/BrandsIcons";
import { Project } from "../typings/my-types";
import { Github, Link } from "lucide-react";

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2">
      {projects.map((project) => {
        return (
          <li
            key={project.id + project.title}
            className="flex flex-col justify-between items-center p-2 gap-2 border-2 border-cyan-400 bg-cyan-500/30 rounded-xl"
          >
            <div
              id="project-img"
              className="w-full flex justify-center items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl"
              />
            </div>
            <div
              id="project-info"
              className="w-full flex flex-col justify-center items-center p-2 gap-2"
            >
              <p className="w-full text-center text-xl">{project.title}</p>
              <p className="w-full text-lg">{project.description}</p>
              <p className="w-full text-lg">Stack:</p>
              <ul id="project-stack" className="w-full flex p-2 gap-2">
                {project.stack.map((tech) => {
                  return (
                    <li
                      key={tech.id + tech.title}
                      className="flex-1 flex justify-center items-center text-center"
                    >
                      {BrandsIcons[tech.title]}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              id="project-links"
              className="w-full flex flex-col sm:flex-row justify-center items-center p-2 gap-2"
            >
              <a
                href={project.repositoryLink}
                target="_blank"
                className="flex justify-center items-center bg-black p-2 gap-2 rounded-xl hover:bg-zinc-800 border-2 border-cyan-400"
              >
                <Github color="white" /> Github Repository
              </a>
              <a
                href={project.deployLink}
                target="_blank"
                className="flex justify-center items-center bg-cyan-700 p-2 gap-2 rounded-xl hover:bg-cyan-600 border-2 border-cyan-400"
              >
                <Link color="white" />
                Deployment Link
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
