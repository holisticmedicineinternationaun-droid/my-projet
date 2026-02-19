
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faculties from './pages/Faculties';
import News from './pages/News';
import Verify from './pages/Verify';
import Contact from './pages/Contact';
import RegistrationGift from './pages/RegistrationGift';
import CourseDetail from './pages/CourseDetail';
import AcademicAssistant from './components/AcademicAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-yellow-200 selection:text-blue-900" dir="rtl">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/registration-gift" element={<RegistrationGift />} />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/news" element={<News />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AcademicAssistant />
      </div>
    </Router>
  );
};

export default App;
