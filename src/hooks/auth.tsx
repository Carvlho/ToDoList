import {createContext, ReactNode, useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export type UserProps = {
  email: string;
  password: string;
};

interface AuthContextData {
  user: UserProps;
  setUser: (user: UserProps) => void;
  login: (data: UserProps) => void;
  logout: () => void;
  signUp: (data: UserProps) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const login = async (data: UserProps) => {
    try {
      const userData: any = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );

      setUser(userData.user);

      return {user: userData.user, success: true};
    } catch (error: any) {
      console.error(error);

      return false;
    }
  };

  const signUp = async (data: UserProps) => {
    try {
      const userData: any = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      setUser(userData.user);

      return {user: userData.user, success: true};
    } catch (error: any) {
      console.error(error);

      return false;
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();

      setUser({} as UserProps);

      return {
        user: null,
        success: true,
      };
    } catch (error) {
      console.error(error);
    }

    console.log(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};
