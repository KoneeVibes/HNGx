import { Box, Typography, Grid, Stack, useMediaQuery } from "@mui/material";
import { VideoRepository } from "../assets";
import { features } from "../config/features";

export const Features: React.FC<{}> = () => {

    const belowLaptop = useMediaQuery('(max-width: 1024px)');

    return (
        <Box
            padding={"calc(var(--sectionMargin) * 2) var(--pagePadding) "}
        >
            <Typography
                variant="h2"
                textAlign={"center"}
                fontFamily={"Sora"}
                fontWeight={700}
                lineHeight={"normal"}
                fontSize={{ mobile: "24px", miniTablet: "30px", tablet: "40px" }}
                color={"#141414"}
            >
                Features
            </Typography>
            <Typography
                variant="body1"
                textAlign={"center"}
                fontFamily={"Work Sans"}
                fontWeight={400}
                lineHeight={"151.3%"}
                fontSize={{ mobile: "16px", miniTablet: "20px" }}
                color={"var(--Grey, #616163)"}
            >
                Key Highlights of Our Extension
            </Typography>
            <Grid
                container
                direction={{ mobile: "column", laptop: "row" }}
                padding={"calc(var(--cardPadding) * 2) 0"}
                gap={{ mobile: "4rem" }}
                sx={{
                    flexWrap: { laptop: "nowrap" }
                }}
            >
                <Grid
                    item
                    container
                    gap={"var(--flexGap)"}
                    flex={1}
                >
                    {features.map((feature, i) => {
                        return (
                            <Stack
                                key={i}
                                direction={"row"}
                                gap={"1rem"}
                                width={"100%"}
                            >
                                {feature.icon}
                                <Stack
                                    overflow={"auto"}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={600}
                                        lineHeight={"normal"}
                                        fontSize={{ mobile: "18px", tablet: "24px", laptop: "28px" }}
                                        color={"#1B233D"}
                                        sx={{
                                            textWrap: "balance"
                                        }}
                                    >
                                        {feature.header}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Work Sans"}
                                        fontWeight={400}
                                        lineHeight={"151.3%"}
                                        fontSize={{ mobile: "14px", tablet: "20px" }}
                                        color={"var(--Grey, #616163)"}
                                        sx={{
                                            textWrap: "wrap"
                                        }}
                                    >
                                        {feature.body}
                                    </Typography>
                                </Stack>
                            </Stack>
                        )
                    })}
                </Grid>
                <Grid
                    item
                    flex={1}
                    overflow={"hidden"}
                >
                    <VideoRepository
                        style={{
                            width: !belowLaptop ? "auto" : "100%",
                            objectFit: "cover",
                            height: "100%"
                        }}
                    />
                </Grid>
            </Grid>
        </Box >
    )
}