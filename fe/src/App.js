import './App.scss';
import Home from './components/Home';
import Intro from './components/Intro';
import Characters from './components/Characters';
import Game from './components/Game';
import NPC from './components/NPC';
import History from './components/History'
import { Route, Routes } from 'react-router-dom'
import './fonts/Triforce.ttf'
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

      <div className='container-fluid'>
        <main className='wrapper'>
          <Routes>
            <Route path='/' element={<Intro />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/history' element={<History/>}></Route>
            <Route path='/characters' element={<Characters/>}></Route>
            <Route path='/npcs' element={<NPC/>}></Route>
            <Route path='/games' element={<Game/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
