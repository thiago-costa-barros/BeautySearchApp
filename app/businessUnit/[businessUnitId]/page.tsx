import { db } from "@/app/_lib/prisma";

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
    });

    if (!businessUnit) {
        console.error("Unidade de negócio não encontrada");
        return null;
    }

    return (
        <>
            <h1>{businessUnit.Name}</h1>
            <p>ID: {businessUnit.BusinessUnitId}</p>
        </>
    );
}

export default BusinessUnitDetailsPage;
