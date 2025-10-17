import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Layout from './components/Layout';
import ClickMe from './components/ClickMe';
import Mail from './pages/Mail';

function App() {

  return (
    <BrowserRouter>
      <Layout>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to='/projects' replace/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/got-you" element={<ClickMe />} />
              <Route path="/sent-msg" element={<Mail/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      </Layout>
    </BrowserRouter>
  )
}

export default App
