import { GetUsers } from '../../../domain/usecases/GetUsers.js';
import { UserRepositoryMemory } from '../../../infrastructure/repositories/UserRepositoryMemory.js';

const userRepository = new UserRepositoryMemory();
const getUsersUseCase = new GetUsers(userRepository);

export const getUser = (req, res) => {
  const users = getUsersUseCase.execute();
  res.json(users);
};
