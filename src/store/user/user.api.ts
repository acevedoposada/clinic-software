import { apiInstance } from 'api';
import { User } from './user.entity';

export const fetchUserApi = (): Promise<User> =>
  apiInstance.get<User>('/user').then((response) => response.data);
