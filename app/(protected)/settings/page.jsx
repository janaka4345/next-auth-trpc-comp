import { auth } from "@/auth";

export default async function Settings() {
  const session = await auth();
  console.log("hi");
  return (
    <div>
      <h1>Settings</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
