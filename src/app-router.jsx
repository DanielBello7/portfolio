import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import HomePage from './routes/home.routes';
import ProjectPage from './routes/project.routes';
import DefaultPage from './routes/default.routes';
import Header from '@/components/header';
import Footer from "@/components/footer"
import * as React from 'react';

export default function AppRouter() {
  const location = useLocation();
  return (
    <div className='w-100'>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route key="home" path='/' element={<HomePage />} />
          <Route key="home" path='/home' element={<HomePage />} />
          <Route key="project" path='/project' element={<ProjectPage />}>
            <Route key="project" path='/project/:projectId' element={<ProjectPage />} />
          </Route>
          <Route path='*' element={<DefaultPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

