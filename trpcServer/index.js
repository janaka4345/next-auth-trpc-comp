import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
    userList: publicProcedure
        .query(async () => {
            // Retrieve users from a datasource, this is an imaginary database
            // const users = await db.user.findMany();

            // const users: User[]
            return [10, 20, 30];
        }),

    userById: publicProcedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;


            // Retrieve the user with the given ID
            // const user = await db.user.findById(input);

            // const user: User | undefined
            return user;
        }),

    userCreate: publicProcedure
        .input(z.object({ name: z.string() }))
        .mutation(async (opts) => {
            const { input } = opts;


            // Create a new user in the database
            // const user = await db.user.create(input);
            // const user: {
            //     name: string;
            //     id: string;
            // }
            return user;
        }),
});

// export type AppRouter = typeof appRouter;