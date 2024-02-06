import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/home.routes';
import ProjectPage from './routes/project.routes';
import DefaultPage from './routes/default.routes';
import Header from '@/components/header';
import Footer from "@/components/footer"
import * as React from 'react';

export default function AppRouter() {
  return (
    <div className='w-100'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/project' element={<ProjectPage />}>
          <Route path='/project/:projectId' element={<ProjectPage />} />
        </Route>
        <Route path='*' element={<DefaultPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

