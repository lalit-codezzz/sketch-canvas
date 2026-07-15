import React from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import Loader from "./Loader";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {

    const { isAuthenticated, isLoading } = useAuthContext();

    if (isLoading) {
        return <Loader />
    }

    if (!isAuthenticated) return <Navigate to="/signin" replace />

    return (
        <>
            {children}
        </>
    );
}