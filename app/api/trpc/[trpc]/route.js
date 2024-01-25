import { appRouter } from "@/trpcServer";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";



const handler = (req) =>
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: () => ({}),
    });

export { handler as GET, handler as POST };