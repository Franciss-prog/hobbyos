export interface UserInterface {
	name?: string;
	email: string;
	password: string;
}
// action specific types
export type LoginParams = Pick<UserInterface, 'email' | 'password'>;
export type RegisterParams = UserInterface;
