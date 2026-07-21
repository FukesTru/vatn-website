import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { notifyOwner } from "./_core/notification";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          organization: z.string().optional().default(""),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional().default(""),
          message: z.string().optional().default(""),
        })
      )
      .mutation(async ({ input }) => {
        const lines: string[] = [
          `Name: ${input.name}`,
          `Organization / Facility: ${input.organization || "(not provided)"}`,
          `Email: ${input.email}`,
          `Phone: ${input.phone || "(not provided)"}`,
          `Message:\n${input.message || "(no message)"}`,
        ];
        const content = lines.join("\n\n");
        const delivered = await notifyOwner({
          title: `New VATN Inquiry from ${input.name}`,
          content,
        });
        return { success: true, delivered };
      }),
  }),
});

export type AppRouter = typeof appRouter;
