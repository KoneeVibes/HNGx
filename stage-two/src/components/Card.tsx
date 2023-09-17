import { Box, IconButton, Typography } from "@mui/material"
import { HeartIcon } from "../assets"
import { CardProps } from "../types/app.type"
import getImagesConfig from "../configs/imagesConfig"
import { useEffect, useState } from "react"
import { RatingBox } from "./RatingBox"
import { useNavigate } from "react-router-dom"
import { ImageConfig } from "../types/config.type"

export const Card: React.FC<CardProps> = ({ filePath, title, originCountry, justifyContent, fraction, percentage, color, date, genres, id }) => {

    const [imageConfig, setImageConfig] = useState<ImageConfig>();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchConfig() {
            const config = await getImagesConfig();
            setImageConfig(config);
        }
        fetchConfig();
    }, []);

    const saveAsFavorite: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        navigate("#");
    }

    return (
        <Box
            overflow={"hidden"}
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
                    onClick={saveAsFavorite}
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
                    variant="subtitle1"
                    color={"var(--gray-400, #9CA3AF)"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    fontSize={{ laptop: "12px" }}
                    sx={{
                        marginBlock: "0.5rem",
                        textWrap: "balance"
                    }}
                >
                    <Typography
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        lineHeight={"inherit"}
                        fontSize={"inherit"}
                        sx={{
                            marginBlock: "inherit",
                            textWrap: "inherit"
                        }}
                    >
                        {originCountry}
                    </Typography>
                    <Typography
                        data-testid="movie-release-date"
                        component={"span"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        lineHeight={"inherit"}
                        fontSize={"inherit"}
                        sx={{
                            marginBlock: "inherit",
                            textWrap: "inherit"
                        }}
                    >
                        {date}
                    </Typography>
                </Typography>
                <Typography
                    variant="h2"
                    data-testid="movie-title"
                    color={"var(--gray-900, #111827)"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    fontSize={{ mobile: "1rem", laptop: "18px" }}
                    sx={{
                        marginBlock: "0.5rem",
                        textWrap: "balance",
                        cursor: "pointer",
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
                <Typography
                    variant="subtitle1"
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    color={"var(--gray-400, #9CA3AF)"}
                    fontSize={{ mobile: "12px" }}
                    sx={{
                        marginBlock: "0.5rem",
                        textWrap: "wrap"
                    }}
                >
                    {genres}
                </Typography>
            </Box>
        </Box>
    )
}