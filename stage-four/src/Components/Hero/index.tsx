import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Wave, Headshot, smIcons } from "../../Configs/app";
import "./styled.css";

export const Hero: React.FC<{}> = () => {

    const miniTabletScreenAndUpwards = useMediaQuery("(min-width: 425px)");
    const laptopScreenAndUpwards = useMediaQuery("(min-width: 1024px)");

    return (
        <Container
            sx={{
                display: "flex",
                marginTop: "var(--sectionMargin)",
                marginBottom: "var(--sectionMargin)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "var(--flexGap)",
                    width: "100%",
                }}
                className="headshotBox"
            >
                <Typography
                    variant="h1"
                    color={"#FFFFFF"}
                    textAlign={"center"}
                    fontSize={"medium"}
                    whiteSpace={"normal"}
                >
                    <span className="letterH">
                        H
                    </span>
                    <span className="hello">
                        ello!
                    </span>
                    <Wave
                        style={{
                            width: (laptopScreenAndUpwards) ? undefined : "20px",
                            height: (laptopScreenAndUpwards) ? undefined : "auto"
                        }}
                    />
                    <br />
                    <span className="myName">
                        I’m Ofofonono
                    </span><br />
                    <span className="letterA">
                        a
                    </span>
                    <span className="myProfession">
                        Web Developer
                    </span>
                </Typography>
                <Headshot
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "80%",
                        height: (miniTabletScreenAndUpwards) ? undefined : "auto",
                    }}
                    className="headshot"
                />
            </Box>
            <Box
                sx={{
                    display: { mobile: "none", laptop: "flex" },
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                {smIcons.map((icon, i) => {
                    return (
                        <icon.img key={i} onClick={() => window.open(`${icon.link}`, "_blank")} />
                    )
                })}
            </Box>
        </Container>
    )
}
