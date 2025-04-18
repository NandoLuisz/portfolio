import { Download } from 'lucide-react';

const PDF_FILE_URL = "http://localhost:5173/Currículo.pdf"

export default function Resume(){
    
    function downloadFile(){

        const filename = PDF_FILE_URL.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = PDF_FILE_URL
        if(!filename) return
        aTag.setAttribute('download', filename)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return(
        <section id="resume" className="w-full min-h-[100vh] flex flex-col items-center gap-10 text-center pb-10">
            <div className="w-[50%] max-md:w-[90%]">
                <h2 className="text-4xl font-extrabold max-md:text-2xl">Resumo</h2>
                <p className="text-zinc-800 max-md:text-xs">   
                    Comecei minha carreira como programador há 2 anos, enquanto cursava 
                    Engenharia de Computação. Desde então, venho aprimorando minhas 
                    habilidades como desenvolvedor full-stack.
                </p>
            </div>
            <h3 className="bg-black text-white text-xl max-md:text-lg font-semibold">Educação</h3>
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col">
                    <span className="font-extrabold max-md:text-sm">Desenvolvimento Web</span>
                    <span className="font-bold text-zinc-700 max-md:text-sm">Udemy</span>
                    <span className="text-zinc-600 max-md:text-sm">50h</span>
                </div>
                <div className="w-full flex flex-col">
                    <span className="font-extrabold max-md:text-sm">Minicurso Java</span>
                    <span className="font-bold text-zinc-700 max-md:text-sm">Rocketseat</span>
                    <span className="text-zinc-600 max-md:text-sm">5h</span>
                </div>
                <div className="w-full flex flex-col">
                    <span className="font-extrabold max-md:text-sm">Curso de inglês</span>
                    <span className="font-bold text-zinc-700 max-md:text-sm">Casa de Cultura Britânica</span>
                    <span className="text-zinc-600 max-md:text-sm">(em endamento)</span>
                </div>
            </div>
            <h3 className="bg-black text-white text-xl max-md:text-lg font-semibold">Experiência de trabalho</h3>
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col">
                    <span className="font-extrabold max-md:text-sm">Recruta da Marinha do Brasil</span>
                    <span className="font-bold text-zinc-700 max-md:text-sm">Serviço Obrigatório Militar</span>
                    <span className="text-zinc-600 max-md:text-sm">1 ano(2021 - 2022)</span>
                </div>
                <div className="w-full flex flex-col">
                    <span className="font-extrabold max-md:text-sm">Suporte de T.I.</span>
                    <span className="font-bold text-zinc-700 max-md:text-sm">Reitoria do IFCE</span>
                    <span className="text-zinc-600 max-md:text-sm">1 mês</span>
                </div>
            </div>
            <h3 className="bg-black text-white text-xl max-md:text-lg font-semibold">Habilidades e Ferramentas</h3>
            <div className="w-[50%] max-md:w-[80%] flex justify-between">
                <div className="flex flex-col text-start gap-2 max-md:text-sm">
                    <span className="text-zinc-800 hover:text-black">Java</span>
                    <span className="text-zinc-800 hover:text-black">Spring Boot</span>
                    <span className="text-zinc-800 hover:text-black">Spring Data</span>
                    <span className="text-zinc-800 hover:text-black">Rest APIs</span>
                    <span className="text-zinc-800 hover:text-black">Hibernate</span>
                    <span className="text-zinc-800 hover:text-black">MySQL</span>
                    <span className="text-zinc-800 hover:text-black">C</span>
                </div>
                <div className="flex flex-col text-start gap-2 max-md:text-sm">
                    <span className="text-zinc-800 hover:text-black">HTML&CSS</span>
                    <span className="text-zinc-800 hover:text-black">Tavascript</span>
                    <span className="text-zinc-800 hover:text-black">ReactJS</span>
                    <span className="text-zinc-800 hover:text-black">NextJS</span>
                </div>
                <div className="flex flex-col text-start gap-2 max-md:text-sm">
                    <span className="text-zinc-800 hover:text-black">AWS S3</span>
                    <span className="text-zinc-800 hover:text-black">JUnit</span>
                    <span className="text-zinc-800 hover:text-black">Git</span>
                    <span className="text-zinc-800 hover:text-black">Maven</span>
                    <span className="text-zinc-800 hover:text-black">Docker</span>
                    <span className="text-zinc-800 hover:text-black">IntelliJ IDEA</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="font-semibold text-zinc-800 max-md:text-base">Baixe o meu currículo em PDF</span>
                <button 
                    className="flex items-center justify-center gap-4 px-5 py-2 max-md:text-base bg-black text-white/80 
                               rounded-md hover:opacity-80 cursor-pointer hover:text-white"
                    onClick={() => downloadFile()}>
                    <Download />
                    Download (27,5 KB)
                </button>
            </div>
        </section>
    )
}