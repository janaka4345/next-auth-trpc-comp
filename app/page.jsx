"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "@/trpcClient/client";
export default function Home() {
  const data = trpc.userList.useQuery();
  return (
    <div className="mx-auto w-fit mt-52">
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
