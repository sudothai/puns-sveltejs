import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
    return {
        puns: await prisma.pun.findUnique({
            where: {
                id: 1,
            }
        })
        // puns: await prisma.$queryRaw`SELECT * FROM "Pun" ORDER BY random() LIMIT 1;`
    }

}