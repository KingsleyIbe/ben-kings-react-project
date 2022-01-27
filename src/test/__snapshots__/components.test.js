import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionList from '../../components/MissionList';

describe('Test UI of the webpage', () => {
  it('Mission data displays on the page', () => {
    const tree = renderer.create(<Provider><MissionList /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test UI of the webpage', () => {
  it('Mission data displays on the page', () => {
    const tree = renderer.create(<Provider><MissionList /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
