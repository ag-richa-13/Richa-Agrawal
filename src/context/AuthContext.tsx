import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  requestAccess: (email: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has access
    const checkAuth = async () => {
      const token = localStorage.getItem('portfolio_access_token');
      if (token) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const requestAccess = async (email: string) => {
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate the request
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Store email in localStorage for demo
      localStorage.setItem('requested_email', email);
      alert('Access request sent! Please wait for approval.');
    } catch (error) {
      console.error('Error requesting access:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, requestAccess, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 