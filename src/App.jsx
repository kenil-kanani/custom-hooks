
import { useEffect, useRef, useState } from 'react';
import './App.css'
import usePrevious from './hooks/usePrevious';
import useWindowSize from './hooks/useWindowSize';
import useGeoLocation from './hooks/useGeoLocation';
import useFetch from './hooks/useFetch';
import useDebounce from './hooks/useDebounce';
import useOnlineStatus from './hooks/useOnlineStatus';
import useHover from './hooks/useHover';
import useDarkMode from './hooks/useDarkMode';
import useOnClickOutside from './hooks/useOnClickOutside';

function App() {

  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  const size = useWindowSize();
  const [windowSize, setWindowSize] = useState(size);
  // const pos = useGeoLocation();

  const [inputText, setInputText] = useState("");
  const isOnline = useOnlineStatus();

  const divRef = useRef(null);
  const isHover = useHover(divRef);

  const [theme, setTheme, clearTheme] = useDarkMode();

  // useOnClickOutside(divRef, () => {
  //   setCount(count + 1);
  // })

  // const [loading, error, response] = useFetch("https://cat-fact.herokuapp.com/facts/", {
  //   method: "GET",
  //   redirect: "follow"
  // })

  useEffect(() => {
    setWindowSize({ width: size.width, height: size.height });
  }, [size])

  // useEffect(() => {
  // console.log('Latitude:', pos.latitude)
  // console.log('Longitude:', pos.longitude)
  // }, [pos]);

  return (
    <>
      {/* {loading ?
        <h1>Loading...</h1> :
        (
          response ? (
            <>
              {
                response.map(el => <li key={el._id}>{el.text}</li>)
              }
            </>
          ) :
            (
              <p>
                error
              </p>
            )
        )
      } */}

      <h1>Count: {count}</h1>
      <h1>Previous Count: {previousCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Use Window Size</h1>
      <p>Height : {windowSize.height}</p>
      <p>Width : {windowSize.width}</p>
      <h1>use Debounce</h1>
      <input type="text" onChange={useDebounce((e) => {
        setInputText(e.target.value)
      })} />
      Input Value : {inputText}

      <h1>Use Online Status : {isOnline ? "Online" : "Offline"}</h1>

      <h1>Use Hover : {isHover ? 'Yes, hovered' : 'Not at all'}</h1>
      <div ref={divRef} style={{
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      }}>
        This is div for testing hover...
      </div>

      <h1>Use Dark Mode : {theme}</h1>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
      <button onClick={() => clearTheme()}>Clear Theme</button>

    </>
  )
}

export default App
