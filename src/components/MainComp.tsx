export default function MainComp(){
    return(
        <main className="w-full min-h-[100vh] flex md:justify-center max-md:w-full max-md:flex-col items-center md:p-10 max-md:gap-6 pb-10">
            <img src="/myself.png" alt="Luís Fernando" className="size-132 max-md:size-90" />
            <div className="w-[40%] max-md:w-[90%] max-md:text-center flex flex-col gap-5">
                <h1 className="text-4xl font-extrabold max-md:text-2xl">Oi, Meu nome é Luís e eu sou um <span className="bg-black text-white">Programador Full-Stack</span>.</h1>
                <p className="text-zinc-800 max-md:text-xs">
                    Sou desenvolvedor full-stack de Fortaleza-Ce, com experiência em React, TypeScript, 
                    Java e Spring Boot. Aqui você encontra meus projetos e soluções. Fique à vontade 
                    para explorar! Estou aberto a novas oportunidades e desafios interessantes.
                </p>
                <div className="flex items-center gap-3 max-md:w-full max-md:justify-between">
                    <a href="#contact" className="px-10 py-4 max-md:py-3 max-md:px-4 bg-black text-zinc-100 max-md:text-xs rounded-md hover:opacity-80 cursor-pointer font-semibold max-md:w-[45%]">Contate-me</a>
                    <a href="#work" className="px-10 py-4 max-md:py-3 max-md:px-3 border-[1px] border-black max-md:text-xs hover:border-black/80 hover:text-black/80 rounded-md cursor-pointer font-semibold max-md:w-[45%]">Veja meu trabalho</a>
                </div>
            </div>
        </main>
    )
}