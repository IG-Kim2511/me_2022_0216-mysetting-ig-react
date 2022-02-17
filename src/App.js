
import { Navbar } from './components';
import { Awards, Intro } from './container-sections';

import './App.css';


function App() {
  return (

    <div>
      {/*🍀  test */}      
      <div className="" style={{ background: 'yellow'}}>test</div>

      {/* containers , components*/}

      <Navbar/>    
      <Intro/>
      <Awards/> 
    </div>
  );
}

export default App;
