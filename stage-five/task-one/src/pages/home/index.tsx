import { Container } from "@mui/material"
import { Nav } from "../../components/nav"
import { Hero } from "../../components/hero"
import { Features } from "../../components/features"
import { Separator } from "../../components/separator"
import { HowItWorks } from "../../components/howItWorks"
import { Footer } from "../../components/footer"

export const Home = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
        >
            <Nav />
            <Hero />
            <Separator />
            <Features />
            <Separator />
            <HowItWorks />
            <Footer />
        </Container>
    )
}