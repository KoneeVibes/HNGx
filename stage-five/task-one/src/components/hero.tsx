import React from "react";
import { Box, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { Arrow, HeroLB, HeroLBBg, HeroLT, HeroRight, HeroRightBg } from "../assets";
import { useNavigate } from "react-router-dom";

export const Hero: React.FC<{}> = () => {

    const matches = useMediaQuery('(max-width:1290px)');
    const belowDesktop = useMediaQuery('(max-width: 1200px)');
    const belowTablet = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();

    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={matches ? "stretch" : "center"}
            flexDirection={matches ? "column" : "row"}
            gap={matches ? "calc(var(--flexGap)*2.5)" : "var(--flexGap)"}
            sx={{
                padding: {
                    mobile: "calc(var(--sectionMargin) * 2) var(--pagePadding)",
                    desktop: "calc(var(--sectionMargin) * 4) var(--pagePadding)"
                }
            }}
        >
            <Stack
                flex={1}
                gap={"var(--flexGap)"}
                marginRight={matches ? "0" : "var(--flexGap)"}
                overflow={"hidden"}
            >
                <Typography
                    variant="h1"
                    fontFamily={"Sora"}
                    lineHeight={"100%"}
                    fontWeight={700}
                    color={"#141414"}
                    sx={{
                        fontSize: { mobile: "25px", miniTablet: "32px", tablet: "48px", desktop: "64px" },
                        textWrap: "balance"
                    }}
                >
                    Show Them
                    Don’t Just Tell
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    lineHeight={"normal"}
                    fontWeight={400}
                    color={"rgba(0, 0, 0, 0.75)"}
                    sx={{
                        fontSize: "20px",
                        textWrap: "balance"
                    }}
                >
                    Help your friends and loved ones by creating and sending videos on how to get things done on a website.
                </Typography>
                <Button
                    variant="contained"
                    endIcon={<Arrow />}
                    sx={{
                        width: "fit-content",
                        padding: "22px var(--Outer-Radius, 24px)",
                        backgroundColor: "var(--primary-main, #120B48)",
                        margin: "1rem 0",
                        borderRadius: "8px",
                        ":hover": {
                            backgroundColor: "var(--primary-main, #120B48)",
                        }
                    }}
                    onClick={() => navigate("https://github.com/KoneeVibes/HNGx/tree/main/stage-five/screen-recorder")}
                >
                    <Typography
                        variant="subtitle1"
                        component={"span"}
                        sx={{
                            fontFamily: "Work Sans",
                            fontWeight: 500,
                            lineHeight: "normal",
                            fontSize: { mobile: "14px", tablet: "18px" },
                            color: "#FFF",
                            textTransform: "capitalize"
                        }}
                    >
                        Install HelpMeOut
                    </Typography>
                </Button>
            </Stack>
            <Stack
                flex={1}
                direction={"row"}
                gap={"var(--flexGap)"}
                sx={{
                    justifyContent: { desktop: matches ? "space-evenly" : "unset" },
                    flexDirection: { mobile: "column", desktop: "row" },
                    alignItems: { mobile: "center", desktop: "stretch" }
                }}
            >
                <Box
                    display={"flex"}
                    gap={"var(--flexGap)"}
                    sx={{
                        width: { mobile: "100%", desktop: "unset" },
                        flexDirection: { mobile: "column", miniTablet: "row", desktop: matches ? "row" : "column" },
                        justifyContent: { mobile: "space-evenly", desktop: "space-between" },
                    }}
                >
                    <HeroLT
                        style={{
                            borderRadius: "8px",
                            width: belowTablet ? "100%" : "auto",
                            objectFit: "cover",
                            height: belowDesktop ? "100%" : "214px"
                        }}
                    />
                    <Box
                        position={"relative"}
                        top={matches ? "20%" : "unset"}
                        width={belowTablet ? "100%" : "auto"}
                    >
                        <HeroLB
                            style={{
                                borderRadius: "8px",
                                width: belowTablet ? "100%" : "auto",
                                objectFit: "cover",
                                height: belowDesktop ? "100%" : "214px"
                            }}
                        />
                        <HeroLBBg
                            style={{
                                position: "absolute",
                                top: matches ? "5%" : "-5%",
                                left: matches ? "15%" : "-15%",
                                zIndex: "-1",
                                display: belowTablet ? "none" : "unset"
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    position={"relative"}
                    sx={{
                        width: { mobile: "100%", miniTablet: "auto" }
                    }}
                >
                    <HeroRightBg
                        style={{
                            position: "absolute",
                            top: !belowDesktop ? "-13%" : "-20%",
                            right: !belowDesktop ? "-16%" : "unset",
                            zIndex: "-1",
                            left: belowDesktop ? "-25%" : "unset",
                            display: belowTablet ? "none" : "unset"
                        }}
                    />
                    <HeroRight
                        style={{
                            borderRadius: "8px",
                            width: belowTablet ? "100%" : "auto",
                            objectFit: "cover",
                            height: "100%"
                        }}
                    />
                </Box>
            </Stack>
        </Box >
    )
}