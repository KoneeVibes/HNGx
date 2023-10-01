import { Stack, Typography, Switch } from "@mui/material";
import { SwitchButtonPropsType } from "../types/app.type";

export const SwitchButton: React.FC<SwitchButtonPropsType> = ({ Action, Icon }) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            padding={"var(--Inner-Radius, 12px) var(--Inner-Radius, 12px) var(--Inner-Radius, 12px) 16px"}
            justifyContent={"space-between"}
            borderRadius={"var(--Inner-Radius, 12px)"}
            border={"1px solid var(--primary-primary-600, #100A42)"}
        >
            <Icon />
            <Typography
                variant="caption"
                fontFamily={"Work Sans"}
                fontWeight={500}
                fontSize={"14px"}
                lineHeight={"normal"}
                color={"var(--primary-primary-600, #100A42)"}
            >
                {Action}
            </Typography>
            <Switch />
        </Stack>
    )
}