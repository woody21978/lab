// import { view } from '@risingstack/react-easy-state';
import state from '../../store.js';
import requestApi from '../../action/getGifs.js';

export default function InfiniteScroll(event) {
	if (
		event.target.scrollHeight - event.target.scrollTop <=
		event.target.clientHeight + 1
	) {
		state.offset += state.limit;
		state.countGifs = state.gifs.length;
		(async () => {
			await requestApi(state.q, state.limit, state.offset);
		})();
	}
}
