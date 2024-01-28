import { auth, signOut } from "@/auth";

export default async function Settings() {
  const session = await auth();
  return (
    <div>
      <h1>Settings</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
}
