import React from 'react';
import styled from '@emotion/styled';

import ProgressBar from '../ProgressBar';

const Container = styled.div`
  position: absolute;
  bottom: 48px;
  left: 50%;
  width: 600px;
  transform: translateX(-50%);
`;
const Task = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Squada One', cursive;
  font-size: 2.5em;
  text-transform: uppercase;
  color: #444;
`;
const TimeLeft = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  font-size: 1.5em;
  text-transform: uppercase;
  color: #EF3A37;
`;
const PomodorosLeft = styled.p`
  position: absolute;
  top: 0;
  left: 12px;
  transform: translateY(-50%);
`;

export default function Template({
  task, pomodoros, timeLeft, progress,
}) {
  return (
    <Container>
      <PomodorosLeft>
        {Array(pomodoros).fill('🍅')}
      </PomodorosLeft>
      <Task>{task}</Task>
      <ProgressBar progress={progress} />
      <TimeLeft>{ timeLeft }</TimeLeft>
    </Container>
  );
}
