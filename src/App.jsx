import { Routes, Route } from 'react-router-dom';
import Project from './routes/Project.routes';
import Default from './routes/Default.routes';
import Home from './routes/Home.routes';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ToastComponent from './components/ToastComponent';

function MainApp() {
    return (
        <div className='w-100'>
            <HeaderComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/project' element={<Project />}>
                    <Route path='/project/:projectID' element={<Project />} />
                </Route>
                <Route path='*' element={<Default />} />
            </Routes>
            <FooterComponent />
        </div>
    )
}

function App() {
    return (
        <React.Fragment>
            <MainApp />
            <ToastComponent />
        </React.Fragment>
    )
}

export default React.memo(App);