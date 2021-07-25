import React from 'react';
import { render } from '@testing-library/react';

import Timer from '.';

describe('Timer', () => {
  context('when it renders', () => {
    it('is not null', () => {
      const { container } = render(<Timer />);

      expect(container).not.toBeNull();
    });
  });
});
