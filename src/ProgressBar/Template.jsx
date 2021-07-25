import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 72px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: rgba(0,0,0,0.1);
`;
const Bar = styled.div`
  width: ${({ length }) => length}%;
  height: 72px;
  background: #42BABB;
  border-radius: 4px;
`;

export default function ProgressBar({ progress }) {
  return (
    <Container>
      <Bar length={progress} />
    </Container>
  );
}
