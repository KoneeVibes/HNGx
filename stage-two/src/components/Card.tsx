import { Box, IconButton, Typography } from "@mui/material"
import { HeartIcon } from "../assets"
import { CardProps } from "../types/app.type"
import getImagesConfig from "../configs/tmdb"
import { useEffect, useState } from "react"
import { RatingBox } from "./RatingBox"
import { useNavigate } from "react-router-dom"
import { ImageConfig } from "../types/config.type"

export const Card: React.FC<CardProps> = ({ filePath, title, justifyContent, fraction, percentage, color, date, id }) => {

    const [imageConfig, setImageConfig] = useState<ImageConfig>();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchConfig() {
            const config = await getImagesConfig();
            setImageConfig(config);
        }
        fetchConfig();
    }, []);

    return (
        <Box
            data-testid="movie-card"
        >
            <Box
                data-testid="movie-poster"
                component={"div"}
                sx={{
                    padding: "1rem",
                    overflow: "hidden",
                    backgroundImage: `url(${imageConfig?.secure_base_url}original${filePath})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    minWidth: "100px",
                    height: "370px",
                    "@media screen and (max-width: 200px)": {
                        minWidth: "unset"
                    }
                }}
                onClick={() => navigate(`/movies/${id}`)}
            >
                <IconButton
                    sx={{
                        backgroundColor: "rgba(243, 244, 246, 0.50)",
                        float: "right",
                    }}
                >
                    <HeartIcon />
                </IconButton>
            </Box>
            <Box>
                <Typography
                    data-testid="movie-release-date"
                    color={"var(--gray-400, #9CA3AF)"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    fontSize={{ laptop: "12px" }}
                    sx={{
                        marginBlock: "0.5rem"
                    }}
                >
                    {`USA, ${date}`}
                </Typography>
                <Typography
                    data-testid="movie-title"
                    color={"var(--gray-900, #111827)"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    fontSize={{ laptop: "18px" }}
                    sx={{
                        marginBlock: "0.5rem"
                    }}
                    onClick={() => navigate(`/movies/${id}`)}
                >
                    {title}
                </Typography>
                <RatingBox
                    justifyContent={justifyContent}
                    fraction={fraction}
                    percentage={percentage}
                    color={color}
                />
            </Box>
        </Box>
    )
}