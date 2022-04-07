import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Testing Header', () => {
  it('Testing Header component snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});
