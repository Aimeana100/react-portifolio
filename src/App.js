import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
const Blog = lazy(() => import('./pages/blog/Blog'));
const Blogs = lazy(() => import('./pages/blogs/Blogs'));
const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));
const Home = lazy(() => import('./pages/home/Home'));
const Header = lazy(() => import('./components/Header'));

const App = () => (
  <Router>
    <Header />  
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
