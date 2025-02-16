import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {contentStore} from "./state/store";

test('renders learn react link', () => {
  render(<App store={contentStore}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
