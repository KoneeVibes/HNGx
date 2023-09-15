import { createContext, useState } from "react"
import { DashboardContextType, DashboardContextProviderProps } from "../types/context.type";

export const DashboardContext = createContext({} as DashboardContextType);

export const DashboardContextProvider: React.FC<DashboardContextProviderProps> = ({ children }) => {

    const [sidebarWidth, setSidebarWidth] = useState<number>();
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <DashboardContext.Provider value={{ sidebarWidth, setSidebarWidth, showMenu, setShowMenu }}>
            {children}
        </DashboardContext.Provider>
    )
}