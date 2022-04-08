import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import '@testing-library/jest-dom';
import configureStore from '../redux/configureStore';

describe('Testing Mission', () => {
  it('Testing Mission component snapshot', () => {
    const element = {
      id: 'key1',
      name: 'TEST ROCKET',
      description: 'TEST DESCRIPTION',
      image: 'https://imgur.com/DaCfMsj.jpg',
      reserved: true,
    };
    const testRenderer = TestRenderer.create(
      <Provider store={configureStore}>
        <Rocket
          key="key1"
          name="key1"
          description="A Sample rocket"
          image="https://imgur.com/DaCfMsj.jpg"
          el={element}
        />
      </Provider>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});
