import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import CV from './pages/CV.jsx';
import Repositories from './pages/Repositories.jsx';

/* 
   APP SHELL
   ------------------------------------------------------------
   Shared layout (Nav + Footer) wrapped around one route per
   page. To add a new page:
     1. Create /src/pages/NewPage.jsx
     2. Add a <Route> below
     3. Add a link in /src/components/Nav.jsx
*/

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
