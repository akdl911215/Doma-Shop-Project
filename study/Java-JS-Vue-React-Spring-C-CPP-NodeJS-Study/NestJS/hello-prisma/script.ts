import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Bob',
    //         email: 'bob@prisma.io',
    //         posts: {
    //             create: {
    //                 title: 'Hello World',
    //             }
    //         }
    //     }
    // })
    // console.log(user)

    const userWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        }
    })
    // console.log(users)
    console.dir(userWithPosts, { depth: null})
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })