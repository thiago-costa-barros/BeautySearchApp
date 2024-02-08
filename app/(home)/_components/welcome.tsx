import { ptBR } from "date-fns/locale";
import { format } from "date-fns"

const Welcome = () => {
    return ( 
        <div>
        <h2 className="text-xl font-bold">
          Olá, Thiago!
        </h2>
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