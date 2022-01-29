import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../redux/configStore';
import Header from '../components/Header';

describe('Render the header', () => {
  it('Renders the header', () => {
    const header = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });
});
