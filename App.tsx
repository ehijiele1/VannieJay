import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import InvestmentSolutions from './pages/InvestmentSolutions';
import Products from './pages/Products';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPreview from './components/BlogPreview';
import AIAssistant from './components/AIAssistant';
import { HelmetProvider } from 'react-helmet-async';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/investment-solutions" element={<InvestmentSolutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
        <AIAssistant />
      </Router>
    </HelmetProvider>
  );
};

export default App;