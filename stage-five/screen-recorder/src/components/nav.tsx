import { Box, Stack, IconButton } from "@mui/material"
import { CloseIcon, Logo, SettingsIcon } from "../assets"
import { Context } from "../context";
import { useContext } from "react";

export const Nav: React.FC<{}> = () => {

    const { setClosePopup } = useContext(Context)

    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Logo />
            <Stack
                direction={"row"}
            >
                <IconButton aria-label="settings icon" >
                    <SettingsIcon />
                </IconButton>
                <IconButton
                    aria-label="close-icon"
                    onClick={() => setClosePopup(true)}
                >
                    <CloseIcon />
                </IconButton>
            </Stack>
        </Box>
    )
}