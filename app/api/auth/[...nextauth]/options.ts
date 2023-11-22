import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
    providers: [
        GithubProvider({}),
        CredentialsProvider({}),
    ]
}