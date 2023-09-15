import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import { sidebarIcons } from "../assets";
import logo from "../assets/logo.svg";
import { MenubarProps } from "../types/app.type";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../context/dashboardContext";

export const Menubar: React.FC<MenubarProps> = ({ display, position, left }) => {

    const { setShowMenu } = useContext(DashboardContext);
    const screenSizesBelowTablet = useMediaQuery('(max-width:768px)');

    // To listen for screen resizing above tablet size and reset showMenu to initial value of false
    useEffect(() => {
        if (!screenSizesBelowTablet) {
            setShowMenu(false);
        }
    }, [screenSizesBelowTablet, setShowMenu])

    return (
        <Box
            display={display}
            left={left}
            sx={{
                position: position,
                transition: "left .5s ease",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "var(--flexGap)",
                    overflow: "hidden",
                    padding: "var(--cardPadding)",
                    cursor: "pointer"
                }}
            >
                <Avatar>
                    <img src={logo} alt="Logo" />
                </Avatar>
                <Typography
                    variant="subtitle1"
                    color={"#333"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"1"}
                    fontSize={{ laptop: "24px" }}
                >
                    MovieBox
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
            >
                {sidebarIcons.map((detail, i) => {
                    return (
                        <Box
                            key={i}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            gap={"var(--flexGap)"}
                            overflow={"hidden"}
                            padding={"var(--cardPadding)"}
                            sx={{
                                cursor: "pointer"
                            }}
                        >
                            {detail.fallbackIcon}
                            <Typography
                                fontFamily={"Poppins"}
                                fontWeight={600}
                                lineHeight={"normal"}
                                color={"#666"}
                                fontSize={{ laptop: "20px" }}
                            >
                                {detail.name}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box >
    )
}