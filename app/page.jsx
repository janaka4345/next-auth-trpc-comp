import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto w-fit mt-52">
      <h1>Home page</h1>
      <Link href="./api/auth/newUser">
        <Button>Create Account</Button>
      </Link>
      <Link href="./api/auth/signin">
        <Button>Sign In</Button>
      </Link>
      <Link href="./api/auth/signout">
        <Button>Sign Out</Button>
      </Link>

      {/* <LoginComponent>
        <Button>Sign In</Button>
      </LoginComponent> */}
    </div>
  );
}
