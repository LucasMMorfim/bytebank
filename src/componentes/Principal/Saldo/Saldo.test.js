import { render, screen } from '@testing-library/react';
import Saldo from './index'

describe('<Saldo />', () => {

  it('Should be render the balance with monetizing value', () => {
    render(<Saldo saldo={1000} />)

    const balance = screen.getByTestId('saldo')
    expect(balance).toHaveTextContent('R$ 1000')
  });

});
