import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('Teste seo componente App', () => {
  test('possui os links de navegação "Home', () => {
    renderWithRouter(<App />);
    const navLinks = screen.getByText(/home/i);
    expect(navLinks).toBeInTheDocument();
  });

  test('possui os links de navegação "About', () => {
    renderWithRouter(<App />);
    const navLinks = screen.getByText(/About/i);
    expect(navLinks).toBeInTheDocument();
  });

  test('possui os links de navegação "Favotite Pokemons', () => {
    renderWithRouter(<App />);
    const navLinks = screen.getByText(/Favorite Pokémons/i);
    expect(navLinks).toBeInTheDocument();
  });
});
