import { Box, Stack, Button, useMediaQuery, Typography } from "@mui/material"
import { Logo } from "../assets"

export const Nav: React.FC<{}> = () => {

    const matches = useMediaQuery('(max-width:180px)');

    return (
        <Box
            padding={"var(--cardPadding) var(--pagePadding)"}
            display={"flex"}
            gap={"var(--flexGap)"}
            justifyContent={"space-between"}
            sx={{
                flexDirection: { mobile: "column", tablet: "row" }
            }}
            borderBottom={"3px solid #f5f5f5"}
        >
            <Logo
                style={{
                    width: matches ? "100%" : "137px"
                }}
            />
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                gap={"var(--flexGap)"}
                overflow={"hidden"}
            >
                <Button
                    disableElevation
                >
                    <Typography
                        variant="subtitle1"
                        component={"span"}
                        sx={{
                            fontFamily: "Work Sans",
                            fontWeight: 500,
                            lineHeight: "normal",
                            fontSize: "16px",
                            color: "#000",
                            textTransform: "capitalize"
                        }}
                    >
                        Features
                    </Typography>
                </Button>
                <Button
                    disableElevation
                >
                    <Typography
                        variant="subtitle1"
                        component={"span"}
                        sx={{
                            fontFamily: "Work Sans",
                            fontWeight: 500,
                            lineHeight: "normal",
                            fontSize: "16px",
                            color: "#000",
                            textTransform: "capitalize"
                        }}
                    >
                        How It Works
                    </Typography>
                </Button>
            </Stack>
            <Button
                disableElevation
                sx={{
                    width: matches ? "auto" : "fit-content",
                    minWidth: 0,
                }}
            >
                <Typography
                    variant="subtitle1"
                    component={"span"}
                    sx={{
                        fontFamily: "Sora",
                        fontWeight: 600,
                        lineHeight: "normal",
                        fontSize: "18px",
                        color: "var(--primary-main, #120B48)",
                        textTransform: "capitalize",
                    }}
                >
                    Get Started
                </Typography>
            </Button>
        </Box>
    )
}