import TestRenderer from 'react-test-renderer';
// import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';

describe('Testing Mission', () => {
  it('Testing Mission component snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Provider store={configureStore}>
        <Mission
          key="key1"
          id="key1"
          description="A Sample Mission Description"
          name="Impossible Mission"
        />
      </Provider>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});
