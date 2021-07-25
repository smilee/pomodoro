import React from 'react';

import Template from './Template';

export default function Timer({
  task, pomodoros, timeLeft, progress,
}) {
  return (
    <Template
      task={task}
      pomodoros={pomodoros}
      timeLeft={timeLeft}
      progress={progress}
    />
  );
}
