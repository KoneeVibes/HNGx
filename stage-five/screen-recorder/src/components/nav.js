/*global chrome*/
import { Box, Stack, IconButton } from "@mui/material"
import { CloseIcon, Logo, SettingsIcon } from "../assets"

export const Nav = () => {
    const closePopup = () => {
        chrome.runtime.sendMessage({ type: 'close_popup' })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }

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
                    onClick={() => closePopup}
                >
                    <CloseIcon />
                </IconButton>
            </Stack>
        </Box>
    )
}