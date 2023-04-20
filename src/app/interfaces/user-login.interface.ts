import type { User } from "./user.interface";

export interface UserLogin {
	token: string,
	user: User;
}
