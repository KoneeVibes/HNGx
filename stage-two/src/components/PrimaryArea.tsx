import { Box, IconButton, useMediaQuery } from "@mui/material"
import { PrimaryAreaProps } from "../types/app.type"
import { useContext, useEffect } from "react"
import { DashboardContext } from "../context/dashboardContext"
import { Menubar } from "./Menubar"
import { MainContent } from "./MainContent"
import { MenuButton } from "../assets"

export const PrimaryArea: React.FC<PrimaryAreaProps> = ({ id }) => {
    const { sidebarWidth, showMenu, setShowMenu } = useContext(DashboardContext);
    const screenSizesBelowTablet = useMediaQuery('(max-width:768px)');

    // To listen for screen resizing above tablet size and reset showMenu to initial value of false
    useEffect(() => {
        if (!screenSizesBelowTablet) {
            setShowMenu(false);
        }
    }, [screenSizesBelowTablet, setShowMenu]);

    return (
        <Box
            // would be nice to have a fall back left offset value, but it may come off as unnecessary
            // since the sidebar will always be returned to the dom.
            marginLeft={`${sidebarWidth}px`}
            padding={"var(--cardPadding)"}
        >
            <IconButton
                title="toggle menu button"
                onClick={() => setShowMenu(!showMenu)}
                sx={{
                    display: !screenSizesBelowTablet ? "none" : "inline-flex",
                    backgroundColor: "var(--rose-700, #BE123C)",
                    color: "#FFF",
                    borderRadius: "8px",
                    ":hover": {
                        backgroundColor: "var(--rose-700, #BE123C)",
                    },
                }}
            >
                {!showMenu ? <MenuButton /> : "X"}
            </IconButton>
            <Menubar
                // could have used z-index to hide this, but what if there is a button.
                // so you really want to hide this for screens bigger than tablet size
                display={
                    !screenSizesBelowTablet ? "none" : "unset"
                }
                // if menu is not active, value of relative still takes space in the layout
                // when offset applies. And if menu is active value of absolute would need a z-index
                // to hide main content. So relative it is, because that's what permits the offset to ease out.
                position={
                    !showMenu ? "absolute" : "relative"
                }
                left={
                    screenSizesBelowTablet ?
                        !showMenu ? "-250%" : "0%"
                        : "unset"
                }
            />
            <MainContent
                //other position values for this div (when the menubar is active) cause an overflow
                // and you don't want that. so fixed(to the specified offset) it is.
                position={
                    screenSizesBelowTablet ?
                        !showMenu ? "relative" : "fixed"
                        : "unset"
                }
                // you want to animate this div when the menubar becomes active to slide out from the right
                // and you don't really care about this for bigger screens(not sure yet!)
                right={
                    screenSizesBelowTablet ?
                        !showMenu ? "0%" : "-250%"
                        : "unset"
                }
                id={id}
            />
        </Box >
    )
}