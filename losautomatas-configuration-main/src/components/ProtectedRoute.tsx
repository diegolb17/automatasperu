import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      try {
        const stored = localStorage.getItem('currentUser');
        console.log('ProtectedRoute (config): checking auth, stored:', stored ? 'found' : 'not found');
        if (!stored) {
          console.log('No user found, redirecting to /login');
          // Redirect to login page
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  // Check synchronously for initial render
  const stored = localStorage.getItem('currentUser');
  if (!stored) {
    // Show loading while redirect happens
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;