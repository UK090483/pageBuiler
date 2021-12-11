import { Profile, Session } from "next-auth";

import type { SanityClient } from "@sanity/client";
import {
  Adapter,
  AdapterUser,
  VerificationToken,
  AdapterSession,
} from "next-auth/adapters";
import {
  getUserByEmailQuery,
  getUserByIdQuery,
  getUserByProviderAccountIdQuery,
} from "./queries";

let globToken: VerificationToken | null = null;
let session: AdapterSession | null = null;

const user: AdapterUser = {
  emailVerified: new Date(2018, 1, 12, 10, 30),
  id: "user1",
  email: "web@konradullrich.com",
};

// const createVerificationToken: Adapter["createVerificationToken"] = async (
//   verificationToken
// ) => {
//   globToken = { ...verificationToken };
//   return globToken;
// };

// const useVerificationToken: Adapter["useVerificationToken"] = async (
//   params
// ) => {
//   const _token = { ...globToken } as VerificationToken;

//   // console.log("globToken:" + _token);

//   globToken = null;

//   return _token;
// };

// //@ts-ignore
// const getSessionAndUser: Adapter["getSessionAndUser"] = (sessionToken) => {
//   console.log("getSessionAndUser ----");
//   console.log(sessionToken);
//   console.log("getSessionAndUser ----");
//   return { user, session };
// };

// const deleteSession: Adapter["deleteSession"] = (sessionToken) => {
//   console.log("deleteSession ----");
//   console.log(sessionToken);
//   console.log("deleteSession ----");

//   const oldSess = { ...session } as AdapterSession;
//   session = null;

//   return new Promise<null | AdapterSession>((resolve, reject) => {
//     resolve(oldSess);
//   });
// };

type sanityAdapterProps = {
  client: SanityClient;
};

const handleIds = () => {};

const sanityAdapter = ({ client }: sanityAdapterProps) => {
  const adapter: Adapter = {
    createUser: (user) => {
      return new Promise<AdapterUser>((resolve, reject) => {
        client
          .create({
            ...user,
            _type: "user",
          })
          .then((newUser) => {
            const _user = { ...user, id: newUser._id } as AdapterUser;
            resolve(_user);
          });
      });
    },

    getUser: (id) => {
      return client.fetch<AdapterUser>(getUserByIdQuery, { id });
    },
    getUserByEmail: (email) => {
      return client.fetch<AdapterUser>(getUserByEmailQuery, { email });
    },

    getUserByAccount: ({ providerAccountId, provider }) => {
      return client.fetch<AdapterUser>(getUserByProviderAccountIdQuery, {
        providerAccountId,
        provider,
      });
    },
    updateUser: (_user) => {
      console.log("updateUse ----");
      console.log(_user);
      console.log("updateUse ----");
      if (!_user?.id) return _user;
      return client.patch(_user.id).set(_user).commit();
    },

    deleteSession: (sessionToken) => {
      return null;
    },
    updateSession: (session) => {
      return null;
    },
    deleteUser: () => {
      return null;
    },
    unlinkAccount: () => {
      return undefined;
    },
    createVerificationToken: (verificationToken) => {
      globToken = { ...verificationToken };
      return globToken;
    },

    createSession: (_session) => {
      console.log("createSession ----");
      console.log(_session);
      console.log("createSession ----");

      const sess: AdapterSession = {
        ..._session,
        id: "what ever",
      };
      session = sess;
      return sess;
    },

    linkAccount: (account) => {
      console.info("linkAccount");
      return null;
    },
  };

  return adapter;
};

export default sanityAdapter;
