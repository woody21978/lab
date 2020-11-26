import { store } from '@risingstack/react-easy-state';

const state = store({
	gifs: [],
	countGifs: 0,
	limit: 12,
	offset: 1,
	q: 'web',
});

export default state;
