import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContext = {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    openedTab: string;
    setOpenedTab: React.Dispatch<React.SetStateAction<string>>;
}

const authContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [token, setToken] = useState<string | null>(null);
    const [openedTab, setOpenedTab] = useState<string>("");


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setToken(token);
            setIsAuthenticated(true);
            setIsLoading(false);
        } else {
            setToken(null);
            setIsAuthenticated(false);
            setIsLoading(false);
        }

    }, []);

    return (
        <authContext.Provider value={{ token, setToken, isAuthenticated, setIsAuthenticated, isLoading, setIsLoading, openedTab, setOpenedTab }}>
            {
                children
            }
        </authContext.Provider>
    );
}

export function useAuthContext() {
    const ctx = useContext(authContext);
    if (!ctx) throw new Error("Auth context not working!");
    return ctx;
}