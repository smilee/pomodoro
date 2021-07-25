import React, {
  useReducer, useRef, useEffect, useCallback,
} from 'react';
import moment from 'moment';

import Template from './Template';

const pomodoroDuration = 600;
const audio = new Audio('../../assets/sound/198841__bone666138__analog-alarm-clock.wav');

const initialState = {
  playSound: false,
  timer: 0,
  timeLeft: moment.utc((pomodoroDuration) * 1000).format('HH:mm:ss'),
  progress: 0,
  pomodoros: 0,
};

function reducer(state, action) {
  switch (action.type) {
  case 'start':
    return {
      ...state,
      timer: state.timer + 1,
      timeLeft: moment.utc((pomodoroDuration - state.timer) * 1000).format('HH:mm:ss'),
      progress: (state.timer / pomodoroDuration) * 100,
      pomodoros: state.pomodoros,
    };
  case 'end':
    return {
      ...state,
      pomodoros: state.pomodoros + 1,
    };
  case 'resetTimer':
    return {
      ...state,
      timer: 0,
      timeLeft: moment.utc((pomodoroDuration) * 1000).format('HH:mm:ss'),
      progress: 0,
    };
  default:
    throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const countRef = useRef(null);
  const interval = 1000;
  const handleStart = useCallback(() => {
    countRef.current = setInterval(() => {
      dispatch({ type: 'start' });
    }, interval);
  }, [countRef.current]);
  const handleEnd = useCallback(() => {
    clearInterval(countRef.current);
    dispatch({ type: 'end' });
    audio.play();
  }, [countRef.current]);
  const handleRestart = useCallback(() => {
    dispatch({ type: 'resetTimer' });
  }, [state]);

  const handleClick = useCallback(() => {
    if (state.pomodoros >= 1) {
      handleRestart();
    }
    handleStart();
  }, [state.pomodoros]);

  useEffect(() => {
    if (state.progress < 100) {
      return;
    }
    handleEnd();
  }, [state.progress]);

  return (
    <Template
      pomodoros={state.pomodoros}
      timeLeft={state.timeLeft}
      progress={state.progress}
      onClick={handleClick}
    />
  );
}
