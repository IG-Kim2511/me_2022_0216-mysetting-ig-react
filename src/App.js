import { useEffect, useState } from 'react';
import axios from 'axios';

import { Awards, Intro, Navbar } from './container-sections';

import './App.css';




//  {/* js 1208. ~~~~~ */}
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://thronesapi.com/api/v2/Characters");

      console.log(result.data);
      setItems(result.data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      {/*🍀  test */}
      <h1 className="" style={{ background: "yellow" }}>
        test
      </h1>

      {/* containers , components*/}

      <Navbar />
      <Intro />
      <Awards />

      <div className="navbar"></div>
    </div>
  );
}

export default App;
