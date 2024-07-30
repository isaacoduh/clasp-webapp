"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import SecureLS from "secure-ls";
import axios from "axios";
import { headers } from "next/headers";

export type Props = {
  children: ReactNode;
};

export type User = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
};

// const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AuthContext = createContext({} as any);
export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const ls = new SecureLS();
    const storedUser: User | null = ls.get("user");
    const token = ls.get("token");

    if (!storedUser || !token) {
      setUser(null);
      logout();
      return;
    }
    setUser(storedUser);
    verifyToken(token);
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.data?.success) {
        setUser(response?.data?.user);
        const ls = new SecureLS();
        ls.set("user", response?.data?.user);
      } else {
        logout();
      }
    } catch (error: any) {
      if (error?.response && error?.response?.status === 401) {
        console.error("Invalid token:", error.response.data.message);
      } else {
        console.error("Token verification failed:", error);
      }
      logout();
    }
  };

  //   const fetchUser = async () => {
  //     await axios
  //       .get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`)
  //       .then((response) => {
  //         console.log(response);
  //       });
  //   };

  const logout = () => {
    const ls = new SecureLS();
    ls.removeAll();
    setUser(null);
    router.push("/auth/signin");
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
