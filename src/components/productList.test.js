import React from 'react'
import { render, act, screen } from '@testing-library/react'
//import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './productList'

describe('ProductList', () => {
    beforeEach(() => {
        fetch.doMock()
        fetch.resetMocks()
      })

  test('renders product list when API call succeeds', async () => {
    const fakeProducts = [
        { image: 'image1.jpg', title: 'red hat', price:'$29.99' },
        { image: 'image2.jpg', title: 'blue jeans', price:'$49.99' },
      ];
    fetch.mockResponse(JSON.stringify(fakeProducts), {ok: true, status: 200});

    render(<ProductList/>);
    expect(await screen.getByRole('heading')).toHaveTextContent('Product List');
    expect(await screen.findByText('red hat')).toBeInTheDocument();
    expect(await screen.findByText('blue jeans')).toBeInTheDocument();
  })
});

