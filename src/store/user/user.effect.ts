import { fetchUserApi } from './user.api';
import { User } from './user.entity';

export const fetchUser = async (): Promise<User> => {
  try {
    const user = await fetchUserApi();
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};
