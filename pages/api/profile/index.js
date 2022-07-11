import prisma from "@/lib/prisma";
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
    const { method } = req;

        if(method!="GET"){
            res.status(404).json({message:`${method} not available.`})
        }
            const session = await getSession({ req })
            if (!session) {
                res.status(403).json({ message: `You are not allowed here bro.` });
            }
            const user = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            })
            const profile = await prisma.profile.findUnique({
      
                where: {
                    userId: user.id
                },
                select: {
                    id:true,
                    profileName:true,
                    user: {
                        select:{
                            email:true,
                            image:true,
                            createdAt:true,
                            updatedAt:true
                        }
                    }
                }
            })
            if (profile.length == 0 && user) {
                const newProfile = await prisma.profile.create({
                    data: {
                        userId: user.id,
                        profileName: user.name
                    }
                })
                res.status(200).json(newProfile);
            }
            res.status(200).json(profile);
            
    
}