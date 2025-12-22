import { UserEntity } from "../../../domain/user/entity/user.entity";

export type UserDTO = {
  id: number;
  name: string;
  email: string;
};