import { screen, render } from "@testing-library/react";
import Menu from "./index";

//getByText quando você espera que o elemento esteja na DOM.

test( 'Deve renderizar o link Inicial', () => {
    render( <Menu/> );
    const linkInicial = screen.getByText('Inicial');
    expect( linkInicial).toBeInTheDocument();
});

//getAllRole retorna um array para encontrar um elemento pelo seu papel acessível, como "button", "heading", "textbox", etc.
test('Deve renderizar uma lista de links', () => {
    render(<Menu />);
    const listaDeLinks = screen.getAllByRole('link');
    expect(listaDeLinks).toHaveLength(4);
  });

// queryByText quando você não espera que o elemento esteja presente ou quando você está testando sua ausência.
test('Não deve renderizar o link para Extrato', () => {
    render(<Menu />);
    const linkExtrato = screen.queryByText('Extrato');
    expect(linkExtrato).not.toBeInTheDocument();
  });

// toMatchSnapshot  cria uma captura de estado (snapshot) dos links para garantir que a renderização não mudou inesperadamente
test('Deve renderizar uma lista de links com a classe link', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
  });