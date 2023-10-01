import { Container } from "@mui/material"
import { Logo } from "../../assets"
import { AuthForm } from "../../components/authForm"

export const Auth: React.FC<{}> = () => {
    return (
        <Container>
            <Logo />
            <AuthForm />
        </Container>
    )
}