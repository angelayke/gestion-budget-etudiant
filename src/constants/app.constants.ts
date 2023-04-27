export const app = {
  http: {
    baseUrl: 'http://localhost:3000',
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      refresh: '/auth/refresh',
    },
    incomes: {
      all: '/incomes/all',
      one: '/incomes',
    },
    expenses: {
      all: '/expenses/all',
      one: '/expenses',
    },
    codes: {
      unauthorized: 401,
    },
  },
  storage: {
    auth: {
      userKey: 'user',
      tokenKey: 'token',
    },
  },
};
