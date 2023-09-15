import { Container } from "@mui/material";
import { Header } from "../components/Header";
import { MovieList } from "../components/MovieList";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
    return (
        <Container
            maxWidth={false}
            disableGutters
        >
            <Header />
            <MovieList />
            <Footer />
        </Container>
    )
}
