export const environment = {
  production: true,
  keycloak: {
    issuer: `${window.location.origin}/realms/tarif-secur-realm`,
    realm: 'tarif-secur-realm',
    clientId: 'frontend-client',
    redirectUri: window.location.origin + '/'
  },
  apiUrl: '/api'
};
