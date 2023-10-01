import { Stack, Button, Typography } from "@mui/material";
import { SwitchButton } from "./switch";
import { MicrophoneIcon, VideoCameraIcon } from "../assets";
import { Context } from "../context";
import { useContext } from 'react'

export const Form: React.FC<{}> = () => {

    const { setClosePopup } = useContext(Context)

    return (
        <Stack
            gap={"2rem"}
        >
            <SwitchButton
                Action="Camera"
                Icon={MicrophoneIcon}
            />
            <SwitchButton
                Action="Audio"
                Icon={VideoCameraIcon}
            />
            <Button
                onClick={() => setClosePopup(true)}
                sx={{
                    padding: "16px",
                    borderRadius: "var(--Inner-Radius, 12px)",
                    backgroundColor: "var(--primary-main, #120B48)",
                    ":hover": {
                        backgroundColor: "var(--primary-main, #120B48)",
                    }
                }}
            >
                <Typography
                    variant="h6"
                    component={"span"}
                    fontFamily={"Work Sans"}
                    fontWeight={500}
                    fontSize={"16px"}
                    lineHeight={"normal"}
                    color={"#FAFDFF"}
                    textTransform={"capitalize"}
                >
                    Start Recording
                </Typography>
            </Button>
        </Stack>
    )
}