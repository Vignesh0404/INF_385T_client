import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

import App from './App';

describe("Render App Component", () => {
  
  it('should be present', async () => {
    render(<Router>
      <App /></Router>
    );
  
  const homeElement = screen.getByText(/Home page/i);
  expect(homeElement).toBeInTheDocument();
  
  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();

  const productListElement = screen.getByText(/Product List/i);
  expect(productListElement).toBeInTheDocument();
 
  });

  it('should not be present', async () => {
    render(<Router>
      <App /></Router>
    );
  
  const accountPageElement = screen.getByText(/Account Page/i);
  expect(accountPageElement).Not.toBeInTheDocument();
  
});
}




