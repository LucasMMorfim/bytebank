import { render, screen } from '@testing-library/react';
import Extrato from './index';

it('Should be render a list of transactions', () => {
  const transactions = [
    {
      transaction: 'Deposit',
      value: 100,
    },
  ];

  render(<Extrato transacoes={transactions}/>);
  const list = screen.getByRole('listitem');
  expect(list).toBeInTheDocument();
});
