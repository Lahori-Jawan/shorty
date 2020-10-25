export const TOKEN = 'token';

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN);
  },

  setToken(accessToken) {
    localStorage.setItem(TOKEN, accessToken);
  },

  clearStorage() {
    localStorage.removeItem(TOKEN);
    console.log('token cleared');
  },
};

export { TokenService };
