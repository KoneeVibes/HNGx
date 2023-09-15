export type DashboardContextProviderProps = {
    children: React.ReactNode
}

export type DashboardContextType = {
    sidebarWidth: number | undefined
    setSidebarWidth: React.Dispatch<React.SetStateAction<number | undefined>>
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}