import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval=setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        }else{
          clearInterval(interval);
          return prevValue;
        }
      })
      
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>ProgressBar</h1>
      <div className="progress">
        <div className='inner' style={{ width: `${value}%` }}>
          
        </div>
        <span className='text'>{value}%</span>
      </div>
    </>
  );
}

export default App;
