import { Box, Button, Grid, Typography } from "@mui/material"
import { Card } from "./Card"
import { ForwardIcon } from "../assets"
import { useEffect, useState, useContext } from "react"
import { Movie } from "../types/app.type"
import { LandingPageContext } from "../context/landingPageContext"
import getTopRatedMovies from "../configs/topRatedMovies"

export const MovieList = () => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const maxMoviesDisplayed = 10;
    const { movies, setMovies } = useContext(LandingPageContext);
    const [originCountriesAndGenres, setOriginCountriesAndGenres] = useState<Record<number, Record<string, any>>>({});
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState<number>(maxMoviesDisplayed);

    const updateMovieList = () => {
        // logic for instance where the endIndex is at or more than the movie.length i.e total available movies and
        // there is no batch of maxMoviesDisplayed behind the queue.
        if (movies && endIndex >= movies?.length && startIndex === 0) return //update button to render "nothing less or more, lol"

        if (movies && endIndex >= movies?.length) {
            // handle instance where the end index (which is always a multiple of maxMoviesDisplayed)
            // is more than the movies array length. That's absolutely a see-previous condition;
            setStartIndex(startIndex - maxMoviesDisplayed);
            setEndIndex(startIndex);
        } else {
            // else, you would need to see more.
            setStartIndex(startIndex + maxMoviesDisplayed);
            setEndIndex(endIndex + maxMoviesDisplayed);
        }
    }

    useEffect(() => {
        getTopRatedMovies()
            .then((topRatedMovies) => setMovies(topRatedMovies))
            .catch((err) => console.log(err));
    }, [API_KEY, setMovies]);

    useEffect(() => {
        const getOriginCountryAndGenres = async (id: number) => {
            try {
                const fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${API_KEY}`
                    }
                });

                const res = await fetchMovie.json();
                if (!res.id) return console.log("Server cannot send a valid response", res);

                setOriginCountriesAndGenres((prev) => ({
                    ...prev,
                    [id]: {
                        originCountry: res.production_countries[0]?.iso_3166_1 || "Nigeria",
                        genres: res.genres?.map((genre: Record<string, any>) => genre.name) || ""
                    }
                }));

            } catch (error) {
                console.log("code broken");
            }
        }

        movies?.forEach((movie: Movie) => {
            if (!originCountriesAndGenres[movie.id]) {
                getOriginCountryAndGenres(movie.id);
            }
        });

    }, [API_KEY, movies, originCountriesAndGenres]);


    return (
        <Box
            padding={"0 var(--pagePadding) 4rem"}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={{ mobile: "var(--cardPadding) 0", tablet: "calc(2 * var(--cardPadding)) 0" }}
                gap={"1rem"}
                overflow={"hidden"}
            >
                <Typography
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"normal"}
                    fontSize={{ mobile: "16px", tablet: "24px", laptop: "30px", desktop: "36px" }}
                    sx={{
                        textWrap: "balance"
                    }}
                >
                    Featured Movie
                </Typography>
                <Button
                    startIcon={
                        (startIndex !== 0 || endIndex !== maxMoviesDisplayed) ? <ForwardIcon style={{ transform: "rotate(-180deg)" }} /> : ""
                    }
                    endIcon={
                        (startIndex !== 0 || endIndex !== maxMoviesDisplayed) ? "" : <ForwardIcon />
                    }
                    sx={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        lineHeight: 1.3,
                        fontSize: { laptop: "18px" },
                        color: "var(--rose-700, #BE123C)",
                        textTransform: "initial"
                    }}
                    onClick={updateMovieList}
                >
                    {/* you want to see previous if there is still a batch of maxMoviesDisplayed behind the queue */}
                    {(startIndex !== 0 || endIndex !== maxMoviesDisplayed) ? "See previous" : "See more"}
                </Button>
            </Box>
            <Grid
                container
                spacing={{ mobile: 2.5, tablet: 10 }}
            >
                {movies?.slice(startIndex, endIndex).map((movie: Movie, i) => {
                    return (
                        <Grid
                            item
                            key={i}
                            mobile={12}
                            miniTablet={6}
                            tablet={4}
                            desktop={3}
                            data-testid="movie-card"
                        >
                            <Card
                                key={i}
                                id={movie.id}
                                filePath={movie.poster_path}
                                title={movie.title}
                                originCountry={`${originCountriesAndGenres[movie.id]?.originCountry || "Loading..."}, `}
                                genres={originCountriesAndGenres[movie.id]?.genres.join(", ") || "Loading"}
                                justifyContent="space-between"
                                date={movie.release_date}
                                fraction={Math.round((movie.vote_average * 10) * 10) / 10}
                                percentage={Math.round(movie.vote_average * 10)}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Box >
    )
}
