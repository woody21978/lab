import state from "../store.js";
export default function toggleMenu() {
  state.burgerMenu.active = !state.burgerMenu.active;
}