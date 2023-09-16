import { useParams } from "react-router-dom"
import { Sidebar } from "../components/Sidebar";
import { PrimaryArea } from "../components/PrimaryArea";
import { DashboardContextProvider } from "../context/dashboardContext";
import { Container } from "@mui/material";

export const Dashboard = () => {
    const { id } = useParams();

    return (
        <DashboardContextProvider>
            <Container
                maxWidth={false}
                disableGutters
            >
                <Sidebar />
                <PrimaryArea
                    id={id}
                />
            </Container>
        </DashboardContextProvider >
    )
}