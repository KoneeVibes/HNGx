import { Box, Typography } from "@mui/material"
import { IMDBIcon, StrawberryIcon } from "../assets"
import { RatingBoxProps } from "../types/app.type"

export const RatingBox: React.FC<RatingBoxProps> = ({ justifyContent, fraction, percentage, color }) => {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={justifyContent}
            gap={"var(--flexGap)"}
            flexWrap={"wrap"}
            padding={"0.5rem 0"}
            overflow={"hidden"}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={"0.5rem"}
            >
                <IMDBIcon />
                <Typography
                    variant="subtitle1"
                    color={color}
                    fontFamily={"DM Sans"}
                    fontWeight={400}
                    lineHeight={1.5}
                    fontSize={"12px"}
                >
                    {`${fraction}/100`}
                </Typography>
            </Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={"0.5rem"}
            >
                <StrawberryIcon />
                <Typography
                    variant="subtitle1"
                    color={color}
                    fontFamily={"DM Sans"}
                    fontWeight={400}
                    lineHeight={1.5}
                    fontSize={"12px"}
                >
                    {`${percentage}%`}
                </Typography>
            </Box>
        </Box>
    )
}