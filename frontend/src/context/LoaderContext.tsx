import React, { createContext, useContext, useState } from "react";

type LoaderContext = {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const loaderContext = createContext<LoaderContext | null>(null);

export function LoaderContextProvider({ children }: { children: React.ReactNode }) {

    const [loading, setLoading] = useState<boolean>(false);

    return (
        <loaderContext.Provider value={{ loading, setLoading }}>
            {
                children
            }
        </loaderContext.Provider>
    );
}

export function useLoaderContext() {
    const ctx = useContext(loaderContext);
    if (!ctx) throw new Error("Loader context is not working!");
    return ctx;
} 