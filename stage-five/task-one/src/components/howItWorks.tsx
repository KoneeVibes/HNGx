import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { howItWorks } from "../config/howItWorks";

export const HowItWorks: React.FC<{}> = () => {

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
                How it works
            </Typography>
            <Grid
                container
                padding={"calc(var(--cardPadding) * 2) 0"}
                direction={{ mobile: "column", laptop: "row" }}
                gap={{ mobile: "4rem" }}
                sx={{
                    flexWrap: { laptop: "nowrap" }
                }}
            >
                {howItWorks.map((obj, i) => {
                    return (
                        <Grid
                            item
                            key={i}
                            container
                            gap={"var(--flexGap)"}
                            justifyContent={"space-between"}
                            flexDirection={"column"}
                        >
                            <obj.icon
                                width={"100%"}
                            />
                            <Typography
                                variant="h3"
                                fontFamily={"Inter"}
                                fontWeight={600}
                                lineHeight={"normal"}
                                fontSize={{ mobile: "18px", tablet: "24px", laptop: "28px" }}
                                color={"#1B233D"}
                                sx={{
                                    textWrap: "balance",
                                    textAlign: "center",
                                    width: "100%"
                                }}
                            >
                                {obj.header}
                            </Typography>
                            <Typography
                                variant="body1"
                                fontFamily={"Work Sans"}
                                fontWeight={400}
                                lineHeight={"151.3%"}
                                fontSize={{ mobile: "14px", tablet: "20px" }}
                                color={"var(--Grey, #616163)"}
                                sx={{
                                    textWrap: "wrap",
                                    width: "100%"
                                }}
                            >
                                {obj.body}
                            </Typography>
                            <obj.image
                                style={{
                                    width: "100%",
                                    objectFit: "cover",
                                    height: belowLaptop ? "100%" : "auto"
                                }}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}