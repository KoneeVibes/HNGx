import { Box, Button, Typography } from "@mui/material"
import { RatingBox } from "./RatingBox"
import { PlayIcon } from "../assets"

export const DescriptionBox: React.FC<{}> = () => {
    return (
        <Box
            padding={{
                mobile: "calc(var(--cardPadding) * 2) 0",
                laptop: "calc(var(--cardPadding) * 4) 0"
            }}
            overflow={"hidden"}
            width={{ desktop: "50%" }}
        >
            <Typography
                variant="h1"
                color={"#FFF"}
                fontFamily={"DM Sans"}
                fontWeight={700}
                lineHeight={"1.2"}
                fontSize={{ mobile: "32px", laptop: "48px" }}
                sx={{
                    textWrap: "balance"
                }}
            >
                John Wick 3 : Parabellum
            </Typography>
            <RatingBox
                justifyContent="flex-start"
                fraction={86.0}
                percentage={97}
                color="#FFF"
            />
            <Typography
                variant="body1"
                color={"#FFF"}
                fontFamily={"DM Sans"}
                fontWeight={500}
                lineHeight={"1.3"}
                fontSize={"14px"}
                sx={{
                    marginBlockEnd: "1rem",
                    textWrap: "balance"
                }}
            >
                John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </Typography>
            <Button
                disableElevation
                startIcon={<PlayIcon />}
                variant="contained"
                sx={{
                    fontFamily: "DM Sans",
                    fontWeight: 700,
                    lineHeight: 1.7,
                    fontSize: { laptop: "14px" },
                    color: "var(--white, #FFF)",
                    backgroundColor: "var(--rose-700, #BE123C)",
                    borderRadius: "6px",
                    ":hover": {
                        backgroundColor: "var(--rose-700, #BE123C)",
                    }
                }}
            >
                Watch trailer
            </Button>
        </Box>
    )
}