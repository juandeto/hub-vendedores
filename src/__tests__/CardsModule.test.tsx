import React from 'react';
import { render } from '@testing-library/react'
import  MODULES_CONTENT  from 'utils/ModulesContents'
import CardsDisplay from 'components/modules/CardsModule/CardsDisplay'
import ModuleList from 'components/layout/ModuleList'

test('renders the cards', () => {

  const { getAllByTestId } = render(<CardsDisplay />)
  const cards = getAllByTestId('moduleCard')
  expect(cards.length).toEqual(MODULES_CONTENT.length)
});


test('renders module list', () => {

  const { getAllByRole } = render(<ModuleList />)
  const itemsInList = getAllByRole('listitem')
  expect(itemsInList.length).toEqual(MODULES_CONTENT.length)
});
