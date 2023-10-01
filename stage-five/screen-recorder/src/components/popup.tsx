import { Container, Typography } from "@mui/material";
import { Form } from "./form";
import { Nav } from "./nav";

export const Popup: React.FC<{}> = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
                borderRadius: "var(--Outer-Radius, 24px)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem"
            }}
        >
            <Nav />
            <Typography
                fontFamily={"Work Sans"}
                fontWeight={400}
                fontSize={"14px"}
                lineHeight={"normal"}
                color={"var(--primary-primary-400, #413C6D)"}
            >
                This extension helps you record and share help videos with ease.
            </Typography>
            <Form />
        </Container>
    )
}