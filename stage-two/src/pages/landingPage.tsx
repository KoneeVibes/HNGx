import { Container } from "@mui/material";
import { Header } from "../components/Header";
import { MovieList } from "../components/MovieList";
import { Footer } from "../components/Footer";
import { LandingPageContextProvider } from "../context/landingPageContext";

export const LandingPage = () => {
    return (
        <LandingPageContextProvider>
            <Container
                maxWidth={false}
                disableGutters
            >
                <Header />
                <MovieList />
                <Footer />
            </Container>
        </LandingPageContextProvider>
    )
}
