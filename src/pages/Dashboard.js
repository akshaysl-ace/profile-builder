import { Container } from "@mui/material";
import ResumeBuilder from "../components/ResumeBuilder";
import NavBar from '../components/NavBar';

export default function Dashboard() {
    return (
        <>
            <Container>
                <NavBar />
                <ResumeBuilder />
            </Container>
        </>
    )
}
