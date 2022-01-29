import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import ProfileMissionsDisplay from '../components/ProfileMissionsDisplay';

describe('Render the missions list in profile page', () => {
  it('Renders the missions list in profile page correctly', () => {
    const missionsList = TestRenderer.create(
      <Provider store={store}>
        <ProfileMissionsDisplay />
      </Provider>,
    ).toJSON();
    expect(missionsList).toMatchSnapshot();
  });
});
