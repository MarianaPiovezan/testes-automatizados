import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe( 'Deve renderizar um campo de input ', () => {

    test( 'no documento', () => {
        render(<Formulario />);
        const inputTexto = screen.getByPlaceholderText('Digite um valor');
        expect(inputTexto).toBeInTheDocument();
    })

    test(' com o tipo número', () => {
        render(<Formulario />);
        const inputTexto = screen.getByPlaceholderText('Digite um valor');
        expect(inputTexto).toHaveAttribute('type','number');
    })

    //teste que simule o usuário interagindo

    test(' quando preencher', () => {
        render( <Formulario/>);
        const inputTexto = screen.getByPlaceholderText('Digite um valor');
        userEvent.type( inputTexto, '50');
        expect(inputTexto).toHaveValue(50)
    })
})