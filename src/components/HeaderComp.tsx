import { useModal } from "../context/modalContext";
import { Github, Linkedin } from 'lucide-react';

export default function HeaderComp(){

    const { openModalLinks } = useModal();
    return(
        <header className="w-full h-[10vh] p-5 flex items-center justify-between">
            <h1 className="font-extrabold text-2xl">NFL's</h1>
            <ul className="flex items-cente gap-10 max-md:hidden">
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
            <div className="flex gap-10 max-md:hidden">
                <div className="flex gap-2 items-center">
                    <span className="font-bold">PT</span>
                    <div className="h-[50%] w-[1px] bg-zinc-900"></div>
                    <span className="font-semibold">BR</span>
                </div>
                <div className="flex gap-4 items-center w-[65px] justify-between">
                    <a href="https://www.linkedin.com/in/luis-fernando-soares-487812272/" target="_blank"><Linkedin className="size-6 hover:size-7"/></a>
                    <a href="https://github.com/NandoLuisz?tab=repositories" target="_blank"><Github className="size-5 hover:size-6"/></a>
                </div>
            </div>
            <img src="/icon-hamburger.svg" alt="Links" className="size-4 md:hidden max-md:block" onClick={openModalLinks}/>
        </header>
    )
}