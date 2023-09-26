import { Box, Container, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import "./styled.css"
import { Arrow, projects } from "../../Configs/app";

export const Projects: React.FC<{}> = () => {

    const smallerScreens = useMediaQuery("(max-width: 280px)");

    return (
        <Container
            component={"div"}
            id="projects"
            sx={{
                background: "#F2EEEE",
                marginTop: "var(--sectionMargin)",
                marginBottom: "var(--sectionMargin)",
                padding: { mobile: (smallerScreens) ? "0.5rem" : "2rem", tablet: "4rem" },
                display: "flex",
                flexDirection: "column",
                gap: "var(--flexGap)",
            }}
        >
            {/* Projects Section Heading */}
            <Grid
                container
                alignItems={"center"}
                flexWrap={"nowrap"}
                gap={"2rem"}
                justifyContent={"space-between"}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Fractul"}
                    fontWeight={"500"}
                    lineHeight={"1.2"}
                    whiteSpace={"normal"}
                    sx={{
                        fontSize: { mobile: "16px", miniTablet: "24px", tablet: "35px", desktop: "55px", },
                        width: { laptop: "40%" },
                        flex: { mobile: 1, miniTablet: "unset" }
                    }}
                >
                    Here are some of my wor<span className="ks">ks</span>
                </Typography>
                <Link
                    href="https://drive.google.com/file/d/1YD7eWR5vdRjTojLMizMmDsDbnGs8I2AO/view?usp=sharing"
                    target="_blank"
                    underline="none"
                    fontFamily={"Fractul"}
                    fontWeight={500}
                    fontSize={"7px"}
                    lineHeight={"10.01px"}
                    color={"#000000"}
                    sx={{
                        display: { miniTablet: "none" }
                    }}
                    overflow={"hidden"}
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    flex={1}
                >
                    Click <span className="here">here</span> to Access CV
                </Link>
            </Grid>

            {/* Projects Category */}
            <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{
                    gap: { mobile: "2rem", miniTablet: "var(--flexGap)", desktop: "15rem" }
                }}
            >
                {/* Projects Category - Branding & Web Design */}
                {projects.map((project, i) => {
                    return (
                        <Grid
                            key={i}
                            container
                            sx={{
                                flexDirection: project.layout,
                            }}
                            gap={"var(--flexGap)"}
                            alignItems={"flex-end"}
                        >
                            <Grid
                                item
                                flex={1}
                                width={"100%"}
                                component={"div"}
                                onClick={() => window.open(`${project.url}`, "_blank")}
                            >
                                <project.img className="stretchWidth" />
                            </Grid>
                            <Grid
                                container item
                                flex={1}
                                sx={{
                                    flexDirection: "column",
                                    flexWrap: { mobile: "nowrap", tablet: "wrap" },
                                    paddingBottom: { laptop: "6rem" }
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    component={"a"}
                                    fontFamily={"Fractul"}
                                    fontWeight={500}
                                    lineHeight={1.2}
                                    whiteSpace={"normal"}
                                    sx={{
                                        fontSize: { mobile: "20px", desktop: "48px" },
                                        textDecoration: "none",
                                        color: "#000"
                                    }}
                                    href={project.url}
                                    target="_blank"
                                >
                                    {project.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    fontFamily={"Fractul"}
                                    fontWeight={300}
                                    whiteSpace={"normal"}
                                    sx={{
                                        fontSize: { mobile: "11px", desktop: "24px" }
                                    }}
                                >
                                    {project.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })}

                {/* See more projects? */}
                <Box>
                    <Typography
                        variant="h3"
                        component={"a"}
                        href="https://github.com/KoneeVibes"
                        fontFamily={"Fractul"}
                        fontWeight={500}
                        lineHeight={1.43}
                        sx={{
                            fontSize: { mobile: "7px", tablet: "16px", desktop: "35px" },
                            textDecoration: "none",
                            color: "#000"
                        }}
                    >
                        Want to see <span className="more">more?</span>
                    </Typography>

                    <Link
                        href="https://github.com/KoneeVibes"
                        target="_blank"
                        underline="none"
                        color={"#000000"}
                        fontFamily={"Fractul"}
                        fontWeight={500}
                        lineHeight={1.43}
                        fontSize={"16px"}
                        sx={{
                            display: { mobile: "none", laptop: "block" }
                        }}
                    >
                        <span className="arrow"><Arrow /></span>Visit my Github
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}