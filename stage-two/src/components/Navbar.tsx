import { Avatar, Box, IconButton, Input, InputAdornment, Typography } from "@mui/material";
import { Logo, MenuButton, SearchIcon } from "../assets";
import { useContext } from "react";
import { LandingPageContext } from "../context/landingPageContext";
import getTopRatedMovies from "../configs/topRatedMovies";

export const Navbar: React.FC<{}> = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const { setMovies } = useContext(LandingPageContext);

    const searchForMovies: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = async (e) => {
        try {
            if (!e.target.value) {
                // handle instance where the text area is cleared
                getTopRatedMovies()
                    .then((topRatedMovies) => setMovies(topRatedMovies))
                    .catch((err) => console.log(err));
            } else {
                const fetchMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${API_KEY}`
                    }
                });
                const res = await fetchMovies.json();
                setMovies(res.results);
            }
        } catch (error) {
            console.log("There is an error");
        }
    }

    return (
        <Box
            display={"flex"}
            alignItems={{ mobile: "stretch", tablet: "center" }}
            justifyContent={"space-between"}
            gap={"var(--flexGap)"}
            flexWrap={"wrap"}
            sx={{
                paddingTop: `var(--cardPadding)`
            }}
        >
            {/* logo area */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--flexGap)",
                    overflow: "hidden",
                }}
            >
                <Avatar>
                    <Logo />
                </Avatar>
                <Typography
                    variant="subtitle1"
                    color={"#FFF"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"1"}
                    fontSize={{ laptop: "24px" }}
                >
                    MovieBox
                </Typography>
            </Box>

            {/* input field area */}
            <Input
                disableUnderline
                placeholder="What do you want to watch?"
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
                sx={{
                    border: "2px solid var(--gray-300, #D1D5DB)",
                    borderRadius: "6px",
                    padding: { mobile: "0 0.5rem", laptop: "0 var(--cardPadding)" },
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                    fontSize: { mobile: "12px", laptop: "16px" },
                    color: "var(--white, #FFF)",
                    width: { mobile: "stretch", tablet: "40%" },
                    order: { mobile: 3, tablet: "unset" }
                }}
                onChange={searchForMovies}
            />

            {/* sign-in button area */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--flexGap)",
                    overflow: "hidden"
                }}
            >
                <Typography
                    variant="subtitle1"
                    color={"#FFF"}
                    fontFamily={"DM Sans"}
                    fontWeight={700}
                    lineHeight={"1.5"}
                    fontSize={{ laptop: "16px" }}
                >
                    Sign in
                </Typography>
                <IconButton
                    sx={{
                        display: { mobile: "none", tablet: "inline-flex" },
                        backgroundColor: "var(--rose-700, #BE123C)",
                        ":hover": {
                            backgroundColor: "var(--rose-700, #BE123C)",
                        }
                    }}
                >
                    <MenuButton />
                </IconButton>
            </Box>
        </Box >
    )
}