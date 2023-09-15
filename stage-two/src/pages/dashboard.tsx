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
                // used this position value since it doesn't destroy anything and it makees sense for the
                // positioned absolute child.
                sx={{
                    display: "flex"
                }}
            >
                <Sidebar />
                <PrimaryArea
                    id={id}
                />
            </Container>
        </DashboardContextProvider>
    )
}