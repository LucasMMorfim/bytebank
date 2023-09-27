import { render, screen } from "@testing-library/react";
import Transacoes from "./index";
import styles from '../Extrato.module.css'

it('Should be render the same component with updated props', () => {
  const transaction = {
    transacao: 'Depósito',
    valor: 100,
  }
  const {rerender} = render(<Transacoes estilos={styles} transacao={transaction}/>)
  const transactionType = screen.getByTestId('tipoTransacao')
  const transactionValue = screen.getByTestId('valorTransacao')

  expect(transactionType).toHaveTextContent('Depósito')
  expect(transactionValue).toHaveTextContent('R$ 100')

  const newTransaction = {
    transacao: 'Transferência',
    valor: 50,
  }

  rerender(<Transacoes estilos={styles} transacao={newTransaction}/>)
  const newTransactionType = screen.getByTestId('tipoTransacao')
  const newTransactionValue = screen.getByTestId('valorTransacao')

  expect(newTransactionType).toHaveTextContent('Transferência')
  expect(newTransactionValue).toHaveTextContent('- R$ 50')
});
