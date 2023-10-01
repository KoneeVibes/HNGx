import { createContext, useState } from "react"
import { ContextProviderPropsType, ContextType } from "../types/context.type";

export const Context = createContext({} as ContextType);

export const ContextProvider: React.FC<ContextProviderPropsType> = ({ children }) => {

    const [closePopup, setClosePopup] = useState<boolean>(false)

    return (
        <Context.Provider value={{ closePopup, setClosePopup }}>
            {children}
        </Context.Provider>
    )
}