import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from '.';

describe('ProgressBar', () => {
  context('when it renders', () => {
    it('is not null', () => {
      const { container } = render(<ProgressBar />);

      expect(container).not.toBeNull();
    });
  });
});
