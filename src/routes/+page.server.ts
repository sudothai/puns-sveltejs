import type { Actions, PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"
import { fail } from "@sveltejs/kit"

export const load: PageServerLoad = async () => {
    return {
        puns: await prisma.pun.findFirst()
    }
}

export const actions: Actions = {
    createPun: async ({ request }) => {
        const { question, answer } = Object.fromEntries(await request.formData()) as {
            question: string
            answer: string
        }
        try {
            await prisma.pun.create({
                data: {
                    question,
                    answer
                }
            }) 
            } catch (err) {
                console.error(err)
                return fail(500, { message: 'Could not create the pun :('})
        }
        return {
            status: 201
        } 
    }
}