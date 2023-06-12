import './App.scss';
import { Data1 } from './components/Data1';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <main className='wrapper'>
          <Layout slides={Data1} />
        </main>
      </div>
    </div>
  );
}

export default App;
