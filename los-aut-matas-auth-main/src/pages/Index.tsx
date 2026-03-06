import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Check if user is already authenticated
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        // Redirect to configuration page
        window.location.href = '/configurar';
      } catch (error) {
        // If parsing fails, redirect to auth page
        window.location.href = '/auth';
      }
    } else {
      // Redirect to auth page within this app
      window.location.href = '/auth';
    }
  }, []);

  return null;
};

export default Index;
