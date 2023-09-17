import { Box, Button, Chip, Divider, IconButton, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { MainContentProps } from "../types/app.type";
import { useEffect, useState } from "react";
import getImagesConfig from "../configs/imagesConfig";
import { ImageConfig } from "../types/config.type";
import "../styles/mainContent.css";
import { FavoriteIcon, OptionsIcon, ShowtimesIcon, WatchIcon } from "../assets";
import AdPoster from "../assets/adPoster.svg";

export const MainContent: React.FC<MainContentProps> = ({ position, right, id }) => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieDetails, setMovieDetails] = useState({} as Record<any, any>);
    const [imageConfig, setImageConfig] = useState<ImageConfig>();
    const [awardNominations, setAwardNominations] = useState("Age");

    const handleChange = (event: SelectChangeEvent<string>) => {
        setAwardNominations(event.target.value);
    };

    useEffect(() => {
        const getMovie = async () => {
            try {
                const fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${API_KEY}`
                    }
                });
                const res = await fetchMovie.json();
                setMovieDetails(res)
            } catch (error) {
                console.log(error)
            }
        }
        getMovie();
    }, [API_KEY, id]);

    useEffect(() => {
        async function fetchConfig() {
            const config = await getImagesConfig();
            setImageConfig(config);
        }
        fetchConfig();
    }, []);

    return (
        <Box
            sx={{
                position: { position },
                right: { right },
                transition: "all .5s ease",
                padding: "var(--cardPadding) 0",
                width: "100%",
            }}
        >
            {/* Video Player */}
            <Box
                sx={{
                    backgroundImage: `url(${imageConfig?.secure_base_url}original${movieDetails.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    borderRadius: "20px",
                    height: "449px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <IconButton
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.35)",
                        borderWidth: "2px",
                        borderColor: "rgba(232, 232, 232, 0.20)",
                        filter: "drop - shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
                        backdropFilter: "blur(2px)",
                    }}
                >
                    <WatchIcon />
                </IconButton>
                <Typography
                    variant="h1"
                    fontFamily={"Poppins"}
                    fontWeight={500}
                    lineHeight={"normal"}
                    color={"#E8E8E8"}
                    fontSize={{ mobile: "1rem", laptop: "25px" }}
                    sx={{
                        marginBlock: "0.5rem"
                    }}
                >
                    Watch Trailer
                </Typography>
            </Box>

            {/* Title bar */}
            <Box
                padding={"var(--cardPadding) 0"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"(var(--flexGap))"}
                flexWrap={"wrap"}
                overflow={"hidden"}
            >
                <Stack
                    direction={"row"}
                    spacing={2}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                >
                    <Typography
                        variant="h1"
                        fontFamily={"Poppins"}
                        fontWeight={500}
                        lineHeight={"normal"}
                        color={"#404040"}
                        fontSize={{ mobile: "1.2rem", laptop: "23px" }}
                        sx={{
                            textWrap: "balance",
                        }}
                    >
                        <Typography
                            data-testid="movie-title"
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            sx={{
                                textWrap: "inherit"
                            }}
                        >
                            {movieDetails.title}
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            padding={"0 0.5rem"}
                            sx={{
                                textWrap: "inherit"
                            }}
                        >
                            •
                        </Typography>
                        <Typography
                            data-testid="movie-release-date"
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            sx={{
                                textWrap: "inherit"
                            }}
                        >
                            {new Date(movieDetails.release_date).toUTCString()}
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            padding={"0 0.5rem"}
                            sx={{
                                textWrap: "inherit"
                            }}
                        >
                            •
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            sx={{
                                textWrap: "inherit"
                            }}
                        >
                            {movieDetails.adult ? "PG23" : "PG13"}
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            padding={"0 0.5rem"}
                            sx={{
                                textWrap: "inherit"
                            }}
                        >
                            •
                        </Typography>
                        <Typography
                            data-testid="movie-runtime"
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            sx={{
                                textWrap: "inherit"
                            }}
                        >
                            {movieDetails.runtime}
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            fontSize={"inherit"}
                            marginRight={"2rem"}
                        >
                            m
                        </Typography>
                    </Typography>
                    <Stack
                        direction={"row"}
                        spacing={movieDetails.genres?.length}
                        flexWrap={"wrap"}
                        marginLeft={"0 !important"}
                    >
                        {movieDetails.genres?.map((genre: Record<string, string>, i: number) => {
                            return (
                                <Chip
                                    key={i}
                                    component={"h6"}
                                    label={genre.name}
                                    variant="outlined"
                                    sx={{
                                        border: "1px solid #F8E7EB",
                                        borderRadius: "15px",
                                        color: "#B91C1C",
                                        fontFamily: "Poppins",
                                        fontSize: { laptop: "15px" },
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        margin: "0.3rem 2rem 0.3rem 0 !important",
                                    }}
                                />
                            )
                        })}
                    </Stack>
                </Stack>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    sx={{
                        padding: "0.5rem 0"
                    }}
                >
                    <FavoriteIcon />
                    <Typography
                        color={"#E8E8E8"}
                        fontFamily={"Poppins"}
                        fontWeight={500}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "25px" }}
                    >
                        {movieDetails.vote_average?.toFixed(1)}
                    </Typography>
                    <Divider orientation="vertical" flexItem sx={{
                        border: "2px solid #666666"
                    }} />
                    <Typography
                        color={"#666"}
                        fontFamily={"Poppins"}
                        fontWeight={500}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "20px" }}
                    >
                        {(movieDetails.vote_count > 1000) ? `${(movieDetails.vote_count / 1000)?.toFixed(0)}K` : (movieDetails.vote_count)?.toFixed(0)}
                    </Typography>
                </Stack>
            </Box>

            {/* Body/Overview */}
            <Box
                display={"flex"}
                gap={"var(--flexGap)"}
                flexWrap={"wrap"}
            >
                <Box
                    flex={{ tablet: 0.6 }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                    gap={"1rem"}
                    overflow={"hidden"}
                >
                    <Typography
                        data-testid="movie-overview"
                        variant="body1"
                        fontFamily={"Poppins"}
                        fontWeight={400}
                        lineHeight={"normal"}
                        color={"#333"}
                        fontSize={{ laptop: "20px" }}
                        sx={{
                            textWrap: "wrap"
                        }}
                    >
                        {movieDetails.overview}
                    </Typography>
                    <Typography
                        fontFamily={"Poppins"}
                        fontWeight={400}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "20px" }}
                    >
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            fontSize={"inherit"}
                            color={"#333"}
                        >
                            Director:
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            fontSize={"inherit"}
                            color={"#BE123C"}
                        >
                            {` ${"Lorem ipsum dolor sit"}`}
                        </Typography>
                    </Typography>
                    <Typography
                        fontFamily={"Poppins"}
                        fontWeight={400}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "20px" }}
                    >
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            fontSize={"inherit"}
                            color={"#333"}
                        >
                            Writers:
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            fontSize={"inherit"}
                            color={"#BE123C"}
                        >
                            {` ${"Lorem ipsum dolor sit"}`}
                        </Typography>
                    </Typography>
                    <Typography
                        fontFamily={"Poppins"}
                        fontWeight={400}
                        lineHeight={"normal"}
                        fontSize={{ laptop: "20px" }}
                    >
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            fontSize={"inherit"}
                            color={"#333"}
                        >
                            Stars:
                        </Typography>
                        <Typography
                            component={"span"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            lineHeight={"inherit"}
                            fontSize={"inherit"}
                            color={"#BE123C"}
                        >
                            {` ${"Lorem ipsum dolor sit"}`}
                        </Typography>
                    </Typography>
                    <Box
                        overflow={"hidden"}
                        display={"flex"}
                    >
                        <Button
                            disableElevation
                            variant="contained"
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: "#BE123C",
                                zIndex: 1,
                                ":hover": {
                                    backgroundColor: "#BE123C"
                                }
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                component={"span"}
                                whiteSpace={"normal"}
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    fontSize: { laptop: "20px" },
                                    textTransform: "capitalize",
                                }}
                            >
                                Top rated movie #65
                            </Typography>
                        </Button>
                        <Select
                            id="awardNominations"
                            value={awardNominations}
                            onChange={handleChange}
                            sx={{
                                width: "fill-available",
                                backgroundColor: "rgba(255, 255, 255, 0.80)",
                                border: "1px solid #C7C7C7",
                                borderRadius: "0px 10px 10px 0px",
                                outline: "none",
                                position: "relative",
                                right: "10px",
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                lineHeight: "normal",
                                color: "#333",
                                paddingLeft: "2rem !important",
                                fontSize: { laptop: "20px" }
                            }}
                        >
                            <MenuItem value={"Awards 8 nominations"}>Awards 8 nominations</MenuItem>
                            <MenuItem value={"Awards 9 nominations"}> Awards 9 nominations</MenuItem>
                            <MenuItem value={"Awards 10 nominations"}>Awards 10 nominations</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"1rem"}
                    flex={{ tablet: 0.4 }}
                    overflow={"hidden"}
                >
                    <Button
                        disableElevation
                        variant="contained"
                        startIcon={<ShowtimesIcon />}
                        sx={{
                            borderRadius: "10px",
                            backgroundColor: "#BE123C",
                            ":hover": {
                                backgroundColor: "#BE123C"
                            }
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            component={"span"}
                            whiteSpace={"normal"}
                            sx={{
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                lineHeight: "normal",
                                fontSize: { laptop: "20px" },
                                textTransform: "capitalize",
                                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)"
                            }}
                        >
                            See Showtimes
                        </Typography>
                    </Button>
                    <Button
                        disableElevation
                        variant="contained"
                        startIcon={<OptionsIcon />}
                        sx={{
                            border: "1px solid #BE123C",
                            borderRadius: "10px",
                            backgroundColor: "rgba(190, 18, 60, 0.10)",
                            ":hover": {
                                backgroundColor: "rgba(190, 18, 60, 0.10)"
                            }
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            component={"span"}
                            whiteSpace={"normal"}
                            sx={{
                                color: "#333",
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                lineHeight: "normal",
                                fontSize: { laptop: "20px" },
                                textTransform: "capitalize",
                            }}
                        >
                            More watch options
                        </Typography>
                    </Button>
                    <img src={AdPoster} alt="Ad Poster" style={{ width: "100%" }} />
                </Box>
            </Box>
        </Box >
    )
}
