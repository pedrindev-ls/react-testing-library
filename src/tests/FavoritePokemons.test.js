import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('Testa se no Component Favorite Pokemon', () => {
  test('Aparece "No favorite pokemon found" caso não haja pokemon favoritado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const noFavs = screen.getByText(/No favorite pokemon found/i);
    expect(noFavs).toBeInTheDocument();
  });

  test('Aparece todos os pokemons favoritados', () => {

  });
});
