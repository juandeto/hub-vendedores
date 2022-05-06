import React from 'react';
import { render } from '@testing-library/react'
import StaticHeroTitles from 'components/layout/StaticHeroTitles'

const { getComputedStyle } = window;

window.getComputedStyle = (elt) => getComputedStyle(elt);

test('renders the static hero with title', () => {
  const {getByText} = render(<StaticHeroTitles />)
  const title = getByText(/staticHero.title/i)
  expect(title).toHaveClass('title primary')
});
