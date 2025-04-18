import { useState } from "react";
import data from '../../data.json';
import { FiEye } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { useModal } from "../context/modalContext";

const skills = ["Todos", "Java", "C", "Typescript", "ReactJs", "NextJS", "MySQL", "Spring"];

export default function WorkComp() {
  const [filtered, setFiltered] = useState<string>("Todos");
  const { openModal } = useModal();

  const filteredProjects = filtered === "Todos"
    ? data
    : data.filter(project =>
        project.languages.includes(filtered)
      );

  return (
    <section id="work" className="w-full min-h-[70vh] max-md:min-h-[100vh] flex flex-col items-center text-center gap-7 max-md:gap-4 relative">
      <h2 className="text-4xl font-extrabold max-md:text-2xl">Trabalho</h2>
      <p className="text-zinc-800 max-md:text-xs">
        Verifique meus trabalhos.<br />
        Se você tiver qualquer pergunta sinta-se livre para perguntar por mais informações.
      </p>

      <div className="w-[65%] max-md:w-[90%] flex items-center justify-between max-md:gap-3 max-md:grid max-md:grid-cols-3">
        {skills.map((skill) => (
          <span
            key={skill}
            onClick={() => setFiltered(skill)}
            className={`px-5 max-md:px-3 py-1 rounded-2xl font-semibold max-md:text-xs cursor-pointer transition-all duration-300 ease-in-out
              ${skill === filtered ? "bg-zinc-900 text-white/90" : "bg-zinc-200 text-zinc-800 hover:bg-zinc-300"}`}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="w-[65%] grid grid-cols-3 gap-10 max-md:w-[90%] max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.index} className="col-span-1 text-start group mb-10 h-[430px] max-md:h-[340px] flex flex-col gap-3">
            <div className="h-[200px] bg-zinc-200 rounded-xl flex items-center justify-center p-2 cursor-pointer"
              onClick={() => openModal(project.index)}>
              <img src={project.images_preview[0]} alt={project.images_preview[0]} className="w-full" />
            </div>

            <span className="font-extrabold text-xl max-md:text-lg">{project.name}</span>

            <div className="flex gap-1 items-center max-md:text-xs">
              {(() => {
                let filteredLanguages = [];

                if (project.languages.length > 3) {
                  for (let i = 0; i < 3; i++) {
                    filteredLanguages.push(project.languages[i]);
                  }
                  filteredLanguages.push(`+${project.languages.length - 3}`);
                } else {
                  filteredLanguages = project.languages;
                }

                return filteredLanguages.map((lan, lanIndex) => (
                  <span key={lanIndex} className="px-2 py-1 bg-zinc-200 rounded-2xl text-sm transition-all duration-300 ease-in-out text-zinc-800 font-semibold">
                    {lan}
                  </span>
                ));
              })()}
            </div>

            <p className="h-[80px] opacity-90 transition-all duration-300 ease-in-out max-md:text-xs">{project.description}</p>

            <div className="flex gap-2 hidden group-hover:flex transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-black text-zinc-100 max-md:text-xs rounded-md hover:opacity-80 cursor-pointer font-semibold transition-opacity duration-300 ease-in-out"
                onClick={() => openModal(project.index)}>
                <FiEye />
                Prévia
              </button>
              <a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 border-[1px] max-md:text-xs border-black hover:border-black/80 hover:text-black/80 rounded-md cursor-pointer font-semibold transition-opacity duration-300 ease-in-out">
                <RiGithubLine />
                Github repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
