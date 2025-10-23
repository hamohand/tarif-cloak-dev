export const environment = {
  production: false,
  keycloak: {
    issuer: 'http://localhost:8080/realms/tarif-secur-realm',
    realm: 'tarif-secur-realm',
    clientId: 'frontend-client',
    redirectUri: 'http://localhost:4200/'
  },
  apiUrl: 'http://localhost:8081/api'
};
