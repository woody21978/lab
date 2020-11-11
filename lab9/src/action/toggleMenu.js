import { view } from '@risingstack/react-easy-state';
import state from '../store';

function toggleMenu() {
  state.burgerMenu.active = !state.burgerMenu.active;
}
export default view(toggleMenu);
