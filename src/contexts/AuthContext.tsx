
import React, { createContext, useContext, useState } from 'react';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>({
    name: "Demo User",
    email: "demo@example.com"
  }); // Set an initial user for demo purposes

  const login = (email: string, password: string) => {
    // In a real app, this would validate against a backend
    if (email && password) {
      setUser({
        name: email.split('@')[0], // Use part before @ as name
        email,
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
