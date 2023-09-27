import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

it('Render logged in user name', () => {
  render(<Cabecalho />);
  const userName = screen.getByText('Joana Fonseca Gomes');
  expect(userName).toBeInTheDocument();
});
