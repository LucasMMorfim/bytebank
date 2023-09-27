import { render, screen } from '@testing-library/react';
import Menu from './index';

it('Render a link to the initial page', () => {
  render(<Menu />);
  const linkInicialPage = screen.getByText('Inicial');
  expect(linkInicialPage).toBeInTheDocument();
});

it('Render a list of links', () => {
  render(<Menu />);
  const listOfLinks = screen.getAllByRole('link');
  expect(listOfLinks).toHaveLength(4);
});

it('Should be not render an link of extract', () => {
  render(<Menu />);
  const extractLink = screen.queryByText('Extrato');
  expect(extractLink).not.toBeInTheDocument();
});

it('Should be render a list of links with link class', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'))
  expect(links).toMatchSnapshot()
})