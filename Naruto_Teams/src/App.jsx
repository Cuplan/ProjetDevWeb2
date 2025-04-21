import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Vues/HomePage';
import NinjasPage from './Vues/NinjasPage';
import TeamPage from './Vues/TeamPage';
import NavBar from './Vues/NavBar';



function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ninjas" element={ <NinjasPage/> } />
        <Route path="/team" element={ <TeamPage/> } />
      </Routes>
    </>
  );
}

export default App