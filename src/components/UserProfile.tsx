import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [backendResponse, setBackendResponse] = useState(null);

  useEffect(() => {
    const validateUser = async () => {
      if (!isAuthenticated) return;

      try {
        // Get the Auth0 access token
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            scope: "openid profile email",
          },
        });

        // Send token to the backend for validation
        const response = await fetch("http://localhost:5000/auth/validate-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setBackendResponse(data);
      } catch (error) {
        console.error("Error validating user:", error);
      }
    };

    validateUser();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <div>Loading...</div>;

  return (
    isAuthenticated && user && (
      <div>
        <h2>{user.name}</h2>
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>

        <h3>Backend Response:</h3>
        <pre>{JSON.stringify(backendResponse, null, 2)}</pre>
      </div>
    )
  );
};

export default UserProfile;
