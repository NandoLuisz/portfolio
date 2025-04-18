import { useModal } from "./context/modalContext";
import { useState } from "react";
import Main from "./components/MainComp";
import Header from "./components/HeaderComp";
import Work from "./components/WorkComp";
import Resume from "./components/ResumeComp";
import Footer from "./components/ContactComp";
import { SectionWrapper } from "./utils/SectionWrapper";
import { Toaster } from "sonner";
import { Github, Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';


export function App() {

  const { isModalOpen, closeModal, isModalOpenLinks, closeModalLinks, imagesPreview } = useModal();
  const [index, setIndex] = useState<number>(0);

  const backImage = () => index > 0 && setIndex(index - 1);
  const advanceImage = () => index < imagesPreview.length - 1 && setIndex(index + 1);

  return (
    <>
      <Toaster richColors />
      <div className="w-full min-h-screen font-nunito-sans relative">
        {isModalOpenLinks && (
          <div className="w-full h-screen flex items-center justify-center bg-black/70 fixed z-50" onClick={closeModalLinks}>
            <div className="w-[60%] flex flex-col justify-between h-screen bg-white absolute right-0 p-10">
              <ul className="flex flex-col items-start gap-5">
                <li className="font-semibold cursor-pointer
                                after:content-[''] 
                                after:block  
                                after:w-0 
                                after:h-[1px] 
                                after:bg-black
                                hover:after:w-full
                                after:transition-all after:duration-300 after:ease-in-out">
                                    <a href="#work">Trabalho</a>
                </li>
                <li className="font-semibold cursor-pointer
                                after:content-[''] 
                                after:block  
                                after:w-0 
                                after:h-[1px] 
                                after:bg-black
                                hover:after:w-full
                                after:transition-all after:duration-300 after:ease-in-out">
                                    <a href="#resume">Resumo</a>
                </li>
                <li className="font-semibold cursor-pointer
                                after:content-[''] 
                                after:block  
                                after:w-0 
                                after:h-[1px] 
                                after:bg-black
                                hover:after:w-full
                                after:transition-all after:duration-300 after:ease-in-out">
                                    <a href="#contact">Contato</a>
                </li>
              </ul>
                <div className="flex gap-10">
                  <div className="flex gap-2 items-center">
                      <span className="font-bold text-sm">PT</span>
                      <div className="h-[50%] w-[1px] bg-zinc-900"></div>
                      <span className="font-semibold text-sm">BR</span>
                  </div>
                  <div className="flex gap-4 items-center w-[70px]">
                      <a href="https://www.linkedin.com/in/luis-fernando-soares-487812272/" target="_blank"><Linkedin className="size-5"/></a>
                      <a href="https://github.com/NandoLuisz?tab=repositories" target="_blank"><Github className="size-5"/></a>
                  </div>
                </div>
            </div>
          </div>
        )}
        {isModalOpen && (
          <div 
            className="w-full h-screen flex items-center justify-center bg-black/70 fixed z-50"
            onClick={() => [closeModal(), setIndex(0)]}
          >
            <div className="w-[80%] relative" onClick={(e) => e.stopPropagation()}>
              <ArrowLeft 
                className={`absolute size-10 top-[43%] -ml-5 rounded-full p-2 text-white 
                            ${index === 0 ? "bg-zinc-600 cursor-not-allowed" : "bg-zinc-900 hover:bg-zinc-600 cursor-pointer"}`}
                onClick={backImage}
              />
              <img src={imagesPreview[index]} alt={`image ${index + 1}`} className="w-full h-[600px] max-md:h-[400px] z-10 rounded-md" />
              <ArrowRight 
                className={`absolute size-10 top-[43%] right-0 -mr-5 rounded-full p-2 text-white 
                            ${index === imagesPreview.length - 1 ? "bg-zinc-600 cursor-not-allowed" : "bg-zinc-900 hover:bg-zinc-600 cursor-pointer"}`}
                onClick={advanceImage}
              />
            </div>
          </div>
        )}
        <Header />
        <Main />
        <SectionWrapper>
          <Work />
        </SectionWrapper>
        <SectionWrapper>
          <Resume />
        </SectionWrapper>
        <SectionWrapper>
          <Footer />
        </SectionWrapper>
      </div>
    </>
  );
}
