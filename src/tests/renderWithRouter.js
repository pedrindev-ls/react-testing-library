import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

function renderWithRouter(component) {
  const history = createMemoryHistory();

  const renderItems = render(
    <Router history={ history }>
      {' '}
      { component }
      {' '}
    </Router>,
  );

  return { history, ...renderItems };
}

export default renderWithRouter;
