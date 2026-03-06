import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '@/services/auth.hooks';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: user, isLoading } = useCurrentUser();
  const navigate = useNavigate();

  console.log('ProtectedRoute:', { isLoading, user: user ? `User ${user.Id}` : 'null' });

  useEffect(() => {
    console.log('ProtectedRoute useEffect:', { isLoading, user: user ? `User ${user.Id}` : 'null' });
    if (!isLoading && !user) {
      console.log('Redirecting to /auth - no user found');
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    console.log('ProtectedRoute loading...');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    console.log('ProtectedRoute: user is null, will redirect');
    return null; // Will redirect in useEffect
  }

  console.log('ProtectedRoute: user authenticated, rendering children');
  return <>{children}</>;
};

export default ProtectedRoute;