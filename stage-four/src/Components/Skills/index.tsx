import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { technologies } from "../../Configs/app";
import "./styled.css";

export const Skills: React.FC<{}> = () => {

    const smallerScreens = useMediaQuery("(max-width: 280px)");
    const laptopScreenDownwards = useMediaQuery("(max-width: 1024px)");

    return (
        <Container
            sx={{
                marginTop: "var(--sectionMargin)",
                marginBottom: "var(--sectionMargin)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--flexGap)",
            }}
        >
            <Typography
                variant="h2"
                color={"#FFFFFF"}
                fontFamily={"Fractul"}
                textAlign={"center"}
                fontWeight={400}
                lineHeight={1.2}
                sx={{
                    fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px", desktop: "32px" }
                }}
            >
                Technologies Used
            </Typography>
            <Box
                sx={{
                    position: { desktop: "relative" },
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Box
                    component={"div"}
                    className="crossLeft"
                    display={"flex"}
                    overflow={"hidden"}
                    gap={"var(--marqueeGap)"}
                    alignItems={"center"}
                    paddingTop={(laptopScreenDownwards) ? "0.5rem" : "var(--cardPadding)"}
                    paddingBottom={(laptopScreenDownwards) ? "0.5rem" : "var(--cardPadding)"}
                    sx={{
                        userSelect: "none",
                        background: "#000000",
                        backdropFilter: "blur(7px)",
                        borderTop: "1px solid #FFFFFF",
                        borderBottom: "1px solid #FFFFFF",
                        position: { desktop: "absolute" },
                        // If I ever come back here, I should be able to write a function that will dynamically calculate the offset to be added to
                        // 100vw.
                        width: { desktop: "100vw" },
                        marginLeft: {
                            mobile: (smallerScreens) ? "calc(-0.5rem - var(--pagePadding))" : "calc(-2rem - var(--pagePadding))",
                            tablet: "calc(-4rem - var(--pagePadding))",
                        },
                        marginRight: {
                            mobile: (smallerScreens) ? "calc(-0.5rem - var(--pagePadding))" : "calc(-2rem - var(--pagePadding))",
                            tablet: "calc(-4rem - var(--pagePadding))",
                        },
                    }}
                >
                    <div
                        style={{
                            flexShrink: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            minWidth: "100%",
                            gap: "var(--marqueeGap)",
                            animation: "scroll 10s linear infinite",
                        }}
                    >
                        {technologies.map((tech, i) => {
                            return (
                                <Typography
                                    key={i}
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    lineHeight={1.21}
                                    color={"#FFFFFF"}
                                    sx={{
                                        fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px", desktop: "32px" }
                                    }}
                                >
                                    {tech}
                                </Typography>
                            )
                        })}
                    </div>
                    <div
                        aria-hidden="true"
                        style={{
                            flexShrink: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            minWidth: "100%",
                            gap: "var(--marqueeGap)",
                            animation: "scroll 10s linear infinite",
                        }}
                    >
                        {technologies.map((tech, i) => {
                            return (
                                <Typography
                                    key={i}
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    lineHeight={1.21}
                                    color={"#FFFFFF"}
                                    sx={{
                                        fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px", desktop: "32px" }
                                    }}
                                >
                                    {tech}
                                </Typography>
                            )
                        })}
                    </div>
                </Box>
                <Box
                    component={"div"}
                    className="crossRight"
                    display={"flex"}
                    overflow={"hidden"}
                    gap={"var(--marqueeGap)"}
                    alignItems={"center"}
                    paddingTop={(laptopScreenDownwards) ? "0.5rem" : "var(--cardPadding)"}
                    paddingBottom={(laptopScreenDownwards) ? "0.5rem" : "var(--cardPadding)"}
                    sx={{
                        userSelect: "none",
                        background: "#000000",
                        backdropFilter: "blur(7px)",
                        borderTop: "1px solid #FFFFFF",
                        borderBottom: "1px solid #FFFFFF",
                        position: { desktop: "absolute" },
                        // If I ever come back here, I should be able to write a function that will dynamically calculate the offset to be added to
                        // 100vw. 
                        width: { desktop: "100vw" },
                        marginLeft: {
                            mobile: (smallerScreens) ? "calc(-0.5rem - var(--pagePadding))" : "calc(-2rem - var(--pagePadding))",
                            tablet: "calc(-4rem - var(--pagePadding))",
                        },
                        marginRight: {
                            mobile: (smallerScreens) ? "calc(-0.5rem - var(--pagePadding))" : "calc(-2rem - var(--pagePadding))",
                            tablet: "calc(-4rem - var(--pagePadding))",
                        },
                    }}
                >
                    <div
                        style={{
                            flexShrink: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            minWidth: "100%",
                            gap: "var(--marqueeGap)",
                            animation: "scrollReverse 10s linear infinite",
                        }}
                    >
                        {technologies.map((tech, i) => {
                            return (
                                <Typography
                                    key={i}
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    lineHeight={1.21}
                                    color={"#FFFFFF"}
                                    sx={{
                                        fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px", desktop: "32px" }
                                    }}
                                >
                                    {tech}
                                </Typography>
                            )
                        })}
                    </div>
                    <div
                        aria-hidden="true"
                        style={{
                            flexShrink: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            minWidth: "100%",
                            gap: "var(--marqueeGap)",
                            animation: "scrollReverse 10s linear infinite",
                        }}
                    >
                        {technologies.map((tech, i) => {
                            return (
                                <Typography
                                    key={i}
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    lineHeight={1.21}
                                    color={"#FFFFFF"}
                                    sx={{
                                        fontSize: { mobile: "12px", miniTablet: "18px", tablet: "24px", desktop: "32px" }
                                    }}
                                >
                                    {tech}
                                </Typography>
                            )
                        })}
                    </div>
                </Box>
            </Box>
        </Container>
    )
}