import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
const Contact = lazy(() => import('./pages/contact/Contact'));
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Skills = lazy(() => import('./pages/skills/Skills'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const Blogs = lazy(() => import('./pages/blogs/Blogs'));
const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));
const Header = lazy(() => import('./components/Header'));

const App = () => (
  <Router basename='/react-portifolio'>
    <Header />  
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
    <Footer />
  </Router>
);

export default App;
