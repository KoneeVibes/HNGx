import { Box, Typography } from "@mui/material"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../assets"

export const Footer: React.FC<{}> = () => {
    return (
        <Box
            padding={{ mobile: "3rem var(--pagePadding)", miniTablet: "6rem var(--pagePadding) 3rem" }}
            display={"flex"}
            justifyContent={{ miniTablet: "center" }}
            alignItems={"center"}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"var(--flexGap)"}
                alignItems={{ miniTablet: "center" }}
                overflow={"hidden"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"var(--flexGap)"}
                >
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                </Box>
                <Box
                    display={"flex"}
                    gap={"var(--flexGap)"}
                    alignItems={"center"}
                    justifyContent={{ miniTablet: "center" }}
                    flexWrap={"wrap"}
                >
                    <Typography
                        component={"a"}
                        href="#"
                        fontFamily={"DM Sans"}
                        fontWeight={700}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "18px" }}
                        color={"var(--gray-900, #111827)"}
                        sx={{
                            textDecoration: "none"
                        }}
                    >
                        Conditions of Use
                    </Typography>
                    <Typography
                        component={"a"}
                        href="#"
                        fontFamily={"DM Sans"}
                        fontWeight={700}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "18px" }}
                        color={"var(--gray-900, #111827)"}
                        sx={{
                            textDecoration: "none"
                        }}
                    >
                        Privacy & Policy
                    </Typography>
                    <Typography
                        component={"a"}
                        href="#"
                        fontFamily={"DM Sans"}
                        fontWeight={700}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "18px" }}
                        color={"var(--gray-900, #111827)"}
                        sx={{
                            textDecoration: "none"
                        }}
                    >
                        Press Room
                    </Typography>
                </Box>
                <Typography
                    variant="subtitle1"
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    fontSize={{ laptop: "18px" }}
                    color={"var(--gray-500, #6B7280)"}
                    sx={{
                        textWrap: "balance"
                    }}
                >
                    © 2021 MovieBox by Adriana Eka Prayudha
                </Typography>
            </Box>
        </Box>
    )
}