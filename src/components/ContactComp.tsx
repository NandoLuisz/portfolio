import { Send, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

import { z } from "zod"
import { type SubmitHandler, useForm } from "react-hook-form"

const emailsendFormSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    content: z.string()
  })
  
type EmailFormFields = z.infer<typeof emailsendFormSchema>

export default function ContactComp(){

    const 
    { register, 
      handleSubmit 
    } = useForm<EmailFormFields>()
  
    const onSubmit: SubmitHandler<EmailFormFields> = async (data) => {
        const result  = emailsendFormSchema.safeParse(data)
        if(!result.success) return toast.error("Preencha todos os campos para o envio do e-mail")
        toast.success('Envio do e-mail com sucesso!')  

    }

    return (
        <footer id="contact" className="w-full min-h-[80vh] flex flex-col items-center gap-6 relative pb-10">
            <div className="w-[50%] max-md:w-[90%] text-center flex flex-col items-center gap-5">
                <h2 className="text-4xl font-extrabold max-md:text-2xl">Contato</h2>
                <p className="text-zinc-800 max-md:text-xs">Me deixe saber se você está interessado nos meus serviços ou colaboração. Eu responderei o mais breve possível</p>
            </div>
            <form 
                className="w-[40%] max-md:w-[90%] text-center flex flex-col items-center gap-5"
                onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register("username")}
                    type="text" 
                    placeholder="Seu Nome" 
                    className="w-full bg-zinc-200 border-[1px] max-md:text-xs border-zinc-400 px-2 py-2 rounded-md outline-none"
                    required />
                <input 
                    {...register("email")}
                    type="email" 
                    placeholder="Seu Email" 
                    className="w-full bg-zinc-200 border-[1px] max-md:text-xs border-zinc-400 px-2 py-2 rounded-md outline-none"
                    required />
                <textarea 
                    {...register("content")}
                    placeholder="Sua mensagem" 
                    required
                    className="w-full h-[300px] max-md:h-[150px] bg-zinc-200 border-[1px] max-md:text-xs border-zinc-400 px-2 py-2 rounded-md outline-none"
                ></textarea>
                <button 
                    type="submit"
                    className="flex items-center gap-2 px-10 py-3  max-md:text-xs bg-black text-zinc-100 rounded-md hover:opacity-80 cursor-pointer font-semibold"
                    >
                    <Send className='size-5'/>   
                    Enviar
                </button>
            </form>
            <div className="flex flex-col items-center gap-6 max-md:gap-4 absolute right-10 bottom-80 max-md:bottom-8 max-md:right-[54px]">
                <span className="bg-black text-white">
                    Vamos conversar
                </span>
                <a href="https://mail.google.com/mail/?view=cm&to=nandoluyz2002sales@gmail.com" className="flex gap-2 items-center font-bold">
                    <span>nandoluyz2002sales@gmail.com</span>
                    <ArrowRight />
                </a>
            </div>
        </footer>
    );
}