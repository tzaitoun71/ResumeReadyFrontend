import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }: { children: React.ReactNode }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = window.location.origin;

console.log("Auth0 Domain:", import.meta.env.VITE_AUTH0_DOMAIN);
console.log("Auth0 Client ID:", import.meta.env.VITE_AUTH0_CLIENT_ID);


  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
