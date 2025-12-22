import { Hono } from "hono";
import * as z from "zod";
import { prisma } from "../../../prisma/prisma";
import { PrismaUserRepository } from "../../infrastructure/user.repository";
import { GetUserUseCase } from "../../usecase/user/get-user.usecase";
import { zValidator } from "@hono/zod-validator";
import { GetUserInputSchema, PostUserInputSchema } from "./schema";

const userRepository = new PrismaUserRepository(prisma);
const getUserUseCase = new GetUserUseCase(userRepository);

const app = new Hono()
  .get("/:id", async (c) => {
    // http validation(ドメインのバリデーションはここでは行わない)
    const { id } = GetUserInputSchema.parse(c.req.param);

    const user = await getUserUseCase.execute(id);

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json(user);
  })
  .post("/", async (c) => {
    const { body } = PostUserInputSchema.parse(c.req.parseBody);
  });

export default app;
