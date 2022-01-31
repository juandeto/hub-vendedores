import React from 'react';
import { render } from '@testing-library/react'
import StaticHeroTitles from 'components/layout/StaticHeroTitles'


test('renders the static hero with title', () => {
  const {getByText} = render(<StaticHeroTitles />)
  const title = getByText(/Como vender mas en Mercado Libre/i)
  expect(title).toHaveClass('title primary')
});
