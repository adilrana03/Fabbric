import type { NextAuthOptions, User } from "next-auth";
import type { DecodedJWT, JWT, RefreshedToken, Token } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import jwtDecode from "jwt-decode";


async function refreshAccessToken(token: JWT): Promise<JWT | null> {
    try {
      const res = await fetch(
        `${process.env.DJANGO_AUTH_BASE_URL}/api/v1/auth/token/refresh/`,
        {
          method: "POST",
          body: JSON.stringify({ refresh: token.refresh }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const refreshedToken: RefreshedToken = await res.json();
  
      if (res.status !== 200) throw refreshedToken;
  
      const { exp }: DecodedJWT = jwtDecode(refreshedToken.access);
  
      return {
        ...token,
        ...refreshedToken,
        exp,
      };
    } catch (error) {
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    }
}

export const options: NextAuthOptions = {
    pages: {
        signIn: '/login',
        newUser: '/register',
    },
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "Django Rest Framework",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, email, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                label: "Email",
                type: "email",
                placeholder: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                try {
                const res = await fetch(
                    `${process.env.DJANGO_AUTH_BASE_URL}/api/v1/auth/signin/`,
                    {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                    }
                );
                const token: Token = await res.json();
        
                if (res.status !== 200) throw token;
        
                const {
                    email,
                    UUID,
                    exp,
                    first_name,
                    last_name,
                }: DecodedJWT = jwtDecode(token.access);
        
                return {
                    ...token,
                    exp,
                    user: {
                        UUID,
                        email,
                        first_name,
                        last_name,
                    },
                } as User;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
          return url.startsWith(baseUrl)
            ? Promise.resolve(url)
            : Promise.resolve(baseUrl);
        },
        async jwt({ token, user, account }) {
          // initial signin
          if (user && account) {
            return user as JWT;
          }
    
          // Return previous token if the access token has not expired
          if (Date.now() < token.exp * 100) {
            return token;
          }
    
          // refresh token
          return (await refreshAccessToken(token)) as JWT;
        },
        async session({ session, token }) {
          session.access = token.access;
          session.exp = token.exp;
          session.refresh = token.refresh;
          session.user = token.user;
          return session;
        },
    },
    secret: process.env.NEXT_PUBLIC_SECRET,
    jwt: {
        secret: process.env.NEXT_PUBLIC_SECRET,
    }

};