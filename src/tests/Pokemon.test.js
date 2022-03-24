import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('Teste se o Component Pokemon', () => {
  const URL = '/pokemons/25';
  test('Aparece um box com as informações detalhadas', () => {
    const { history } = renderWithRouter(<App />);
    history.push(URL);
    const pokeName = screen.getByTestId('pokemon-name').innerHTML;
    const pokeType = screen.getByTestId('pokemon-type').innerHTML;
    const pokeWeight = screen.getByTestId('pokemon-weight').innerHTML;
    const pokeImg = screen.getByAltText('Pikachu sprite');
    expect(pokeName).toBe('Pikachu');
    expect(pokeType).toBe('Electric');
    expect(pokeWeight).toBe('Average weight: 6.0 kg');
    expect(pokeImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Se existe um link no card para mais informações', () => {
    renderWithRouter(<App />);
    const infoLink = screen.getByRole('link', { name: 'More details' });
    expect(infoLink).toHaveAttribute('href', URL);
  });

  test('Se ao clicar no link é feito o redirecionamento da aplicação', () => {
    const { history } = renderWithRouter(<App />);
    const infoLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(infoLink);
    expect(history.location.pathname).toBe(URL);
  });

  test('Mostra o icone de favorito nos pokemons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    history.push(URL);
    const favButton = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favButton);
    const favImg = screen.getByAltText('Pikachu is marked as favorite');
    expect(favImg).toHaveAttribute('src', '/star-icon.svg');
  });
});
