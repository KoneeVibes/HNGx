import { Avatar, Box, Typography, useMediaQuery } from "@mui/material"
import { Logo, sidebarIcons } from "../assets"
import { useState, useRef, useEffect, useContext } from "react"
import { DashboardContext } from "../context/dashboardContext";
import { AdBox } from "./AdBox";

export const Sidebar: React.FC<{}> = () => {
    const [minimizeSb, SetMinimizeSb] = useState<boolean>(true);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { setSidebarWidth } = useContext(DashboardContext);
    const screenSizesBelowTablet = useMediaQuery('(max-width:768px)');
    const arrLength = sidebarIcons.length;

    useEffect(() => {
        const calculateSidebarWidth = () => {
            const newSidebarWidth = sidebarRef.current?.offsetWidth;
            setSidebarWidth(newSidebarWidth);
        };

        calculateSidebarWidth();
        // take care of transition of sidebar elements, downside is performance.
        const intervalId = setInterval(calculateSidebarWidth);
        window.addEventListener('resize', calculateSidebarWidth);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', calculateSidebarWidth);
        };
    });

    // To listen for screen resizing below tablet size and reset minimizeSb to initial value of true
    useEffect(() => {
        if (screenSizesBelowTablet) {
            SetMinimizeSb(true);
        }
    }, [screenSizesBelowTablet]);

    return (
        <Box
            ref={sidebarRef}
            component={"div"}
            borderRadius={"0px 45px 45px 0px"}
            border={"1px solid rgba(0, 0, 0, 0.30)"}
            padding={"var(--cardPadding) 0"}
            position={"fixed"}
            top={0}
            bottom={0}
            display={screenSizesBelowTablet ? "none" : "unset"}
            sx={{
                overflowY: "auto",
            }}
        >
            <Box
                component={"div"}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--flexGap)",
                    overflow: "hidden",
                    padding: "var(--cardPadding)",
                    cursor: "pointer"
                }}
                onClick={() => SetMinimizeSb(!minimizeSb)}
            >
                <Avatar>
                    <Logo />
                </Avatar>
                <Typography
                    variant="subtitle1"
                    color={"#333"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"1"}
                    fontSize={{ laptop: "24px" }}
                    sx={{
                        opacity: minimizeSb ? 0 : "unset",
                        width: { tablet: minimizeSb ? 0 : "80px", laptop: minimizeSb ? 0 : "120px" },
                        transition: "all 0.5s ease",
                    }}
                >
                    MovieBox
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                {sidebarIcons.slice(0, 4).map((detail, i) => {
                    return (
                        <Box
                            key={i}
                            className={detail.name}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"var(--flexGap)"}
                            overflow={"hidden"}
                            padding={"var(--cardPadding)"}
                            width={"stretch"}
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            {detail.icon}
                            <Typography
                                fontFamily={"Poppins"}
                                fontWeight={600}
                                lineHeight={"normal"}
                                color={"#666"}
                                fontSize={{ laptop: "20px" }}
                                sx={{
                                    opacity: minimizeSb ? 0 : "unset",
                                    width: { tablet: minimizeSb ? 0 : "80px", laptop: minimizeSb ? 0 : "120px" },
                                    transition: "all 0.5s ease"
                                }}
                            >
                                {detail.name}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
            <Box>
                <AdBox
                    leadText="Play movie quizes and earn free tickets"
                    subText="50k people are playing now"
                    buttonText="Start playing"
                    minimizeSb={minimizeSb}
                />
                <Box
                    className={sidebarIcons[arrLength - 1].name}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"var(--flexGap)"}
                    overflow={"hidden"}
                    padding={"var(--cardPadding)"}
                    width={"stretch"}
                    sx={{
                        cursor: "pointer",
                    }}
                >
                    {sidebarIcons[arrLength - 1].icon}
                    <Typography
                        fontFamily={"Poppins"}
                        fontWeight={600}
                        lineHeight={"normal"}
                        color={"#666"}
                        fontSize={{ laptop: "20px" }}
                        sx={{
                            opacity: minimizeSb ? 0 : "unset",
                            width: { tablet: minimizeSb ? 0 : "80px", laptop: minimizeSb ? 0 : "120px" },
                            transition: "all 0.5s ease"
                        }}
                    >
                        {sidebarIcons[arrLength - 1].name}
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}