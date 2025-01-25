import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: 'http://localhost:9090', // Your Keycloak server URL
  realm: 'master',
  clientId: '2024'
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak; 