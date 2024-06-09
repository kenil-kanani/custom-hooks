
import { useEffect, useState } from 'react';
import './App.css'
import usePrevious from './hooks/usePrevious';
import useWindowSize from './hooks/useWindowSize';
import useGeoLocation from './hooks/useGeoLocation';

function App() {

  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  const size = useWindowSize();
  const pos = useGeoLocation();

  useEffect(() => {
    console.log('Latitude:', pos.latitude)
    console.log('Longitude:', pos.longitude)
  }, [pos]);

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Previous Count: {previousCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
