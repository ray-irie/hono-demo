import type { User } from '../domain/user';

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
}
