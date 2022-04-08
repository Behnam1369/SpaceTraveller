import TestRenderer from 'react-test-renderer';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';
import App from '../App';

describe('Testing MyProfile', () => {
  it('Testing MyProfile component snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={configureStore}>
        <MyProfile />
      </Provider>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});

describe('Testing MyProfile component in Application', () => {
  it('Test showing the correct list of subscribed items', () => {
    const missions = [
      {
        mission_name: 'FIRST MISSION',
        mission_id: 'key1',
        description: 'TEST DESCRIPTION',
        reserved: false,
      },
      {
        mission_name: 'SECOND MISSION',
        mission_id: 'key2',
        description: 'ANOTHER TEST DESCRIPTION ',
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
    fireEvent.click(screen.getByText('My Profile'));
    waitFor(() => screen.getByText('SECOND MISSION'));
    expect(screen.getByText('SECOND MISSION')).toBeInTheDocument();
  });
});
