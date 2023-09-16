import { Box, Button, Typography } from "@mui/material"
import { AdBoxProps } from "../types/app.type"

export const AdBox: React.FC<AdBoxProps> = ({ leadText, subText, buttonText, minimizeSb, display }) => {
    return (
        <Box
            padding={"calc(var(--cardPadding) * 2) var(--cardPadding) var(--cardPadding)"}
            margin={"var(--cardPadding)"}
            borderRadius={"20px"}
            border={"1px solid rgba(190, 18, 60, 0.70)"}
            overflow={"hidden"}
            width={!minimizeSb ? "170px" : "0px"}
            sx={{
                backgroundColor: "rgba(248, 231, 235, 0.40)",
                transition: "width .5s ease",
            }}
        >
            <Typography
                variant="h2"
                color={"rgba(51, 51, 51, 0.80)"}
                fontFamily={"Poppins"}
                fontWeight={600}
                lineHeight={"normal"}
                fontSize={{ laptop: "15px" }}
                sx={{
                    textWrap: "wrap"
                }}
            >
                {leadText}
            </Typography>
            <Typography
                variant="body1"
                color={"#666"}
                fontFamily={"Poppins"}
                fontWeight={500}
                lineHeight={"normal"}
                fontSize={{ laptop: "12px" }}
                sx={{
                    textWrap: "wrap"
                }}
            >
                {subText}
            </Typography>
            <Button
                disableElevation
                variant="contained"
                sx={{
                    display: { display },
                    margin: "0.5rem 0",
                    color: "#BE123C",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    lineHeight: "normal",
                    fontSize: { laptop: "12px" },
                    borderRadius: "30px",
                    backgroundColor: "rgba(190, 18, 60, 0.20)",
                    ":hover": {
                        backgroundColor: "rgba(190, 18, 60, 0.20)"
                    }
                }}
            >
                {buttonText}
            </Button>
        </Box>
    )
}