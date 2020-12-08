// import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import requestApi from '../../action/getGifs';

export default function InfiniteScroll(event) {
	if (
		event.target.scrollHeight - event.target.scrollTop <=
		event.target.clientHeight + 1
	) {
		state.offset += state.limit;
		(async () => {
			await requestApi(state.q, state.limit, state.offset);
		})();
	}
}
