import { useAuth0 } from "@auth0/auth0-react";

export const useApi = () => {
  const { getAccessTokenSilently } = useAuth0();

  const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
    try {
      const token = await getAccessTokenSilently();
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await fetch(`http://localhost:5000${endpoint}`, options);
      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  return { apiRequest };
};
