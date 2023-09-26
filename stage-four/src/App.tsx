import { ThemeProvider } from '@mui/material';
import './App.css';
import { Hero } from './Components/Hero';
import { Nav } from './Components/Nav';
import { theme } from './Theme';
import { About } from './Components/About';
import { Clients } from './Components/Clients';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { Footer } from './Components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Hero />
      <About />
      <Clients />
      <Projects />
      <Skills />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
