import { Container } from '@mui/material'
import './App.css'
import ResumeBuilder from './components/ResumeBuilder'
import NavBar from './components/NavBar'
import ForumHome from './components/forum/ForumHome'
import ForumView from './components/forum/ForumView'
import ForumAdd from './components/forum/ForumAdd'

function App() {
  return (
    <>
      <Container>
        <NavBar />
        {/* <ForumHome /> */}
        {/* <ForumAdd /> */}
        <ForumView
          date='28 Oct, 2023'
          title={'Title Title Title Title'}
          author='John Doe'
          tags={['React', 'Java']}
          content={`This is the te content\n This is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\n`}
        />
        {/* <ResumeBuilder /> */}
      </Container>
    </>
  )
}

export default App
