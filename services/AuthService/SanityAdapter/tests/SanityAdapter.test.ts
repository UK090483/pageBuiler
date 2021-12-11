import Adapter from "../SanityAdapter";
import { mockClient } from "./testPrepare";

const testUser1 = {
  _type: "user",
  emailVerified: new Date(2018, 1, 12, 10, 30),
  _id: "testUser1",
  name: "testName",
  email: "web@konradullrich.com",
};
const testAccount = {
  _type: "account",
  provider: "testProvider",
  providerAccountId: "testProviderAccountId",
  _id: "testAccount_1",
  user: { _ref: "testUser1" },
};

const database: any[] = [testUser1, testAccount];

const testAdapter = () => {
  return Adapter({ client: mockClient({ database }) });
};

describe("Sanity Adapter", () => {
  it("createUser should return user if exist", async () => {
    const user = await testAdapter().createUser({
      ...testUser1,
    });
    expect(user).toStrictEqual({ ...testUser1, id: "user_1" });
  });

  //getUser ------------------------------------------------

  it("getUser should return user if exist", async () => {
    const user = await testAdapter().getUser("testUser1");
    expect(user).toStrictEqual(testUser1);
  });
  it("getUser should return null if not exist", async () => {
    const user = await testAdapter().getUser("testUser-null");
    expect(user).toStrictEqual(null);
  });

  //getUserByEmail ------------------------------------------------

  it("getUserByEmail should return user if exist", async () => {
    const user = await testAdapter().getUserByEmail("web@konradullrich.com");
    expect(user).toStrictEqual(testUser1);
  });
  it("getUserByEmail should return null if not exist", async () => {
    const user = await testAdapter().getUserByEmail("test@konradullrich.com");
    expect(user).toStrictEqual(null);
  });

  //getUserByAccount  ------------------------------------------------
  it("getUserByEmail should return user if exist", async () => {
    const user = await testAdapter().getUserByAccount({
      provider: "testProvider",
      providerAccountId: "testProviderAccountId",
    });
    expect(user).toStrictEqual(testUser1);
  });

  // updateUser ------------------------------------------------

  it("getUserByEmail should return user if exist", async () => {
    const updated = { ...testUser1, name: "updatedName" };
    const updatedUser = await testAdapter().updateUser(updated);
    expect(updatedUser).toStrictEqual(updated);

    console.log(database);
    const updatedUser2 = await testAdapter().getUserByEmail(testUser1.email);
    expect(updatedUser2).toStrictEqual(updated);
  });
});

export {};
