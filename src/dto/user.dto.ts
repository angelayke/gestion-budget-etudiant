import { User } from "src/app/interfaces/user.interface";

export interface UserRegisterDto extends Partial<User> {
	username: string,
	password: string,
}