import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const puns = await prisma.puns.findFirst();

        return new Response(
            JSON.stringify({
                puns
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
    catch (e) {
        return new Response(
            JSON.stringify({
                message: "Something went wrong while trying to fetch puns",
                error: e
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
}
