/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import App from './App';

it('should render Hello Jest! text', () => {
  const { getByText } = render(<App />);

  const textFound = getByText(/hello jest!/i);

  expect(textFound).toBeInTheDocument();
});
