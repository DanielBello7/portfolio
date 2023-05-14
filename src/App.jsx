import { Routes, Route } from 'react-router-dom';
import Default from './routes/Default.routes';
import Home from './routes/Home.routes';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ToastComponent from './components/ToastComponent';
import SuspenseScreen from './modules/SuspenseScreen';

const Project = React.lazy(() => import('./routes/Project.routes'));

function MainApp() {
    return (
        <div className='w-100'>
            <HeaderComponent />
            <React.Suspense fallback={<SuspenseScreen />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/project' element={<Project />}>
                        <Route path='/project/:projectID' element={<Project />} />
                    </Route>
                    <Route path='*' element={<Default />} />
                </Routes>
            </React.Suspense>
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