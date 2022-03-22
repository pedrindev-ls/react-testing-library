import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('Testa se Ao digitar um url errado', () => {
  test('Aparece o texto "Page requested not found 😭"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/aleatorio');
    const text = screen
      .getByRole('heading', { name: /Page requested not found/i }, { level: 2 });
    expect(text).toBeInTheDocument();
  });

  test('Aparece uma imagem com a url "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/aleatorio');
    const image = screen
      .getByAltText('Pikachu crying because the page requested was not found')
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
