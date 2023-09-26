import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { ReactComponent as Underline } from "../../Assets/wavyunderline.svg";
import { clients } from "../../Configs/app";
import "./styled.css";

export const Clients: React.FC = () => {

    const laptopScreenDownwards = useMediaQuery("(max-width: 1024px)");

    return (
        <Container
            sx={{
                marginTop: "var(--sectionMargin)",
                marginBottom: "var(--sectionMargin)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--flexGap)",
                padding: "0",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                <Typography
                    variant="h2"
                    color={"#FFFFFF"}
                    textAlign={"center"}
                    fontFamily={"Fractul"}
                    fontWeight={"600"}
                    sx={{
                        fontSize: { mobile: "14px", miniTablet: "24px", tablet: "32px" },
                        lineHeight: { mobile: "16.8px", miniTablet: "36px", tablet: "38.4px" },
                    }}
                >
                    Clients i have worked with
                </Typography>
                <Underline
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "auto",
                        maxWidth: "30%",
                    }}
                />
            </Box>
            <Box
                display={"flex"}
                overflow={"hidden"}
                gap={"var(--marqueeGap)"}
                alignItems={"center"}
                marginLeft={"calc(var(--pagePadding) * -1)"}
                marginRight={"calc(var(--pagePadding) * -1)"}
                paddingTop={(laptopScreenDownwards) ? "0.5rem" : "var(--cardPadding)"}
                paddingBottom={(laptopScreenDownwards) ? "0.5rem" : "var(--cardPadding)"}
                sx={{
                    userSelect: "none",
                    background: "linear-gradient(268.67deg, rgba(140, 140, 140, 0.22) 0.54%, rgba(80, 80, 80, 0.08) 69.42%)",
                    backdropFilter: "blur(7px)",
                    borderTop: "1px solid #FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
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
                    {clients.map((Client, i) => {
                        return (
                            <Client
                                key={i}
                                style={{
                                    width: (laptopScreenDownwards) ? "5%" : "auto",
                                    height: (laptopScreenDownwards) ? "2rem" : "auto",
                                }}
                            />
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
                    {clients.map((Client, i) => {
                        return (
                            <Client
                                key={i}
                                style={{
                                    width: (laptopScreenDownwards) ? "5%" : "auto",
                                    height: (laptopScreenDownwards) ? "2rem" : "auto",
                                }}
                            />
                        )
                    })}
                </div>
            </Box>
        </Container>
    )
}