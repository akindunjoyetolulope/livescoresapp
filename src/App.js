import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './layouts/Header';
import AllCompetitions from './pages/allCompetitions';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Competition from './pages/Competition';



function App() {
  

  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route  path='/' element={<AllCompetitions />}/>
        <Route  path="competition/:id" element={<Competition />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
