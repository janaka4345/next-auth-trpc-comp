import { auth } from "@/auth";

export default function Settings() {
  const session = auth();
  return (
    <div>
      <h1>Settings</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
