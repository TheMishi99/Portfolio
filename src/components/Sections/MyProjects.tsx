import { useTranslation } from "react-i18next";
import { Project } from "../../typings/my-types";
import ProjectsList from "../ProjectsList";

function MyProjects() {
  const { t } = useTranslation("");
  const projects: Project[] = [
    {
      id: 1,
      title: "Mishiflix",
      image: "/projectsScreenshots/Mishiflix.png",
      description: t("projects.items.mishiflix.description"),
      stack: [
        { id: 1, title: "NodeJS" },
        { id: 2, title: "MongoDB" },
        { id: 3, title: "NextJS" },
        { id: 4, title: "ReactJS" },
        { id: 5, title: "TypeScript" },
        { id: 6, title: "TailwindCSS" },
      ],
      repositoryLink: "https://github.com/TheMishi99/Mishiflix",
      deployLink: "https://mishiflix.vercel.app/",
    },

    {
      id: 2,
      title: "Mishi Chat",
      image: "/projectsScreenshots/Mishi-Chat.png",
      description: t("projects.items.mishi_chat.description"),
      stack: [
        { id: 1, title: "ExpressJS" },
        { id: 2, title: "MongoDB" },
        { id: 3, title: "NodeJS" },
        { id: 4, title: "ReactJS" },
        { id: 5, title: "TypeScript" },
        { id: 6, title: "TailwindCSS" },
      ],
      repositoryLink: "https://github.com/TheMishi99/Mishi-Chat",
      deployLink: "https://mishi-chat.vercel.app/",
    },
    {
      id: 3,
      title: "Mercado Liebre",
      image: "/projectsScreenshots/Mercado-Liebre.png",
      description: t("projects.items.mercado_liebre.description"),
      stack: [
        { id: 1, title: "ExpressJS" },
        { id: 2, title: "NodeJS" },
        { id: 3, title: "SequelizeJS" },
        { id: 3, title: "PostgresSQL" },
        { id: 4, title: "ReactJS" },
        { id: 5, title: "TypeScript" },
        { id: 6, title: "TailwindCSS" },
      ],
      repositoryLink: "https://github.com/TheMishi99/Mercado-Liebre",
      deployLink: "https://mercado-liebre-flame.vercel.app/",
    },
    {
      id: 4,
      title: "E Cat",
      image: "/projectsScreenshots/E-Cat.png",
      description: t("projects.items.e_cat.description"),
      stack: [
        { id: 1, title: "ExpressJS" },
        { id: 2, title: "MongoDB" },
        { id: 3, title: "NodeJS" },
        { id: 4, title: "ReactJS" },
        { id: 5, title: "TypeScript" },
        { id: 6, title: "TailwindCSS" },
      ],
      repositoryLink: "https://github.com/TheMishi99/E-Cat",
      deployLink: "https://e-cat.vercel.app/",
    },
  ];

  return (
    <div
      id="my-projects"
      className="w-full flex flex-col justify-center items-center p-2 gap-2"
    >
      <h2 className="flex justify-center items-center text-3xl border-b-2 border-cyan-400 hover:border-cyan-600 transition-colors">
        {t("projects.title")}
      </h2>
      <ProjectsList projects={projects} />
    </div>
  );
}

export default MyProjects;
