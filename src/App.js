


import Home from './routes/Home.routes';
import Project from './routes/Project.routes';
import Default from './routes/Default.routes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/home' element={<Home />} />
  <Route path='/project' element={<Project />}>
  <Route path=':projectID' element={<Project />} />
  </Route>
  <Route path='*' element={<Default />} />
  </Routes>
  )
}

export default App;