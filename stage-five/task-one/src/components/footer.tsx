import { Grid, Stack, Typography } from "@mui/material";
import { FooterLogo } from "../assets";
import { footerColumns } from "../config/footerInfo";

export const Footer: React.FC<{}> = () => {
    return (
        <Grid
            container
            padding={"calc(var(--sectionMargin) * 2) var(--pagePadding)"}
            sx={{
                backgroundColor: "var(--primary-main, #120B48)"
            }}
            direction={{ mobile: "column", laptop: "row" }}
            flexWrap={"nowrap"}
            gap={"4rem"}
            justifyContent={"space-between"}
        >
            <Grid
                item
                flex={.25}
                overflow={"hidden"}
            >
                <FooterLogo />
            </Grid>
            <Grid
                item
                container
                flex={.75}
                gap={"4rem"}
                justifyContent={"space-between"}
            >
                {footerColumns.map((column, i) => {
                    return (
                        <Stack
                            key={i}
                            gap={"var(--flexGap)"}
                            overflow={"hidden"}
                        >
                            <Typography
                                variant="h3"
                                fontFamily={"Sora"}
                                fontWeight={600}
                                fontSize={{ mobile: "16px" }}
                                lineHeight={"normal"}
                                color={"#FFF"}
                            >
                                {column.header}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component={"a"}
                                href={column.itemI.url}
                                fontFamily={"Work Sans"}
                                fontWeight={400}
                                fontSize={{ mobile: "16px" }}
                                lineHeight={"normal"}
                                color={"#FFF"}
                                sx={{
                                    textDecoration: "none"
                                }}
                            >
                                {column.itemI.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component={"a"}
                                href={column.itemII.url}
                                fontFamily={"Work Sans"}
                                fontWeight={400}
                                fontSize={{ mobile: "16px" }}
                                lineHeight={"normal"}
                                color={"#FFF"}
                                sx={{
                                    textDecoration: "none"
                                }}
                            >
                                {column.itemII.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component={"a"}
                                href={column.itemIII.url}
                                fontFamily={"Work Sans"}
                                fontWeight={400}
                                fontSize={{ mobile: "16px" }}
                                lineHeight={"normal"}
                                color={"#FFF"}
                                sx={{
                                    textDecoration: "none"
                                }}
                            >
                                {column.itemIII.title}
                            </Typography>
                        </Stack>
                    )
                })}
            </Grid>
        </Grid>
    )
}