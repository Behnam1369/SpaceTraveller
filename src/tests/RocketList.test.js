import TestRenderer from 'react-test-renderer';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import RocketList from '../components/RocketList';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';
import App from '../App';

describe('Unit Testing Mission', () => {
  it('Test Mission component snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={configureStore}>
        <RocketList />
      </Provider>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});

describe('Testing Rockets in Application', () => {
  it('Test reserve functionality', () => {
    const list = [
      {
        id: 'key1',
        name: 'TEST ROCKET',
        description: 'TEST DESCRIPTION',
        image: 'https://imgur.com/DaCfMsj.jpg',
        reserved: false,
      },
    ];

    configureStore.dispatch({ type: 'space-traveller/rockets/GET_API_DATA', data: list });

    render(
      <Provider store={configureStore}>
        <App />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Reserve now!'));
    expect(screen.getByTestId('teal')).toHaveTextContent('reserved');
  });

  it('Test remove reservation functionality', () => {
    const list = [
      {
        id: 'key1',
        name: 'TEST ROCKET',
        description: 'TEST DESCRIPTION',
        image: 'https://imgur.com/DaCfMsj.jpg',
        reserved: true,
      },
    ];

    configureStore.dispatch({ type: 'space-traveller/rockets/GET_API_DATA', data: list });
    render(
      <Provider store={configureStore}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Remove reservation'));
    expect(screen.getByTestId('quit')).toHaveTextContent('Reserve now!');
  });
});
