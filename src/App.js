import { Container } from '@mui/material';
import './App.css';
import ResumeBuilder from './components/ResumeBuilder';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <ResumeBuilder />
      </Container>
    </>

  );
}

export default App;
