import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');

  const login = (username, password, userRole) => {
    // Dummy username and password condition for user
    if (userRole === 'user' && username === 'user' && password === 'password') {
      setIsAuthenticated(true);
      setRole(userRole);
      console.log("User logged in")
    }
    // Dummy username and password condition for admin
    else if (userRole === 'admin' && username === 'admin' && password === '1234admin') {
      setIsAuthenticated(true);
      setRole(userRole);
      console.log("Admin logged in")
    } else {
      setIsAuthenticated(false);
      setRole('');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
