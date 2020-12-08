import { store } from '@risingstack/react-easy-state';

const state = store({
	gifs: [],
	limit: 12,
	offset: 1,
	q: 'web',
});

export default state;
