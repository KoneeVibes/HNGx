export type ContextProviderPropsType = {
    children: React.ReactNode
}

export type ContextType = {
    closePopup: boolean
    setClosePopup: React.Dispatch<React.SetStateAction<boolean>>
}