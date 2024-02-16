import { db } from "@/app/_lib/prisma";
import BusinessUnitInfos from "./_components/businessUnit_infos";
import ServiceItem from "./_components/service_item";

interface BusinessUnitDetailsPageProps {
    params: {
        id?: string;
    };
}

const BusinessUnitDetailsPage = async ({ params }: BusinessUnitDetailsPageProps) => {
    if (!params.id) {
        // Redirecionar para a página inicial ou mostrar uma mensagem de erro
        return null;
    }

    const businessUnitId = parseInt(params.id, 10);
    const businessUnit = await db.businessUnit.findUnique({
        where: {
            id: businessUnitId
        },
        include: {
            service: true,
        }
    });

    if (!businessUnit) {
        console.error("Unidade de negócio não encontrada");
        return null;
    }

    return (
        <div>
            <BusinessUnitInfos businessUnit={businessUnit} />
            
            <div className="px-5 py-6 flex flex-col gap-4">
                {businessUnit.service.map(service => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default BusinessUnitDetailsPage;
