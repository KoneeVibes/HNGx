import { Box } from "@mui/material";
import { MainContentProps } from "../types/app.type";
import { useEffect, useState } from "react";
import getImagesConfig from "../configs/tmdb";
import { ImageConfig } from "../types/config.type";
import "../styles/mainContent.css";

export const MainContent: React.FC<MainContentProps> = ({ position, right, id }) => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieDetails, setMovieDetails] = useState({} as Record<any, any>);
    const [imageConfig, setImageConfig] = useState<ImageConfig>();

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
                transition: "right .5s ease",
                padding: "var(--cardPadding) 0",
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${imageConfig?.secure_base_url}original${movieDetails.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom center",
                    borderRadius: "20px",
                    height: "449px",
                }}
            >

            </Box>
        </Box>
    )
}
