import React from 'react';
import { render } from '@testing-library/react';

import App from '.';

describe('App', () => {
  context('when it renders', () => {
    it('is not null', () => {
      const { container } = render(<App />);

      expect(container).not.toBeNull();
    });
  });
});
