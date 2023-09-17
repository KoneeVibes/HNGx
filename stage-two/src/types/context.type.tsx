export type DashboardContextType = {
    sidebarWidth: number | undefined
    setSidebarWidth: React.Dispatch<React.SetStateAction<number | undefined>>
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export type DashboardContextProviderProps = {
    children: React.ReactNode
}

export type LandingPageContextType = {
    movies: [] | undefined
    setMovies: React.Dispatch<React.SetStateAction<[] | undefined>>
}

export type LandingPageContextProviderProps = {
    children: React.ReactNode
}