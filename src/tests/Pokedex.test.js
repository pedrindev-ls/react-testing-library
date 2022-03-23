import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const { screen } = require('@testing-library/react');

describe('Teste se no componente Pokedex', () => {
  test('Existe um h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading',
      { name: /Encountered pokémons/i }, { level: 2 });
    expect(title).toBeInTheDocument();
  });

  test('o botão "Proximo pokemon" está funcionando', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', { name: /Próximo pokémon/i });
    const firstPoke = screen.getByText(/Pikachu/i);
    expect(firstPoke).toBeInTheDocument();
    userEvent.click(btn);
    const scndPoke = screen.getByText(/Charmander/i);
    expect(scndPoke).toBeInTheDocument();
    const SEIS = 6;
    for (let index = 0; index <= SEIS; index += 1) {
      userEvent.click(btn);
    }
    const lastPoke = screen.getByText(/Dragonair/i);
    expect(lastPoke).toBeInTheDocument();
    userEvent.click(btn);
    const firstPoke2 = screen.getByText(/Pikachu/i);
    expect(firstPoke2).toBeInTheDocument();
  });

  test('Aparece apenas um pokemon por vez', () => {
    renderWithRouter(<App />);
    const textDetails = screen.getAllByRole('link', { name: /More details/i });
    expect(textDetails).toHaveLength(1);
  });

  test('Existem os botões de filtro', () => {
    renderWithRouter(<App />);
    const SETE = 7;
    const btnsFilter = screen.getAllByTestId('pokemon-type-button');
    expect(btnsFilter).toHaveLength(SETE);
    const allBtn = screen.getByRole('button', { name: /all/i });
    expect(allBtn).not.toBeDisabled();
    userEvent.click(allBtn);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();

    userEvent.click(btnsFilter[0]);
    expect(btnsFilter[0].innerHTML).toBe('Electric');
    const pokeType = screen.getByTestId('pokemon-type');
    const btn = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(pokeType.innerHTML).toBe('Electric');
    expect(allBtn).not.toBeDisabled();
    expect(btn).toBeDisabled();

    userEvent.click(btnsFilter[1]);
    expect(btnsFilter[1].innerHTML).toBe('Fire');
    const pokeType2 = screen.getByTestId('pokemon-type');
    expect(pokeType2.innerHTML).toBe('Fire');
    expect(allBtn).not.toBeDisabled();
    expect(btn).not.toBeDisabled();
    userEvent.click(btn);
    expect(pokeType2.innerHTML).toBe('Fire');
  });
});
