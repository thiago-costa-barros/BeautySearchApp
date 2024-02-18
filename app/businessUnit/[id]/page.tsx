import { db } from "@/app/_lib/prisma";
import BusinessUnitInfos from "./_components/businessUnitInfos";
import ServiceItem from "./_components/serviceItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BusinessUnitDetailsPageProps {
    params: {
        id?: string;
    };
}

const BusinessUnitDetailsPage = async ({ params }: BusinessUnitDetailsPageProps) => {

    const session = await getServerSession(authOptions)

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
                    <ServiceItem key={service.id} businessUnit={businessUnit} service={service} isAuthenticated={!!session?.user} />
                ))}
            </div>
        </div>
    );
}

export default BusinessUnitDetailsPage;
