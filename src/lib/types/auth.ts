export interface Credentials {
  email: string;
  password: string;
}

export type User = Record<"email" | "name" | "avatar", string>;
export interface LoginSuccessResponse {
  user: User;
  access_token: string;
  refresh_token: string;
  access_token_exp: string;
}

export interface AuthContextType {
  login: (credentials: Credentials) => Promise<{ error: string } | {}>;
  logout: () => void;
  isAuthorized: boolean;
  user: User | null;
}
