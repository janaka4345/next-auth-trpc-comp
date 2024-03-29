import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/trpcClient/Provider";
import SessionProvider from "@/components/SessionProvider";
import { auth } from "@/auth";
// import { getServerSession } from "next-auth"; // next - auth v4

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // const session = await getServerSession();
  const session = await auth();
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-green-400")}>
        <SessionProvider session={session}>
          <Provider>{children}</Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
