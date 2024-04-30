export interface User {
  id: string | null;
  name: string | null;
  email: string | null;
  specialization: string | null;
  isLogged: boolean | null;
}

export interface UserActions {
  setUser: (user: User) => void;
}

export type UserStore = User & UserActions;
