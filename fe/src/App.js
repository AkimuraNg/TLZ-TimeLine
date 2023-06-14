import './App.scss';
import Home from './components/Home';
import Intro from './components/Intro';
// import { Data1 } from './components/Data_files/Data1';
// import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom'
import './fonts/Triforce.ttf'
import Characters from './components/Characters';



function App() {
  return (
    <div className="App">

      <div className='container-fluid'>
        <main className='wrapper'>
          {/* <Layout slides={Data1} /> */}
          <Routes>
            <Route path='/' element={<Intro />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/characters' element={<Characters/>}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
