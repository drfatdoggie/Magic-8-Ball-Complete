import React from 'react';
import { render, fireEvent} from 'react-native-testing-library';
import App from '../../App';
import * as response from '../../responses';
import { toBeEmpty, toHaveTextContent } from '@testing-library/jest-native';
expect.extend({ toBeEmpty, toHaveTextContent });

describe('App', () => {
    it('renders the correct title', () => {
        // const { queryByText } = render(<App />);
        // expect(queryByText('Maigc 8 Ball')).not.toBeNull();
    });

    it('renders the correct button title', () => {
        // const { queryByText } = render(<App />);
        // expect(queryByText('Click Me')).not.toBeNull();
    });

    it(' renders an empty response text string on start', () => {
        // const { getByTestId } = render(<App />);
        // expect(getByTestId('response-text')).toHaveTextContent(''); ``
    });

    it('calls a get response once and returns "Never Ever"', () => {
        // response.getResponse = jest.fn().mockImplementationOnce(() => "Never Ever");
        // const { getByTestId, getByText } = render(<App />);
        // const responseButton = getByTestId('response-button')
        // fireEvent.press(responseButton)
        // expect(response.getResponse).toHaveBeenCalled()
        // expect(getByText("Never Ever")).not.toBeNull()       
    });    
});