import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo de input ', () => {
  test('no documento', () => {
    render(<Formulario />);
    const inputTexto = screen.getByPlaceholderText('Digite um valor');
    expect(inputTexto).toBeInTheDocument();
  });

  test(' com o tipo número', () => {
    render(<Formulario />);
    const inputTexto = screen.getByPlaceholderText('Digite um valor');
    expect(inputTexto).toHaveAttribute('type', 'number');
  });

  //teste que simule o usuário interagindo

  test(' quando preencher', () => {
    render(<Formulario />);
    const inputTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(inputTexto, '50');
    expect(inputTexto).toHaveValue(50);
  });
});

// código omitido…

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
  const realizarTransacao = jest.fn(); // jest.fn ele dubla o comportamento da função que está externa, ou seja ele simula.

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});

test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
  render(<Formulario />); // renderiza o componente
  const select = screen.getByRole('combobox'); // faz a consulta do elemento select
  userEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select

  expect(
    screen.getByRole('option', { name: 'Selecione um tipo de transação' })
      .selected,
  ).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(true); // verifica se a opção de depósito foi selecionada
});
