// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import prisma from '@/lib/prisma';

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: PrismaAdapter(prisma),
    page:{
        signIn:'/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default function authHandler(req, res) {
    return NextAuth(req, res, authOptions)
}


