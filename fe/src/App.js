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
import Navbar from './components/Navbar';
// import games from './components/Data_files/games';

import AOS from 'aos'
import 'aos/dist/aos.css'
import Timeline from './components/Timeline';



function App() {
  // const timelineData = [
  //   { id: 1, title: 'Skyward Sword', branch: 'Branch of Time' },
  //   { id: 2, title: 'Ocarina of Time', branch: 'Branch of Time' },
  //   { id: 3, title: 'Twilight Princess', branch: 'Branch of Twilight' },
  //   { id: 4, title: 'Breath of the Wild', branch: 'Branch of the Wild' }
  // ]
  AOS.init()
  return (
    <div className="App">

      <div className='container-fluid'>
        <Navbar />
        <main className='wrapper'>
          <Routes>
            <Route path='/' element={<Intro />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/characters' element={<Characters />}></Route>
            <Route path='/npcs' element={<NPC />}></Route>
            <Route path='/games' element={<Game />}></Route>
            <Route path='/timeline' element={<Timeline />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
