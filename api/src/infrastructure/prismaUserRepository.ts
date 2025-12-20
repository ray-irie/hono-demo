import { PrismaClient } from "../../generated/prisma/client";
import type { IUserRepository } from '../repository/userRepository';
import type { User } from '../domain/user';

export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: number): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true }
    });
  }
}
