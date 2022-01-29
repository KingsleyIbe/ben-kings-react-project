import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/configStore';

describe('Render the rockets list', () => {
  it('Renders the rockets correctly', () => {
    const rockt = {
      id: 22,
      rocket_name: 'one',
      description: 'a rocket',
      flickr_images: 'https://imgur.com/DaCfMsj.jpg',
      reserved: true,
    };
    const rockets = TestRenderer.create(
      <Provider store={store}>
        <Rockets key={rockt.id} rockets={rockt} />
      </Provider>,
    ).toJSON();
    expect(rockets).toMatchSnapshot();
  });
});
