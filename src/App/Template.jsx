import React from 'react';
import styled from '@emotion/styled';

import Timer from '../Timer';

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
`;
const ButtonStart = styled.button``;

export default function Template({
  pomodoros, timeLeft, progress, onClick,
}) {
  return (
    <Container>
      <Timer
        task="Hello, world!"
        pomodoros={pomodoros}
        timeLeft={timeLeft}
        progress={progress}
      />
      <ButtonStart onClick={onClick}>Start Pomodoro</ButtonStart>
    </Container>
  );
}
