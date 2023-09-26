import { Grid, Avatar, Container, Box, useMediaQuery } from "@mui/material";
import { navItems } from "../../Configs/app";
import headshot from "../../Assets/headshotMini.svg";
import "./styled.css";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export const Nav: React.FC<{}> = () => {

    const tabletScreenAndUpwards = useMediaQuery("(min-width: 768px)");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (tabletScreenAndUpwards) {
            setIsActive(false)
            document.body.style.overflowY = 'visible';
        }
    }, [tabletScreenAndUpwards, isActive])

    const handleIsActive = () => {
        if (!tabletScreenAndUpwards) {
            setIsActive(!isActive);
            if (isActive) {
                document.body.style.overflowY = 'visible';
            } else {
                document.body.style.overflowY = 'hidden';
            }
        }
    }

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "var(--navHeight)",
                gap: "1rem",
            }}
        >
            <Avatar
                src={headshot}
                alt="headshot"
                sx={{
                    zIndex: (isActive) ? "10" : undefined,
                    maxWidth: "100%",
                    height: (tabletScreenAndUpwards) ? undefined : "auto",
                }}
            />
            <Grid
                container
                spacing={8}
                sx={{
                    position: { mobile: "fixed", tablet: "static" },
                    top: { mobile: "var(--navHeight)", tablet: undefined },
                    left: (isActive) ? "0" : "-150%",
                    flexDirection: { mobile: "column", tablet: "row" },
                    justifyContent: { tablet: "center" },
                    background: { mobile: "#000000", tablet: undefined },
                    height: { mobile: "100%", tablet: undefined },
                    paddingTop: (isActive) ? "var(--navHeight)" : undefined,
                    transition: "all 0.3s ease-in-out",
                }}
            >
                {navItems.map((item, i) => {
                    return (
                        <Grid
                            component={"div"}
                            key={i} item
                            sx={{
                                textAlign: (isActive) ? "center" : "left",
                            }}
                            onClick={() => handleIsActive()}
                        >
                            <HashLink
                                to={item.link}
                                smooth={true}
                                target={item.target}
                                className="navLinks"
                            >
                                {item.name}
                            </HashLink>
                        </Grid>
                    )
                })}
            </Grid>
            <Box
                component={"button"}
                onClick={() => handleIsActive()}
                className={isActive ? "active" : undefined}
                sx={{
                    background: "none",
                    border: "none",
                    display: { mobile: "block", tablet: "none" },
                    overflow: "hidden",
                }}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </Box>
        </Container >
    )
}