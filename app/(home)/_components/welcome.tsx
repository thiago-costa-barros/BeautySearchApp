"use client"

import { ptBR } from "date-fns/locale";
import { format } from "date-fns"
import { useSession } from "next-auth/react";

const Welcome = () => {
  const { data} = useSession();  
  return ( 
        <div>
          {data?.user ? (
            <h2 className="text-xl font-bold">
            Olá, {data.user.name}
          </h2>
          ) : 
          (
        <h2 className="text-xl font-bold">
          Bem-Vindo ao SearchBeauty!
        </h2>
        )}
        <span className="capitalize text-sm">
          {format(new Date(),"EEEE',' dd'",{locale: ptBR})}
        </span>
        <span> de </span>
        <span className="capitalize text-sm">
          {format(new Date(),"MMMM",{locale: ptBR})}
        </span>
      </div>
     );
}
 
export default Welcome;