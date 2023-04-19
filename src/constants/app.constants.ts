export const app = {
	http: {
		baseUrl: "https://aec-backend.herokuapp.com",
		auth: {
			login: "/auth/login",
			register: "/auth/register",
			refresh: "/auth/refresh",
		},
		codes: {
			unauthorized: 401,
		}
	}
}