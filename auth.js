import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./database/mongoClientPromise";
import CredentialProvider from "next-auth/providers/credentials";
import { userModel } from "./models/user-model";
import bcrypt from "bcryptjs";

async function refreshAccessToken(token) {
  try {
    const url =
      `https://oauth2.googleapis.com/token?` +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens?.access_token,
      accessTokenExpires: Date.now() + refreshedTokens?.expires_in * 1000,
      refreshToken: refreshedTokens?.refresh_token,
    };
  } catch (err) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: "Next-commerce",
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (credentials == null) return null;

        try {
          const user = await userModel.findOne({ email: credentials.email });

          if (user) {
            const isMatched = bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatched) {
              return user;
            } else {
              throw new Error("Email or password mismatch");
            }
          } else {
            throw new Error("User is not found");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  // callbacks: {
  //   //returned by Next-auth
  //   async jwt({ token, user, account }) {
  //     console.log(`JWT token : ${JSON.stringify(token)}`);
  //     console.log(`JWT account : ${JSON.stringify(account)}`);
  //     //when loggedin for the first time next auth returns account , user
  //     if (account && user) {
  //       //this value will be stored inside token after first login
  //       return {
  //         user,
  //         accessToken: account?.access_token,
  //         accessTokenExpires: Date.now() + account?.expires_in * 1000,
  //         refreshToken: account?.refresh_token,
  //       };
  //     }

  //     console.log(`Token will expire at ${new Date(token.accessTokenExpires)}`);
  //     //when accesstoken remains
  //     if (Date.now() < token?.accessTokenExpires) {
  //       console.log(`At ${new Date(Date.now())} ,using old access token`);
  //       return token;
  //     }

  //     console.log(`Token expires at ${new Date(Date.now())}`);
  //     //returns provider specific refreshToken if accesstoken expires
  //     return refreshAccessToken(token);
  //   },

  //   //returns to the browser
  //   async session({ session, token }) {
  //     session.user = token?.user;
  //     session.accessToken = token?.accessToken;
  //     session.error = token?.error;
  //     console.log(`Returning session ${JSON.stringify(session)}`);
  //     return session;
  //   },
  // },
});
