import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Spiral from './components/Spiral';

import Homepage from './components/Homepage';

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }, []);

  return (
    <div className='bg-[#10172a]'>
      <Navbar />
      {load ? <Spiral /> : <Homepage />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;
