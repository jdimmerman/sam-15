import './App.css';
import React from 'react';

const PIECES_COUNT = 500;
const DIFF_THRESHOLD = 2;
const ME_DIFF = 3;
const TICK_RATE = 30;
const INITIAL_MOVEMENT_RATE = 2;
const TICK_DIV_TO_TIME = 20;
const SUCCESS_TIME = 3;

const getNextDiff = (lastDiff) => {
  if (lastDiff > 60) { 
    lastDiff = lastDiff - Math.random() * DIFF_THRESHOLD;
  } else if (lastDiff < -40) {
    lastDiff = lastDiff + Math.random() * DIFF_THRESHOLD;
  } else {
    lastDiff = lastDiff + Math.random() * DIFF_THRESHOLD * 2 - DIFF_THRESHOLD;
  }
  return lastDiff;
}

const getHeightArray = (existing = 0) => {
  const pieces = [];
  let diff = 0;
  for (let i = 0; i < PIECES_COUNT; i++) {
    diff = getNextDiff(diff);
    pieces.push(diff)
  }
  return pieces;
}

function App() {
  const [movementRate, setMovementRate] = React.useState(INITIAL_MOVEMENT_RATE);
  const [asteroidRate, setAsteroidRate] = React.useState(.05);
  const [meSize, setMeSize] = React.useState(15);
  const [ceilArray, setCeilArray] = React.useState(getHeightArray());
  const [floorArray, setFloorArray] = React.useState(getHeightArray());
  const [meTop, setMeTop] = React.useState(50);
  const [meLeft, setMeLeft] = React.useState(100);
  const upPress = useKeyPress("ArrowUp");
  const downPress = useKeyPress("ArrowDown");
  const leftPress = useKeyPress("ArrowLeft");
  const rightPress = useKeyPress("ArrowRight");
  const [asteroids, setAsteroids] = React.useState([]);
  const tickRef = React.useRef(1);
  const intervalRef = React.useRef();
  const [death, setDeath] = React.useState(false);
  const showDeathWarning = React.useMemo(() => death, [death]);
  const [prettyLady, setPrettyLady] = React.useState('');
  const [prettyLadyResponse, setPrettyLadyResponse] = React.useState('');
  const [prettyLadySuccess, setPrettyLadySuccess] = React.useState(false);

  const checkPrettyLady = React.useCallback(() => {
    const sanitizedPrettyLady = prettyLady.trim().toLowerCase().replace(/\s+/g, '');
    if (sanitizedPrettyLady === 'siena') {
      setPrettyLadyResponse('Yep.');
      setPrettyLadySuccess(true);
      return;
    }
    if (sanitizedPrettyLady === 'frog' || sanitizedPrettyLady === 'frogbog') {
      setPrettyLadySuccess(true);
      setPrettyLadyResponse('You even got the name right.');
      return;
    }
    if (sanitizedPrettyLady === 'ruby') {
      setPrettyLadySuccess(true);
      setPrettyLadyResponse("I'll take it.");
      return;
    }
    if (sanitizedPrettyLady === 'rosa') {
      setPrettyLadySuccess(true);
      setPrettyLadyResponse("Yeah she know it.");
      return;
    }
    if (sanitizedPrettyLady === 'grainne') {
      setPrettyLadyResponse("Oof. You've put me in a tough position. But, like, come on.... Try again");
    }
    setPrettyLadyResponse('Try again');
    setPrettyLadySuccess(false);
  }, [prettyLady]);

  const updateFloorOrCeil = React.useCallback(prevArray => {
  const lastDiff = prevArray[prevArray.length - 1];
  const newArray = [...prevArray.slice(movementRate)]
  for (let i = 0; i < movementRate; i++) {
    newArray.push(getNextDiff(lastDiff));
  }
  return newArray;
}, [movementRate]);

  const getNextCielAndFloor = React.useCallback(() => {
    setCeilArray(updateFloorOrCeil);
    setFloorArray(updateFloorOrCeil);
  }, [updateFloorOrCeil]);
  const moveMe = React.useCallback(() => {
    if (upPress !== downPress) {
      setMeTop(prevMeTop => upPress ? prevMeTop - ME_DIFF * 1.5 : prevMeTop + ME_DIFF * 1.5);
    }
    if (leftPress !== rightPress) {
      setMeLeft(prevMeLeft => leftPress ? prevMeLeft - ME_DIFF * 1.5 : prevMeLeft + ME_DIFF * 1.5);
    }
  }, [downPress, leftPress, rightPress, upPress]);
  const maybeMakeAsteroid = React.useCallback(() => {
    if (Math.random() < asteroidRate) {
      setAsteroids(prevAsteroids => {
        const top = 20 + Math.random() * 60;
        const width = Math.random() * 10 + 5;
        const height = Math.random() * 50 + 5
        const newA = [...prevAsteroids, {top, height, width, left: 100}];
        return newA;
      });
    }
  }, [asteroidRate]);
  const moveAsteroids = React.useCallback(() => {
    setAsteroids(prevAsteroids => {
      const newAsteroids = [];
      for (const prevAsteroid of prevAsteroids) {
        const newLeft = prevAsteroid.left - 100/PIECES_COUNT * movementRate;
        if (newLeft < 0 - prevAsteroid.width) {
          continue;
        }
        newAsteroids.push({...prevAsteroid, left: newLeft})
      }
      return newAsteroids;
    })
  }, [movementRate]);
  const checkIfMeDied = React.useCallback(() => {
    const deathBlocks = document.querySelectorAll('.piece, .asteroid');
    const me = document.querySelector('.me');
    const meBound = me.getBoundingClientRect();
    if (meLeft < 0) {
      setDeath(true);
      // TODO also if move too far right, die
      return;
    }
    for (const deathBlock of deathBlocks) {
      const blockBound = deathBlock.getBoundingClientRect();
      const overlap = !(meBound.right < blockBound.left || 
        meBound.left > blockBound.right || 
        meBound.bottom < blockBound.top || 
        meBound.top > blockBound.bottom
      );
      if (overlap) {
        setDeath(true);
      }
    }
  }, [meLeft]);
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (death) {
        clearInterval(intervalRef.current);
        return;
      }
      tickRef.current = tickRef.current + 1;
      setMovementRate(INITIAL_MOVEMENT_RATE + Math.ceil(tickRef.current * TICK_RATE / 4000));
      setAsteroidRate(prev => prev + 0.0001);
      setMeSize(prev => prev + 0.1);
      getNextCielAndFloor();
      moveMe();
      moveAsteroids();
      maybeMakeAsteroid();
      checkIfMeDied();
    }, TICK_RATE);
    return () => clearInterval(intervalRef.current);
  }, [checkIfMeDied, death, getNextCielAndFloor, maybeMakeAsteroid, moveAsteroids, moveMe]);



  return (
    <div className="app">
      <div className="you-died" style={{display: showDeathWarning ? 'block' : 'none'}}>
        You died!
        {tickRef.current / TICK_DIV_TO_TIME > SUCCESS_TIME && (
          <>
            <span> You did OK though. So riddle me this: <b>Who is the prettiest girl you know?</b></span><br/>
            <form onSubmit={(e) => { e.preventDefault(); return false;}}>
              <input onChange={(e) => setPrettyLady(e.target.value)} value={prettyLady} />
              <button type="submit" onClick={checkPrettyLady}>Submit</button>
            </form>
            <div><i>{prettyLadyResponse}</i></div>
          </>
        )}
        {tickRef.current / TICK_DIV_TO_TIME <= SUCCESS_TIME && (
          <>
            <span> Not great.</span>
            <button onClick={() => window.location.reload()}>Restart</button>
          </>
        )}
      </div>
      <div className="next-clue" style={{opacity: prettyLadySuccess ? '1' : '0'}}>
        Your next clue: blah blah blah TBD
      </div>
      <div className="clock">
        {Math.floor(tickRef.current / TICK_DIV_TO_TIME)}
      </div>
      <div className="ceiling">
        {ceilArray.map((diff, i) => <div key={i} className="piece" style={{width: `${100/PIECES_COUNT}%`, height: `${100 - diff}%`}} />)}
      </div>
      <div className="center">
        <div className="me" style={{width: meSize, height: meSize, top: meTop, left: meLeft}} />
        {asteroids.map((a, i) => <div key={i} className="asteroid" style={{
          top: `${a.top}%`,
          left: `${a.left}%`,
          width: a.width,
          height: a.height,
        }} />)}
      </div>
      <div className="floor">
        {floorArray.map((diff, i) => <div key={i} className="piece" style={{width: `${100/PIECES_COUNT}%`, height: `${100 - diff}%`}} />)}
      </div>
    </div>
  );
}

export default App;


function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = React.useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}