import { createContext, useState } from "react";
import { LandingPageContextProviderProps, LandingPageContextType } from "../types/context.type";

export const LandingPageContext = createContext({} as LandingPageContextType);

export const LandingPageContextProvider: React.FC<LandingPageContextProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<[]>();

    return (
        <LandingPageContext.Provider value={{ movies, setMovies }}>
            {children}
        </LandingPageContext.Provider>
    )
}