import { calculaNovoSaldo } from "./index";

describe('when I carry out a transaction', () => {
  it('Which is a deposit, the balance must increase', () => {
    const transaction = {
      transacao: 'Depósito',
      valor: 50,
    }

    const newBalance = calculaNovoSaldo(transaction, 100);
    expect(newBalance).toBe(150)
  })

  it('Which is a transfer, the balance must decrease', () => {
    const transaction = {
      transacao: 'Transferência',
      valor: 50,
    }

    const newBalance = calculaNovoSaldo(transaction, 100);
    expect(newBalance).toBe(50)
  })
  
  it('Should be return the balance value updated with the income', () => {
    const calcIncome = jest.fn((balance) => balance + balance * 0.005);
  
    const balance = 100;
  
    const newBalance = calcIncome(balance);
  
    expect(newBalance).toBe(100.5);
    expect(calcIncome).toBeCalled();  
    expect(calcIncome).toHaveBeenCalledWith(balance);
  })  
})
