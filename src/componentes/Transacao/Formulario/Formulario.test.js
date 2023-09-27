import { render, screen } from "@testing-library/react"
import Formulario from "./index"
import userEvent from "@testing-library/user-event"

describe('Should be render an input', () => {
  
  it('in the document', () => {
    render(<Formulario />)
    const input = screen.getByPlaceholderText('Digite um valor')
    expect(input).toBeInTheDocument()
  });
  
  it('with type number', () => {
    render(<Formulario />)
    const input = screen.getByPlaceholderText('Digite um valor')
    expect(input).toHaveAttribute('type', 'number')
  });
  
  it('that can be populated', () => {
    render(<Formulario />)
    const input = screen.getByPlaceholderText('Digite um valor')
    userEvent.type(input, '50')
    expect(input).toHaveValue(50)
  });
  
  it('Should be call an onSubmit event when click on make transaction', () => {
    const makeTransaction = jest.fn();

    render(<Formulario realizarTransacao={makeTransaction} />);
    const button = screen.getByRole('button')

    userEvent.click(button)
    expect(makeTransaction).toHaveBeenCalledTimes(1)
  })

  it('Should be possible to chose an option from the <select/> element', () => {
    const chooseOption = jest.fn();

    render(<Formulario />);
    const select = screen.getByRole('combobox')
    userEvent.selectOptions(select, ['Depósito'])

    expect(
      screen.getByRole('option', { name: 'Selecione um tipo de transação' }).selected
    ).toBe(false);
    expect(
      screen.getByRole('option', { name: 'Depósito' }).selected
    ).toBe(true);
  })
})


