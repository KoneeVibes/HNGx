import { Box } from "@mui/material";
import HeaderBg from "../assets/headerBg.svg";
import { Navbar } from "./Navbar";
import { DescriptionBox } from "./DescriptionBox";

export const Header: React.FC<{}> = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${HeaderBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom center",
                padding: `0 var(--pagePadding)`
            }}
        >
            <Navbar />
            <DescriptionBox />
        </Box>
    )
}