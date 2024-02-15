import { db } from "@/app/_lib/prisma";
import BusinessUnitInfos from "./_components/businessUnit_infos";
import ServiceItem from "./_components/service_item";

interface BusinessUnitDetailsPageProps {
    params: {
        businessUnitId?: string;
    };
}

const BusinessUnitDetailsPage = async ({ params }: BusinessUnitDetailsPageProps) => {
    if (!params.businessUnitId) {
        // Redirecionar para a página inicial ou mostrar uma mensagem de erro
        return null;
    }

    const businessUnitId = parseInt(params.businessUnitId, 10);
    const businessUnit = await db.businessUnit.findUnique({
        where: {
            BusinessUnitId: businessUnitId
        },
        include: {
            Service: true,
        }
    });

    if (!businessUnit) {
        console.error("Unidade de negócio não encontrada");
        return null;
    }

    return (
        <div>
            <BusinessUnitInfos businessUnit={businessUnit} />
            
            <div className="px-5 flex flex-col gap-3">
                {businessUnit.Service.map(service => (
                    <ServiceItem key={service.ServiceId} service={service} />
                ))}
            </div>
        </div>
    );
}

export default BusinessUnitDetailsPage;
