import { ptBR } from "date-fns/locale";
import { format } from "date-fns"

const Welcome = () => {
    return ( 
        <div className="p-4">
        <h2 className="text-xl font-bold">
          Olá, Thiago!
        </h2>
        <p className="capitalize text-sm">
          {
            format
              (
                new Date(),
                "EEEE',' dd' de 'MMMM",
                {
                  locale: ptBR
                }
              )
          }
        </p>
      </div>
     );
}
 
export default Welcome;