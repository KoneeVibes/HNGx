import { Avatar, Box, IconButton, Input, InputAdornment, Typography } from "@mui/material";
import { Logo, MenuButton, SearchIcon } from "../assets";

export const Navbar: React.FC<{}> = () => {
    return (
        <Box
            display={"flex"}
            alignItems={{ mobile: "stretch", tablet: "center" }}
            justifyContent={"space-between"}
            gap={"var(--flexGap)"}
            // flexDirection={{ mobile: "column", tablet: "row" }}
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