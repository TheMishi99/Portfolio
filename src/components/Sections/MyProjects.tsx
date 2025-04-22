import { Project } from "../../typings/my-types";
import ProjectsList from "../ProjectsList";

const projects: Project[] = [
  {
    id: 1,
    title: "Mercado Liebre",
    image: "/projectsScreenshots/MercadoLiebre.png",
    description:
      "This is a fake e-commerce website that i made as final project for course in CoderHouse",
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
    id: 2,
    title: "Mishi-Chat App",
    image: "/projectsScreenshots/MishiChatApp.png",
    description:
      "This is a chat app that I made to learn how to use WebSockets",
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
    title: "Test Mercado Pago App",
    image: "/projectsScreenshots/TestMercadoPagoApp.png",
    description:
      "At this project I implemented the Mercado Pago SDK to test the payments",
    stack: [
      { id: 1, title: "ExpressJS" },
      { id: 2, title: "MongoDB" },
      { id: 3, title: "NodeJS" },
      { id: 4, title: "ReactJS" },
      { id: 5, title: "TypeScript" },
      { id: 6, title: "TailwindCSS" },
    ],
    repositoryLink: "https://github.com/TheMishi99/test-mercado-pago-app",
    deployLink: "https://test-mercado-pago-app.vercel.app/",
  },
];

function MyProjects() {
  return (
    <div
      id="my-projects"
      className="w-full flex flex-col justify-center items-center p-2 gap-2"
    >
      <h2 className="flex justify-center items-center text-3xl border-b-2 border-cyan-400 hover:border-cyan-600 transition-all duration-300">
        <a href="#my-projects">My Projects</a>
      </h2>
      <ProjectsList projects={projects} />
    </div>
  );
}

export default MyProjects;
