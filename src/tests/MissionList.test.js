import TestRenderer from 'react-test-renderer';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionList from '../components/MissionList';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';
import App from '../App';

describe('Unit Testing Mission', () => {
  it('Test Mission component snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={configureStore}>
        <MissionList />
      </Provider>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});

describe('Testing Mission in Application', () => {
  it('Test join functionality', () => {
    const missions = [
      {
        mission_name: 'TEST MISSION',
        mission_id: 'key1',
        description: 'TEST DESCRIPTION',
        reserved: false,
      },
    ];

    configureStore.dispatch({ type: 'space-traveller/missions/GET MISSIONS', missions });
    configureStore.dispatch({ type: 'book-store/books/SET LOADING', loading: false });
    render(
      <Provider store={configureStore}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Missions'));
    waitFor(() => screen.getByText('Join Mission')[0]);
    fireEvent.click(screen.getByText('Join Mission'));
    expect(screen.getByTestId('badge')).toHaveTextContent('Active Member');
  });

  it('Test leave functionality', () => {
    const missions = [
      {
        mission_name: 'TEST MISSION',
        mission_id: 'key1',
        description: 'TEST DESCRIPTION',
        reserved: false,
        joined: true,
      },
    ];

    configureStore.dispatch({ type: 'space-traveller/missions/GET MISSIONS', missions });
    configureStore.dispatch({ type: 'book-store/books/SET LOADING', loading: false });
    render(
      <Provider store={configureStore}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Missions'));
    waitFor(() => screen.getByText('Leave Mission')[0]);
    fireEvent.click(screen.getByText('Leave Mission'));
    expect(screen.getByTestId('badge')).toHaveTextContent('NOT A MEMBER');
  });
});
