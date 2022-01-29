import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import ProfileRocketsDisplay from '../components/ProfileRocketsDisplay';

describe('Render the rockets list in profile page', () => {
  it('Renders the rockets list in profile page correctly', () => {
    const rocketsList = TestRenderer.create(
      <Provider store={store}>
        <ProfileRocketsDisplay />
      </Provider>,
    ).toJSON();
    expect(rocketsList).toMatchSnapshot();
  });
});
