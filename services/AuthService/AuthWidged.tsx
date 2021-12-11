import { useSession, signIn, signOut } from "next-auth/react";

type UserWidgetProps = {};

const UserWidget: React.FC<UserWidgetProps> = () => {
  const s = useSession();

  const { data: session } = s;

  if (session) {
    return (
      <div>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default UserWidget;
