import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card"
import { ptBR } from "date-fns/locale";
import { format } from "date-fns"

const BookingItem = () => {
    return (
        <Card className="flex items-center justify-between">
            <CardContent className="p-5" >
                <div className="flex flex-col gap-2">
                    <Badge className="bg-slate-800 text-slate-300 hover:bg-slate-800 w-fit">
                        Confirmado
                    </Badge>
                    <h2 className="font-bold">
                        Nome do Serviço
                    </h2>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm">
                            Unidade de Negócio
                        </h3>
                    </div>
                </div>
            </CardContent>
            <CardContent className="p-5">
                <div className="p-5 flex flex-col items-center justify-center px-3 border-l-2 border-solid ">
                    <p className="text-sm font-semibold">
                        Outubro
                    </p>
                    <p className="text-2xl font-bold">
                        13
                    </p>
                    <p className="text-sm font-semibold">
                        11:30
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

export default BookingItem;