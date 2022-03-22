import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('Teste se na página About', () => {
  test('Existem informações sobre a pokedex', () => {
    renderWithRouter(<App />);
    const linkToAbout = screen.getByText(/About/i);
    userEvent.click(linkToAbout);
    const pokedexText = screen.getByText(/digital encyclopedia containing all Pokémons/i);
    expect(pokedexText).toBeInTheDocument();
  });

  test('Contem um h2 com o texto "About Pokédex"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const title = screen.getByRole('heading', { name: /About Pokédex/i }, { level: 2 });
    expect(title).toBeInTheDocument();
  });

  test('Contem dois paragrafos', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const p1 = screen.getByText(/digital encyclopedia containing all Pokémons/i);
    const p2 = screen.getByText(/filter Pokémons by type/i);
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  test('Contem uma imagem', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const image = screen.getByAltText('Pokédex');
    // expect(image).toHaveAttribute('alt', 'Pokédex');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
