export interface User {
	_id: string,
	username: string,
	name?: string,
	last_name?: string,
	refresh_token: string,
	createdAt: Date,
	updatedAt: Date,
}