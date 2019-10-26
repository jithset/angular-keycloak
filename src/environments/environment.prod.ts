import { KeycloakConfig } from 'keycloak-angular';
const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8180/auth',
  realm: 'microservice-test',
  clientId: 'angular-frontend'
};

export const environment = {
  production: true
};

