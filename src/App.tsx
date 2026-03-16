import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IEPMeetingGuide from './pages/IEPMeetingGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iep-meeting-guide" element={<IEPMeetingGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
