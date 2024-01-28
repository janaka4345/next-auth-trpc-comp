"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { trpc } from "@/trpcClient/client";
import { useSession } from "next-auth/react";
export default function Home() {
  const data = trpc.userList.useQuery();
  const session = useSession();

  return (
    <div className="mx-auto w-fit mt-52">
      <h1>sup</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h1>Home page</h1>
      <Link href="./api/auth/auth2/createaccount">
        <Button>Create Account</Button>
      </Link>
      <Link href="./api/auth/signin">
        <Button>Sign In</Button>
      </Link>
      <Link href="./api/auth/signout">
        <Button>Sign Out</Button>
      </Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* <Button onClick={handleClick}>click me</Button> */}
      {/* <LoginComponent>
      </LoginComponent> */}
    </div>
  );
}
