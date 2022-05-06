import React from 'react';
import 'jest-axe/extend-expect';
import { render, fireEvent } from '@testing-library/react'
import {axe} from 'jest-axe';
import  MODULES_CONTENT  from 'utils/ModulesContents'
import CardsDisplay from 'components/modules/CardsModule/CardsDisplay'
import ModuleList from 'components/layout/ModuleList'

const { getComputedStyle } = window;

window.getComputedStyle = (elt) => getComputedStyle(elt);

test('renders the cards', () => {

  const { getAllByTestId } = render(<CardsDisplay />)
  const cards = getAllByTestId('moduleCard')
  expect(cards.length).toEqual(MODULES_CONTENT.length)
});


test('module list equals in length to module cards', () => {

  const { getAllByRole } = render(<ModuleList />)
  const itemsInList = getAllByRole('listitem')
  expect(itemsInList.length).toEqual(MODULES_CONTENT.length)
});


test('if the accordion works with keyboard', () => {

  const { getAllByRole, getAllByTestId } = render(<CardsDisplay />)
  const itemsInList = getAllByRole('button', {name: /módulo/i})
  const accordions = getAllByTestId('accordion')

for (let i = 0; i < itemsInList.length; i += 1) {
   fireEvent.keyDown(itemsInList[i], {key: 'Enter', code: 'Enter', charCode: 13})
   expect(accordions[i]).toHaveAttribute("aria-hidden", "false")
}
});

test('if the accordion works with click', () => {

  const { getAllByRole, getAllByTestId } = render(<CardsDisplay />)
  const itemsInList = getAllByRole('button', {name: /módulo/i})
  const accordions = getAllByTestId('accordion')

for (let i = 0; i < itemsInList.length; i += 1) {
   fireEvent.click(itemsInList[i])
   expect(accordions[i]).toHaveAttribute("aria-hidden", "false")
}
});

test('the accordion is accesible', async () => {
  const { container } = render(<CardsDisplay />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
});