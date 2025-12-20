import type { IUserRepository } from '../repository/userRepository';
import type { User } from '../domain/user';

export class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
